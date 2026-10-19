import { NextRequest, NextResponse } from "next/server";
import { createInvoice } from "@/lib/moyasar";
import { DELIVERY_FEE, findProduct } from "@/lib/products";
import {
  orderReference,
  validateCustomer,
  type OrderLine,
} from "@/lib/orders";
import { isTracked, remaining } from "@/lib/stock";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    /*
      Live test pricing.

      Testing a real payment means paying real gateway fees, and dropping the
      catalogue price to do it would expose that price to anyone who happened
      to visit. So the cheap price is gated behind a secret instead: it exists
      only while TEST_CHECKOUT_CODE is set in the environment, and only for a
      request that presents that exact code.

      Absent or wrong code, this is dead and the catalogue price stands. The
      ordinary rule still holds either way: the browser never sets a price,
      the server does.
    */
    const testCode = process.env.TEST_CHECKOUT_CODE;
    const testPricing =
      Boolean(testCode) && String(body.testCode ?? "") === testCode;
    /*
      Fractional riyals are allowed here, unlike the catalogue, because the
      whole point is to charge as little as the gateway will accept. Rounded
      to two decimals so it lands on a whole number of halalas: 0.5 becomes
      50, not 49.999. Card schemes usually refuse very small amounts, so if
      Moyasar rejects the charge, raise this to 1.
    */
    const parsedTestPrice = Number(process.env.TEST_CHECKOUT_PRICE ?? 0.5);
    const testUnitPrice =
      Number.isFinite(parsedTestPrice) && parsedTestPrice > 0
        ? Math.round(parsedTestPrice * 100) / 100
        : 0.5;
    if (testPricing) {
      console.warn(
        `TEST PRICING in use: every line priced at SAR ${testUnitPrice}.`
      );
    }

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
    let firstImage = "";

    for (const line of rawLines) {
      const product = findProduct(String(line.slug ?? ""));
      if (!product || product.status !== "available") {
        return NextResponse.json(
          { success: false, message: "unavailable_item" },
          { status: 400 }
        );
      }
      const qty = Math.floor(Number(line.quantity));
      // No upper cap: how many can be bought is decided by stock, checked
      // immediately below. This only rejects values that are not real
      // quantities at all.
      if (!Number.isFinite(qty) || qty < 1) {
        return NextResponse.json(
          { success: false, message: "invalid_quantity" },
          { status: 400 }
        );
      }
      // Stock gate. This is a courtesy check so nobody reaches Moyasar for
      // a unit that is gone; the binding decrement happens in the webhook
      // once payment actually succeeds.
      if (isTracked(product.slug)) {
        const left = await remaining(product.slug);
        if (left !== null && left < qty) {
          return NextResponse.json(
            {
              success: false,
              message: left <= 0 ? "sold_out" : "insufficient_stock",
              remaining: Math.max(left, 0),
            },
            { status: 409 }
          );
        }
      }

      const unitPrice = testPricing ? testUnitPrice : product.price;
      amountSar += unitPrice * qty;
      // Marked in the description so a test never looks like a real sale in
      // the Moyasar dashboard or the seller alert.
      descriptions.push(
        `${product.name} x${qty}${testPricing ? " (TEST)" : ""}`
      );
      itemCodes.push(`${product.slug}:${qty}`);
      if (!firstImage) firstImage = product.image;
    }

    // Delivery is charged on top of the goods.
    const deliverySar = DELIVERY_FEE;
    amountSar += deliverySar;

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
        // Absolute URL so the receipt email can show the right product.
        product_image: firstImage ? `${origin}${firstImage}` : "",
        province_label: customer.province,
        delivery_sar: String(deliverySar),
        address: customer.address,
        notes: customer.notes ?? "",
        items: descriptions.join(", "),
        item_codes: itemCodes.join(","),
        expected_amount_sar: String(amountSar),
      },
    });

    return NextResponse.json({
      success: true,
      url: invoice.url,
      reference,
      amountSar,
      // Everything below is for the on-site wallet form. The redirect to
      // invoice.url ignores it, so it is inert unless NEXT_PUBLIC_WALLET_CHECKOUT
      // is on. The form is initialised against this same invoice, which is
      // why the webhook, the stock decrement and both emails are unaffected
      // by which of the two paths the customer takes.
      invoiceId: invoice.id,
      amountHalalas: invoice.amount,
      successUrl: `${origin}${localePrefix}/order/complete?ref=${reference}&items=${encodeURIComponent(
        itemCodes.join(",")
      )}`,
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
