import { NextRequest, NextResponse } from "next/server";
import { createInvoice } from "@/lib/moyasar";
import { findProduct } from "@/lib/products";
import {
  orderReference,
  validateCustomer,
  type OrderLine,
} from "@/lib/orders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_QTY_PER_LINE = 5;

/** Absolute site origin, used to build the return URLs Moyasar redirects to. */
function siteOrigin(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  const host = request.headers.get("host");
  const proto = host?.startsWith("localhost") ? "http" : "https";
  return `${proto}://${host}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    const locale: "en" | "ar" = body.locale === "ar" ? "ar" : "en";

    // ---- customer ----
    const check = validateCustomer(body.customer ?? {});
    if (!check.ok) {
      return NextResponse.json(
        { success: false, message: "Invalid details", fields: check.fields },
        { status: 400 }
      );
    }
    const customer = check.customer;

    // ---- lines: the browser sends slug + quantity only ----
    const rawLines: OrderLine[] = Array.isArray(body.lines) ? body.lines : [];
    if (!rawLines.length) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    // Price is resolved on the server from our own catalogue. Any amount sent
    // by the client is ignored — otherwise a customer could set their own price.
    let amountSar = 0;
    const descriptions: string[] = [];
    // Compact slug:qty pairs, so the confirmation page can list and link
    // the items without needing any storage.
    const itemCodes: string[] = [];

    for (const line of rawLines) {
      const product = findProduct(String(line.slug ?? ""));
      if (!product || product.status !== "available") {
        return NextResponse.json(
          { success: false, message: `Unavailable item: ${line.slug}` },
          { status: 400 }
        );
      }
      const qty = Math.floor(Number(line.quantity));
      if (!Number.isFinite(qty) || qty < 1 || qty > MAX_QTY_PER_LINE) {
        return NextResponse.json(
          { success: false, message: "Invalid quantity" },
          { status: 400 }
        );
      }
      amountSar += product.price * qty;
      descriptions.push(`${product.name} x${qty}`);
      itemCodes.push(`${product.slug}:${qty}`);
    }

    if (amountSar <= 0) {
      return NextResponse.json(
        { success: false, message: "Invalid order total" },
        { status: 400 }
      );
    }

    const reference = orderReference();
    const origin = siteOrigin(request);
    const localePrefix = locale === "ar" ? "/ar" : "";

    const invoice = await createInvoice({
      amountSar,
      description: `minara labs — ${reference} — ${descriptions.join(", ")}`,
      // Server-to-server notification. This is what actually confirms payment.
      callbackUrl: `${origin}/api/moyasar/webhook`,
      // Where the customer lands afterwards.
      successUrl: `${origin}${localePrefix}/order/complete?ref=${reference}&items=${encodeURIComponent(
        itemCodes.join(",")
      )}`,
      backUrl: `${origin}${localePrefix}/product/panel`,
      // Metadata comes back to us on the webhook, so the shipping details
      // travel with the payment rather than needing storage in between.
      metadata: {
        reference,
        locale,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        province: customer.province,
        city: customer.city,
        short_address: customer.shortAddress,
        address: customer.address,
        notes: customer.notes ?? "",
        items: descriptions.join(", "),
        expected_amount_sar: String(amountSar),
      },
    });

    return NextResponse.json({
      success: true,
      url: invoice.url,
      reference,
      amountSar,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    const message =
      error instanceof Error && error.message.includes("MOYASAR_SECRET_KEY")
        ? "Payments are not configured yet."
        : "Could not start checkout. Please try again.";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
