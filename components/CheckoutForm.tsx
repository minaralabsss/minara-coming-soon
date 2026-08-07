"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/products";
import { SAUDI_CITIES } from "@/lib/orders";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

const FIELD =
  "mt-2 w-full rounded border border-divider bg-bg px-4 py-3 text-text placeholder-text-muted transition-colors duration-300 focus:border-text focus:outline-none";
const FIELD_BAD = "border-[#c0392b]";

export default function CheckoutForm({
  locale = "en",
  testMode = false,
}: {
  locale?: Locale;
  testMode?: boolean;
}) {
  const s = t(locale);
  const c = s.checkout;
  const { lines, subtotal, currency } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [bad, setBad] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (k: keyof typeof form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setBad((b) => b.filter((x) => x !== k));
  };

  async function submit() {
    if (busy || !lines.length) return;
    setBusy(true);
    setError("");
    setBad([]);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          customer: form,
          // Only slug and quantity travel to the server. The price is
          // resolved there from our own catalogue.
          lines: lines.map((l) => ({ slug: l.slug, quantity: l.quantity })),
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        if (Array.isArray(data.fields) && data.fields.length) {
          setBad(data.fields);
          setError(c.errorFields);
        } else {
          setError(data.message || c.errorGeneric);
        }
        setBusy(false);
        return;
      }

      // Hand off to Moyasar's hosted page.
      window.location.href = data.url;
    } catch {
      setError(c.errorGeneric);
      setBusy(false);
    }
  }

  const empty = lines.length === 0;

  return (
    <div
      dir={s.dir}
      lang={locale}
      className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}
    >
      <Navigation />

      <section className="px-6 pb-24 pt-20 sm:pt-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {c.eyebrow}
          </p>
          <h1 className="mt-8 max-w-xl text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl">
            <Lines text={c.title} />
          </h1>
          <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-text-secondary">
            {c.intro}
          </p>

          {testMode && (
            <p className="mt-6 inline-block rounded-sm border border-divider px-4 py-2 text-xs tracking-wide text-text-muted">
              {c.testMode}
            </p>
          )}

          {empty ? (
            <div className="mt-16 border-t border-divider pt-12">
              <p className="text-base font-light text-text-secondary">
                {s.cart.empty}
              </p>
              <Link
                href={localeHref("/product/panel", locale)}
                className="mt-6 inline-block border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
              >
                {c.back}
              </Link>
            </div>
          ) : (
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
              {/* Details */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      {c.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder={c.namePh}
                      className={`${FIELD} ${bad.includes("name") ? FIELD_BAD : ""}`}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">
                        {c.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        dir="ltr"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        placeholder="your@email.com"
                        className={`${FIELD} ${bad.includes("email") ? FIELD_BAD : ""}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium">
                        {c.phone}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        dir="ltr"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        placeholder={c.phonePh}
                        className={`${FIELD} ${bad.includes("phone") ? FIELD_BAD : ""}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium">
                      {c.city}
                    </label>
                    <select
                      id="city"
                      value={form.city}
                      onChange={(e) => set("city")(e.target.value)}
                      className={`${FIELD} ${bad.includes("city") ? FIELD_BAD : ""}`}
                    >
                      <option value="" disabled>
                        {c.cityPh}
                      </option>
                      {SAUDI_CITIES.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <p className="mt-3 text-xs font-light text-text-muted">
                      {c.saudiOnly}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium">
                      {c.address}
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      autoComplete="street-address"
                      value={form.address}
                      onChange={(e) => set("address")(e.target.value)}
                      placeholder={c.addressPh}
                      className={`${FIELD} resize-none ${bad.includes("address") ? FIELD_BAD : ""}`}
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium">
                      {c.notes}
                      <span className="ms-2 text-xs font-light text-text-muted">
                        {c.optional}
                      </span>
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      value={form.notes}
                      onChange={(e) => set("notes")(e.target.value)}
                      placeholder={c.notesPh}
                      className={`${FIELD} resize-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-5">
                <div className="border-t border-divider pt-8 lg:border-s lg:border-t-0 lg:ps-12 lg:pt-0">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {c.summary}
                  </h2>

                  <ul className="mt-8 divide-y divide-divider border-y border-divider">
                    {lines.map((l) => (
                      <li key={l.slug} className="flex items-baseline justify-between gap-6 py-5">
                        <span className="text-sm font-light">
                          {s.panel.name}
                          <span className="ms-2 text-text-muted">
                            {c.qty} {l.quantity}
                          </span>
                        </span>
                        <span dir="ltr" className="text-sm font-light">
                          {formatPrice(l.price * l.quantity, l.currency)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                      {c.total}
                    </span>
                    <span dir="ltr" className="text-xl font-light">
                      {formatPrice(subtotal, currency)}
                    </span>
                  </div>

                  {error && (
                    <p className="mt-8 text-sm font-light text-[#c0392b]">{error}</p>
                  )}

                  <button
                    type="button"
                    onClick={submit}
                    disabled={busy}
                    className="mt-8 w-full bg-text px-6 py-4 text-sm tracking-wide text-bg transition-opacity duration-300 hover:opacity-80 disabled:opacity-40"
                  >
                    {busy ? `${c.working}…` : c.pay}
                  </button>

                  <p className="mt-6 text-xs font-light leading-relaxed text-text-muted">
                    {c.secure}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
