"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import { useCart } from "./CartContext";
import { DELIVERY_FEE, formatPrice } from "@/lib/products";
import { PROVINCES, OTHER_CITY, findProvince } from "@/lib/saudi";
import ProductThumb, { productName } from "./ProductThumb";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

/**
 * Border colour is swapped rather than appended. Appending a second border
 * class leaves Tailwind to resolve the conflict by stylesheet order, which
 * silently kept the grey border and made invalid fields look untouched.
 */
const FIELD_BASE =
  "mt-2 w-full rounded border bg-bg px-4 py-3 text-text placeholder-text-muted transition-colors duration-300 focus:outline-none";

function fieldClass(invalid: boolean, extra = "") {
  return `${FIELD_BASE} ${
    invalid ? "border-[#c0392b] focus:border-[#c0392b]" : "border-divider focus:border-text"
  } ${extra}`;
}

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
    province: "",
    city: "",
    shortAddress: "",
    address: "",
    notes: "",
  });
  const [bad, setBad] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const cities = useMemo(() => {
    const p = findProvince(form.province);
    if (!p) return [];
    return [...p.cities, OTHER_CITY];
  }, [form.province]);

  const set = (k: keyof typeof form) => (v: string) => {
    setForm((f) => {
      // Changing province invalidates the chosen city.
      if (k === "province") return { ...f, province: v, city: "" };
      return { ...f, [k]: v };
    });
    setBad((b) => b.filter((x) => x !== k && !(k === "province" && x === "city")));
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
          // Bring the first offending field into view rather than leaving
          // the message stranded next to the button.
          const first = document.getElementById(data.fields[0]);
          first?.scrollIntoView({ behavior: "smooth", block: "center" });
          first?.focus({ preventScroll: true });
        } else if (data.message === "sold_out") {
          setError(c.errorSoldOut);
        } else if (data.message === "insufficient_stock") {
          // The route returns how many are actually left, so say so rather
          // than leaving the customer to guess a quantity that will work.
          setError(
            c.errorStock.replace("{n}", String(data.remaining ?? ""))
          );
        } else {
          setError(data.message || c.errorGeneric);
        }
        setBusy(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError(c.errorGeneric);
      setBusy(false);
    }
  }

  const empty = lines.length === 0;
  const invalid = (k: string) => bad.includes(k);

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
              <p className="text-base font-light text-text-secondary">{s.cart.empty}</p>
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
                {/* What is being bought, before we ask where to send it. */}
                <div className="mb-12 border-y border-divider">
                  <p className="pt-6 text-xs uppercase tracking-[0.2em] text-text-muted">
                    {c.summary}
                  </p>
                  <ul className="divide-y divide-divider">
                    {lines.map((l) => (
                      <li key={l.slug} className="flex items-center gap-4 py-5">
                        <ProductThumb
                          slug={l.slug}
                          alt={productName(locale, l.slug, l.name)}
                          size="sm"
                        />
                        <span className="flex-1">
                          <span className="block text-sm font-light">
                            {productName(locale, l.slug, l.name)}
                          </span>
                          <span className="mt-0.5 block text-xs text-text-muted">
                            {c.qty} {l.quantity}
                          </span>
                        </span>
                        <span dir="ltr" className="text-sm font-light text-text-secondary">
                          {formatPrice(l.price * l.quantity, l.currency)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                      aria-invalid={invalid("name")}
                      className={fieldClass(invalid("name"))}
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
                        aria-invalid={invalid("email")}
                        className={fieldClass(invalid("email"))}
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
                        aria-invalid={invalid("phone")}
                        className={fieldClass(invalid("phone"))}
                      />
                    </div>
                  </div>

                  {/* Province → City */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="province" className="block text-sm font-medium">
                        {c.province}
                      </label>
                      <select
                        id="province"
                        value={form.province}
                        onChange={(e) => set("province")(e.target.value)}
                        aria-invalid={invalid("province")}
                        className={fieldClass(invalid("province"))}
                      >
                        <option value="" disabled>
                          {c.provincePh}
                        </option>
                        {PROVINCES.map((p) => (
                          <option key={p.code} value={p.code}>
                            {p.name[locale]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium">
                        {c.city}
                      </label>
                      <select
                        id="city"
                        value={form.city}
                        disabled={!form.province}
                        onChange={(e) => set("city")(e.target.value)}
                        aria-invalid={invalid("city")}
                        className={fieldClass(
                          invalid("city"),
                          !form.province ? "cursor-not-allowed opacity-50" : ""
                        )}
                      >
                        <option value="" disabled>
                          {form.province ? c.cityPh : c.cityLocked}
                        </option>
                        {cities.map((city) => (
                          <option key={city.en} value={city[locale]}>
                            {city[locale]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <p className="text-xs font-light text-text-muted">{c.saudiOnly}</p>

                  {/* National Address short code */}
                  <div>
                    <label htmlFor="shortAddress" className="block text-sm font-medium">
                      {c.shortAddress}
                    </label>
                    <input
                      id="shortAddress"
                      type="text"
                      dir="ltr"
                      maxLength={9}
                      value={form.shortAddress}
                      onChange={(e) =>
                        set("shortAddress")(e.target.value.toUpperCase())
                      }
                      placeholder={c.shortAddressPh}
                      aria-invalid={invalid("shortAddress")}
                      aria-describedby="shortAddressHelp"
                      className={fieldClass(invalid("shortAddress"), "tracking-[0.2em]")}
                    />
                    <p
                      id="shortAddressHelp"
                      className="mt-2 text-xs font-light leading-relaxed text-text-muted"
                    >
                      {c.shortAddressHelp}
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
                      aria-invalid={invalid("address")}
                      className={fieldClass(invalid("address"), "resize-none")}
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
                      className={fieldClass(false, "resize-none")}
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-5">
                <div className="border-t border-divider pt-8 lg:border-s lg:border-t-0 lg:ps-12 lg:pt-0">
                  <div className="border-t border-divider pt-8 lg:border-t-0 lg:pt-0">
                    <div className="flex items-baseline justify-between pb-4">
                      <span className="text-sm font-light text-text-secondary">
                        {c.delivery}
                      </span>
                      <span dir="ltr" className="text-sm font-light text-text-secondary">
                        {DELIVERY_FEE > 0 ? formatPrice(DELIVERY_FEE, currency) : c.free}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-t border-divider pt-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                        {c.total}
                      </span>
                      <span dir="ltr" className="text-xl font-light">
                        {formatPrice(subtotal + DELIVERY_FEE, currency)}
                      </span>
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="mt-8 text-sm font-light text-[#c0392b]">
                      {error}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={submit}
                    disabled={busy}
                    className="mt-8 w-full bg-text px-6 py-4 text-sm tracking-wide text-bg transition-opacity duration-300 hover:opacity-80 disabled:opacity-40"
                  >
                    {busy ? `${c.working}…` : c.pay}
                  </button>
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
