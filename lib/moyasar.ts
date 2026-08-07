/**
 * Moyasar client. Server-only — this module reads the secret key and must
 * never be imported into a client component.
 *
 * Amounts are handled in halalas (1 SAR = 100 halalas) at the API boundary
 * so there is no floating-point money anywhere in the request.
 */

const API = "https://api.moyasar.com/v1";

export type MoyasarInvoice = {
  id: string;
  status: "initiated" | "paid" | "failed" | "canceled" | "expired";
  amount: number;
  currency: string;
  description: string;
  url: string;
  metadata?: Record<string, string>;
  payments?: { id: string; status: string; amount: number }[];
};

function secretKey(): string {
  const key = process.env.MOYASAR_SECRET_KEY;
  if (!key) {
    throw new Error(
      "MOYASAR_SECRET_KEY is not set. Add it in Vercel → Settings → Environment Variables."
    );
  }
  return key;
}

/** Moyasar uses HTTP Basic with the secret key as username and no password. */
function authHeader(): string {
  return `Basic ${Buffer.from(`${secretKey()}:`).toString("base64")}`;
}

export function toHalalas(sar: number): number {
  return Math.round(sar * 100);
}

export function fromHalalas(halalas: number): number {
  return halalas / 100;
}

/** True when the configured key is a test key. Used to label the UI. */
export function isTestMode(): boolean {
  return (process.env.MOYASAR_SECRET_KEY ?? "").startsWith("sk_test");
}

export type CreateInvoiceParams = {
  /** Whole SAR. Converted to halalas here. */
  amountSar: number;
  description: string;
  /** Server-to-server notification when the invoice is paid. */
  callbackUrl: string;
  /** Where the payer lands after a successful payment. */
  successUrl: string;
  /** Where the payer lands if they back out. */
  backUrl: string;
  metadata: Record<string, string>;
};

export async function createInvoice(
  params: CreateInvoiceParams
): Promise<MoyasarInvoice> {
  const res = await fetch(`${API}/invoices`, {
    method: "POST",
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: toHalalas(params.amountSar),
      currency: "SAR",
      description: params.description,
      callback_url: params.callbackUrl,
      success_url: params.successUrl,
      back_url: params.backUrl,
      metadata: params.metadata,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Moyasar invoice creation failed (${res.status}): ${detail}`);
  }

  return (await res.json()) as MoyasarInvoice;
}

/**
 * Re-read an invoice straight from Moyasar.
 *
 * The webhook payload is never trusted on its own — anyone can POST JSON at
 * our endpoint. Every notification is verified by fetching the invoice with
 * our secret key and checking the status and amount against what we expect.
 */
export async function fetchInvoice(id: string): Promise<MoyasarInvoice> {
  const res = await fetch(`${API}/invoices/${encodeURIComponent(id)}`, {
    headers: { Authorization: authHeader() },
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Moyasar invoice fetch failed (${res.status}): ${detail}`);
  }

  return (await res.json()) as MoyasarInvoice;
}
