/**
 * Order shaping, validation and notification.
 *
 * There is no database. Orders live in two places: the email that reaches
 * minaralabs@gmail.com the moment a payment clears, and Moyasar's own
 * dashboard, which holds the authoritative payment record. For the first
 * batch that is enough; add storage when volume justifies it.
 */

import { cityBelongsTo, findProvince, normaliseShortAddress } from "./saudi";

export const MERCHANT_EMAIL = "minaralabs@gmail.com";

export type Customer = {
  name: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  /** Saudi National Address short code, e.g. RQAA2929. */
  shortAddress: string;
  address: string;
  notes?: string;
};

export type OrderLine = { slug: string; quantity: number };

export type OrderDraft = {
  customer: Customer;
  lines: OrderLine[];
  locale: "en" | "ar";
};

/** Saudi mobile: 05XXXXXXXX, or +9665XXXXXXXX / 9665XXXXXXXX. */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[\s()-]/g, "");
  let m = digits.match(/^\+?966(5\d{8})$/);
  if (m) return `+966${m[1]}`;
  m = digits.match(/^0(5\d{8})$/);
  if (m) return `+966${m[1]}`;
  m = digits.match(/^(5\d{8})$/);
  if (m) return `+966${m[1]}`;
  return null;
}

export function validEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Validate a customer payload arriving from the browser.
 * Returns a cleaned customer, or the list of field names that failed.
 */
export function validateCustomer(
  input: Partial<Customer>
): { ok: true; customer: Customer } | { ok: false; fields: string[] } {
  const fields: string[] = [];

  const name = (input.name ?? "").trim();
  if (name.length < 2 || name.length > 80) fields.push("name");

  const email = (input.email ?? "").trim().toLowerCase();
  if (!validEmail(email)) fields.push("email");

  const phone = normalisePhone(input.phone ?? "");
  if (!phone) fields.push("phone");

  const province = (input.province ?? "").trim();
  if (!findProvince(province)) fields.push("province");

  const city = (input.city ?? "").trim();
  if (!city || city.length > 60 || !cityBelongsTo(province, city)) {
    fields.push("city");
  }

  const shortAddress = normaliseShortAddress(input.shortAddress ?? "");
  if (!shortAddress) fields.push("shortAddress");

  const address = (input.address ?? "").trim();
  if (address.length < 10 || address.length > 300) fields.push("address");

  const notes = (input.notes ?? "").trim().slice(0, 500);

  if (fields.length) return { ok: false, fields };
  return {
    ok: true,
    customer: {
      name,
      email,
      phone: phone!,
      province,
      city,
      shortAddress: shortAddress!,
      address,
      notes,
    },
  };
}

/** Short human-readable reference, e.g. MNR-8F3K2Q. */
export function orderReference(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `MNR-${out}`;
}

async function sendViaLoops(payload: {
  transactionalId: string;
  email: string;
  dataVariables: Record<string, string | number>;
}): Promise<boolean> {
  const key = process.env.LOOPS_API_KEY;
  if (!key) {
    console.error("LOOPS_API_KEY not set — cannot send order email");
    return false;
  }
  try {
    const res = await fetch("https://app.loops.so/api/v1/transactional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("Loops transactional failed", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("Loops transactional threw", err);
    return false;
  }
}

export type PaidOrder = {
  reference: string;
  invoiceId: string;
  amountSar: number;
  customer: Customer;
  itemSummary: string;
  locale: "en" | "ar";
};

/**
 * Notify the merchant, then the customer.
 *
 * Neither send is allowed to throw: the payment has already succeeded by
 * this point, and a failed email must never turn into a failed order.
 */
export async function notifyOrder(order: PaidOrder): Promise<void> {
  const merchantTemplate = process.env.LOOPS_MERCHANT_TEMPLATE_ID;
  const customerTemplate = process.env.LOOPS_RECEIPT_TEMPLATE_ID;

  const vars = {
    reference: order.reference,
    invoiceId: order.invoiceId,
    amount: `SAR ${order.amountSar.toLocaleString("en-US")}`,
    name: order.customer.name,
    // Loops reserves `email` as a contact property, so the buyer's address
    // travels as customerEmail in dataVariables.
    customerEmail: order.customer.email,
    phone: order.customer.phone,
    province: order.customer.province,
    city: order.customer.city,
    shortAddress: order.customer.shortAddress,
    address: order.customer.address,
    // Loops reserves `notes` as a contact property, so it travels as deliveryNotes.
    deliveryNotes: order.customer.notes || "—",
    items: order.itemSummary,
  };

  // Always log the full order. If every email path fails, the order still
  // exists in the Vercel runtime logs and in the Moyasar dashboard.
  console.log("PAID ORDER", JSON.stringify(vars));

  if (merchantTemplate) {
    await sendViaLoops({
      transactionalId: merchantTemplate,
      email: MERCHANT_EMAIL,
      dataVariables: vars,
    });
  } else {
    console.error("LOOPS_MERCHANT_TEMPLATE_ID not set — merchant not emailed");
  }

  if (customerTemplate) {
    await sendViaLoops({
      transactionalId: customerTemplate,
      email: order.customer.email,
      dataVariables: vars,
    });
  } else {
    console.error("LOOPS_RECEIPT_TEMPLATE_ID not set — customer not emailed");
  }
}
