"use client";

import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import { useCart } from "./CartContext";
import { findProduct, formatPrice } from "@/lib/products";
import { productName } from "./ProductThumb";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

/**
 * Order summary, read from the query string Moyasar redirected back to.
 * Nothing sensitive lives here — just the reference and which items were
 * bought, so the page can link back to them.
 */
function OrderDetails({ locale }: { locale: Locale }) {
  const s = t(locale);
  const c = s.order;
  const params = useSearchParams();
  const reference = params.get("ref");

  const items = (params.get("items") ?? "")
    .split(",")
    .map((pair) => {
      const [slug, qty] = pair.split(":");
      const product = findProduct(slug ?? "");
      if (!product) return null;
      const quantity = Math.max(1, Math.floor(Number(qty)) || 1);
      return { product, quantity };
    })
    .filter(Boolean) as { product: ReturnType<typeof findProduct>; quantity: number }[];

  return (
    <>
      {reference && (
        <div className="mt-12 inline-block border border-divider px-8 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {c.refLabel}
          </p>
          <p dir="ltr" className="mt-2 text-lg font-light tracking-wide">
            {reference}
          </p>
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {c.itemsLabel}
          </p>
          <ul className="mt-6 divide-y divide-divider border-y border-divider">
            {items.map(({ product, quantity }) => {
              if (!product) return null;
              return (
                <li key={product.slug}>
                  <Link
                    href={localeHref(`/product/${product.slug}`, locale)}
                    className="group flex items-center gap-5 py-5 transition-opacity duration-300 hover:opacity-70"
                  >
                    <span className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
                      <picture className="flex h-full w-full items-center justify-center p-1">
                        <source srcSet={product.imageWebp} type="image/webp" />
                        <img
                          src={product.image}
                          alt=""
                          className="max-h-full max-w-full object-contain"
                        />
                      </picture>
                    </span>

                    <span className="flex-1">
                      <span className="block text-base font-light underline-offset-4 group-hover:underline">
                        {productName(locale, product.slug, product.name)}
                      </span>
                      <span className="mt-1 block text-xs text-text-muted">
                        {s.checkout.qty} {quantity}
                      </span>
                    </span>

                    <span dir="ltr" className="text-sm font-light text-text-secondary">
                      {formatPrice(product.price * quantity, product.currency)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {c.galleryLabel}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            {[
              // The hero is a tall cutout, so it is contained rather than
              // cropped; the two lifestyle shots fill their tiles.
              { src: "/product-hero", alt: s.panel.name, fit: "object-contain p-2" },
              { src: "/panel-in-use", alt: s.panel.inUseAlt, fit: "object-cover" },
              { src: "/panel-emitters", alt: s.panel.emittersAlt, fit: "object-cover" },
            ].map((shot) => (
              <div
                key={shot.src}
                className="aspect-square overflow-hidden rounded-sm bg-white"
              >
                <picture>
                  <source srcSet={`${shot.src}.webp`} type="image/webp" />
                  <img
                    src={`${shot.src}.png`}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full ${shot.fit}`}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function OrderComplete({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.order;
  const { clear } = useCart();
  const cleared = useRef(false);

  // Payment succeeded, so the cart has served its purpose. Guarded by a ref
  // so a re-render cannot wipe a cart the customer has started refilling.
  useEffect(() => {
    if (cleared.current) return;
    cleared.current = true;
    clear();
  }, [clear]);

  return (
    <div
      dir={s.dir}
      lang={locale}
      className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}
    >
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {c.eyebrow}
          </p>
          <h1 className="mt-8 text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl">
            <Lines text={c.title} />
          </h1>
          <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            {c.body}
          </p>

          <Suspense fallback={null}>
            <OrderDetails locale={locale} />
          </Suspense>

          <ul className="mt-14 space-y-4 border-t border-divider pt-10">
            {c.next.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-base font-light leading-relaxed text-text-secondary"
              >
                <span aria-hidden="true" className="mt-3 h-px w-4 flex-shrink-0 bg-text-muted" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm font-light leading-relaxed text-text-secondary">
            {c.contact}{" "}
            <a
              href="mailto:minaralabs@gmail.com"
              dir="ltr"
              className="border-b border-divider pb-0.5 transition-colors duration-300 hover:border-text hover:text-text"
            >
              minaralabs@gmail.com
            </a>
          </p>

          <div className="mt-14">
            <Link
              href={localeHref("/", locale)}
              className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
            >
              {c.home}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
