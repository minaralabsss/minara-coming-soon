"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Moyasar's own payment form, rendered on our domain.
 *
 * Why this exists at all: the normal path sends the customer to Moyasar's
 * hosted invoice page, and Apple Pay and Samsung Pay cannot be reached from
 * there. Samsung in particular ties a Service ID to one registered Service
 * Domain, minaralabs.shop, so the wallet sheet has to be opened by a page
 * on that domain. Moyasar still does the certificate, the key exchange and
 * the decryption; what they cannot do is render the button somewhere that
 * is not their own page.
 *
 * What this is NOT: a second payment system. The invoice is still created
 * server side by /api/checkout with all of its metadata, and the form is
 * initialised against that same invoice via invoice_id. The invoice becomes
 * paid exactly as before, so the webhook, the Upstash stock decrement and
 * both Loops emails are untouched.
 *
 * Failure is designed to be boring. If the script does not load, or the
 * version below is wrong, or window.Moyasar never appears, we hand control
 * back to the caller and the customer goes to the hosted invoice page as
 * they do today. A broken wallet must never mean a broken checkout.
 */

/*
  CONFIRM BEFORE ENABLING. Moyasar version their form library and the current
  tag is printed in the "Including Moyasar Form" block of their Apple Pay
  basic-integration guide. Copy the version from there into this constant.
  If it is wrong, nothing breaks: the load fails and checkout falls back to
  the redirect. It just means the wallets never appear.
*/
const MOYASAR_VERSION = "2.0.17";
const MOYASAR_JS = `https://cdn.moyasar.com/mpf/${MOYASAR_VERSION}/moyasar.js`;
const MOYASAR_CSS = `https://cdn.moyasar.com/mpf/${MOYASAR_VERSION}/moyasar.css`;

/** How long to wait for the library before giving up and redirecting. */
const LOAD_TIMEOUT_MS = 8000;

declare global {
  interface Window {
    Moyasar?: { init: (config: Record<string, unknown>) => void };
  }
}

function loadOnce(tag: "script" | "link", url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const selector =
      tag === "script" ? `script[src="${url}"]` : `link[href="${url}"]`;
    const existing = document.querySelector(selector);
    if (existing) {
      resolve();
      return;
    }
    const el = document.createElement(tag);
    if (tag === "script") {
      (el as HTMLScriptElement).src = url;
      (el as HTMLScriptElement).async = true;
    } else {
      (el as HTMLLinkElement).rel = "stylesheet";
      (el as HTMLLinkElement).href = url;
    }
    el.addEventListener("load", () => resolve());
    el.addEventListener("error", () => reject(new Error(`Failed to load ${url}`)));
    document.head.appendChild(el);
  });
}

export type WalletCheckoutProps = {
  invoiceId: string;
  /** Smallest currency unit. Must equal the invoice's own amount. */
  amountHalalas: number;
  description: string;
  /** Our order reference, e.g. MNR-7K2QPD. */
  reference: string;
  /** Where Moyasar sends the customer once the payment completes. */
  callbackUrl: string;
  locale: "en" | "ar";
  /** Called when the wallet form cannot be used, so the caller can redirect. */
  onUnavailable: () => void;
};

export default function WalletCheckout({
  invoiceId,
  amountHalalas,
  description,
  reference,
  callbackUrl,
  locale,
  onUnavailable,
}: WalletCheckoutProps) {
  const mounted = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Strict mode runs effects twice in development. Moyasar.init is not
    // idempotent and a second call renders a second form into the same node.
    if (mounted.current) return;
    mounted.current = true;

    const pk = process.env.NEXT_PUBLIC_MOYASAR_PK;
    const samsungServiceId = process.env.NEXT_PUBLIC_SAMSUNG_SERVICE_ID;
    const samsungOn = process.env.NEXT_PUBLIC_SAMSUNG_PAY === "true";
    // Apple Pay has its own switch because its prerequisite is different:
    // the domain has to be validated and registered with Apple through the
    // Moyasar dashboard first. Offering it before that is at best a button
    // that does nothing. The two wallets can therefore be turned on
    // independently, in whichever order their approvals land.
    const appleOn = process.env.NEXT_PUBLIC_APPLE_PAY === "true";

    if (!pk) {
      // Without a publishable key there is no form to render.
      onUnavailable();
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled && !window.Moyasar) onUnavailable();
    }, LOAD_TIMEOUT_MS);

    const methods: string[] = ["creditcard"];
    if (appleOn) methods.push("applepay");
    if (samsungOn && samsungServiceId) methods.push("samsungpay");

    Promise.all([loadOnce("link", MOYASAR_CSS), loadOnce("script", MOYASAR_JS)])
      .then(() => {
        if (cancelled) return;
        if (!window.Moyasar) {
          onUnavailable();
          return;
        }

        const config: Record<string, unknown> = {
          element: ".mysr-form",
          // The invoice already exists. This pays it rather than creating a
          // second payment, which is what keeps the webhook contract intact.
          invoice_id: invoiceId,
          // Moyasar requires this to match the invoice exactly.
          amount: amountHalalas,
          currency: "SAR",
          description,
          publishable_api_key: pk,
          callback_url: callbackUrl,
          language: locale,
          supported_networks: ["visa", "mastercard", "mada"],
          methods,
        };

        if (samsungOn && samsungServiceId) {
          config.samsung_pay = {
            service_id: samsungServiceId,
            // Samsung rejects a repeated order number. The reference is
            // already random per checkout; the timestamp makes a collision
            // across two orders impossible rather than merely unlikely.
            order_number: `${reference}-${Date.now()}`,
            country: "SA",
            // Shown to the customer in the Samsung Pay sheet. Lowercase,
            // like everywhere else.
            label: "minara labs",
            // Must match the Samsung service, which was created as Production.
            environment: "PRODUCTION",
          };
        }

        window.Moyasar.init(config);
        window.clearTimeout(timer);
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) onUnavailable();
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [
    invoiceId,
    amountHalalas,
    description,
    reference,
    callbackUrl,
    locale,
    onUnavailable,
  ]);

  return (
    <div className="mt-10">
      {!ready && (
        <p className="text-sm font-light text-text-muted">
          {locale === "ar" ? "جارٍ تجهيز الدفع" : "Preparing payment"}
        </p>
      )}
      <div className="mysr-form" />
    </div>
  );
}
