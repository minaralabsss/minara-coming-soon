/**
 * Stock counter.
 *
 * A single integer per product slug, held in Upstash Redis and changed only
 * with atomic operations. The point of using Redis rather than a constant in
 * the code is that DECR is atomic: if two people pay for the last unit in the
 * same second, exactly one of them gets a non-negative result back.
 *
 * Setup:
 *   1. Vercel dashboard -> Storage -> Upstash Redis. The free tier is ample.
 *   2. Connecting it creates the URL and token variables automatically, named
 *      either KV_REST_API_* or UPSTASH_REDIS_REST_* depending on the route
 *      taken. Both are read below. Redeploy afterwards so the running code
 *      picks them up.
 *   3. Seed the count once, from your machine, substituting the real URL and
 *      token from Settings -> Environment Variables:
 *        curl -X POST "<url>/set/stock:panel/10" -H "Authorization: Bearer <token>"
 *
 * If the variables are absent, every function here reports "not tracked" and
 * the site behaves exactly as it did before. Nothing breaks in local
 * development, and stock enforcement simply switches off rather than blocking
 * all sales because a cache is unreachable.
 */

// Vercel names these differently depending on how the database was added.
// Connecting Upstash through the Vercel Storage tab creates KV_REST_API_URL
// and KV_REST_API_TOKEN; connecting via Upstash directly creates the
// UPSTASH_ names. Accept both so the counter works either way, and so
// nothing silently falls back to "untracked" after a reconnect.
const BASE =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

/** Slugs whose stock is limited. Anything not listed sells without a limit. */
const TRACKED = new Set(["panel"]);

export const stockTrackingEnabled = Boolean(BASE && TOKEN);

function key(slug: string): string {
  return `stock:${slug}`;
}

/** Fire one Upstash REST command. Returns null on any failure. */
async function command<T>(path: string): Promise<T | null> {
  if (!BASE || !TOKEN) return null;
  try {
    const res = await fetch(`${BASE}/${path}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Upstash ${path} failed: ${res.status}`);
      return null;
    }
    const json = (await res.json()) as { result: T };
    return json.result;
  } catch (error) {
    console.error(`Upstash ${path} error:`, error);
    return null;
  }
}

export function isTracked(slug: string): boolean {
  return stockTrackingEnabled && TRACKED.has(slug);
}

/**
 * Units remaining, or null when this slug is not tracked or Redis is
 * unreachable. Null means "no opinion" — never treat it as zero.
 */
export async function remaining(slug: string): Promise<number | null> {
  if (!isTracked(slug)) return null;
  const value = await command<string | number | null>(`get/${key(slug)}`);
  if (value === null || value === undefined) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/** True only when we positively know the count is zero or below. */
export async function isSoldOut(slug: string): Promise<boolean> {
  const left = await remaining(slug);
  return left !== null && left <= 0;
}

/**
 * Take `qty` units for a completed payment.
 *
 * DECRBY is atomic, so concurrent callers cannot both claim the same unit.
 * If the result is negative we oversold, so the units are handed straight
 * back and the caller is told — that order needs a refund.
 */
export async function claim(
  slug: string,
  qty: number
): Promise<{ ok: boolean; remaining: number | null }> {
  if (!isTracked(slug)) return { ok: true, remaining: null };

  const after = await command<number>(`decrby/${key(slug)}/${qty}`);
  if (after === null) {
    // Redis unreachable. The payment already succeeded, so refusing here
    // would help nobody; log it loudly and let the order through.
    console.error(`Stock claim failed for ${slug}; order allowed through.`);
    return { ok: true, remaining: null };
  }

  if (after < 0) {
    await command<number>(`incrby/${key(slug)}/${qty}`);
    console.error(
      `Oversold ${slug}: claim of ${qty} would leave ${after}. Refund required.`
    );
    return { ok: false, remaining: 0 };
  }

  return { ok: true, remaining: after };
}
