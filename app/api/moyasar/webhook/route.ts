import { NextRequest, NextResponse } from "next/server";
import { fetchInvoice, fromHalalas } from "@/lib/moyasar";
import { notifyOrder, type Customer } from "@/lib/orders";
import { claim } from "@/lib/stock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Payment confirmation from Moyasar.
 *
 * Three rules govern this endpoint:
 *
 * 1. If MOYASAR_WEBHOOK_TOKEN is set, the request must carry it. Moyasar
 *    puts the token in the payload body; some setups also send a header,
 *    so both are accepted.
 *
 * 2. The body is a hint, never the truth. Anyone can POST JSON claiming an
 *    order was paid, so we take only the invoice id from it and re-fetch
 *    that invoice from Moyasar with our secret key. Status and amount are
 *    read from that response.
 *
 * 3. We always answer 200. A non-200 makes Moyasar retry, and a bug on our
 *    side should not become a retry storm against a payment that has in
 *    fact already succeeded.
 */

/**
 * Best-effort duplicate guard.
 *
 * We register a callback_url on each invoice and the dashboard webhook may
 * be configured too, so the same payment can notify us twice within seconds.
 * A warm serverless instance catches that here. It is not a guarantee — a
 * cold start clears this — but it removes the common double-email case.
 */
const recentlyHandled = new Map<string, number>();
const DEDUPE_WINDOW_MS = 5 * 60 * 1000;

function alreadyHandled(id: string): boolean {
  const now = Date.now();
  for (const [key, at] of recentlyHandled) {
    if (now - at > DEDUPE_WINDOW_MS) recentlyHandled.delete(key);
  }
  if (recentlyHandled.has(id)) return true;
  recentlyHandled.set(id, now);
  return false;
}

function tokenAccepted(request: NextRequest, body: Record<string, any> | null): boolean {
  const expected = process.env.MOYASAR_WEBHOOK_TOKEN;
  if (!expected) return true; // not configured — skip the check

  const fromBody = body?.secret_token ?? body?.secretToken;
  const fromHeader =
    request.headers.get("x-moyasar-token") ??
    request.headers.get("x-webhook-token") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  return fromBody === expected || fromHeader === expected;
}

/**
 * Find the invoice id in whichever payload shape arrived.
 *
 * - Dashboard webhook: { type, data: { ...payment, invoice_id } }
 * - Invoice callback_url: the invoice object itself, { id, status, ... }
 */
function extractInvoiceId(body: Record<string, any> | null): string | null {
  const looksLikePayment = Boolean(body?.source || body?.data?.source);
  const candidates = [
    body?.data?.invoice_id,
    body?.invoice_id,
    body?.invoice?.id,
    looksLikePayment ? null : body?.id,
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c.length > 0) return c;
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!tokenAccepted(request, body)) {
      console.error("Webhook rejected: bad or missing secret token");
      return NextResponse.json({ received: true });
    }

    const invoiceId = extractInvoiceId(body);
    if (!invoiceId) {
      console.error(
        "Webhook without a usable invoice id:",
        JSON.stringify(body ?? {}).slice(0, 400)
      );
      return NextResponse.json({ received: true });
    }

    // Verify against Moyasar rather than trusting the payload.
    const invoice = await fetchInvoice(invoiceId);

    if (invoice.status !== "paid") {
      console.log(`Invoice ${invoiceId} is ${invoice.status}; nothing to do.`);
      return NextResponse.json({ received: true });
    }

    if (alreadyHandled(invoiceId)) {
      console.log(`Invoice ${invoiceId} already handled; skipping duplicate.`);
      return NextResponse.json({ received: true });
    }

    const meta = invoice.metadata ?? {};
    const paidSar = fromHalalas(invoice.amount);
    const expectedSar = Number(meta.expected_amount_sar ?? NaN);

    // Guard against an invoice being paid for less than it was raised for.
    if (Number.isFinite(expectedSar) && paidSar + 0.001 < expectedSar) {
      console.error(
        `Underpayment on ${invoiceId}: paid ${paidSar}, expected ${expectedSar}`
      );
      return NextResponse.json({ received: true });
    }

    // Take the stock now that the money is confirmed. Deliberately after the
    // dedupe check above, so a repeated notification cannot decrement twice.
    // item_codes looks like "panel:1,cap:2".
    const codes = String(meta.item_codes ?? "")
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
    for (const code of codes) {
      const [slug, rawQty] = code.split(":");
      const qty = Math.max(1, Math.floor(Number(rawQty)) || 1);
      const result = await claim(slug, qty);
      if (!result.ok) {
        console.error(
          `OVERSOLD ${slug} x${qty} on invoice ${invoiceId} (ref ${
            meta.reference ?? "?"
          }). Refund this order.`
        );
      }
    }

    const customer: Customer = {
      name: meta.name ?? "",
      email: meta.email ?? "",
      phone: meta.phone ?? "",
      province: meta.province ?? "",
      city: meta.city ?? "",
      shortAddress: meta.short_address ?? "",
      address: meta.address ?? "",
      notes: meta.notes ?? "",
    };

    await notifyOrder({
      reference: meta.reference ?? invoiceId,
      invoiceId,
      amountSar: paidSar,
      customer,
      itemSummary: meta.items ?? invoice.description,
      productImage: meta.product_image ?? "",
      deliverySar: Number(meta.delivery_sar ?? 0),
      locale: meta.locale === "ar" ? "ar" : "en",
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handling error:", error);
    // Still 200 — see rule 3 above.
    return NextResponse.json({ received: true });
  }
}

/** Moyasar probes the endpoint on save; make that harmless. */
export async function GET() {
  return NextResponse.json({ ok: true });
}
