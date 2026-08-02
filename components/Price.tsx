"use client";

import { formatPrice, type Product } from "@/lib/products";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/content/site";

/**
 * Price with launch discount. Renders the original struck through,
 * the current price, and the offer label whenever compareAt is set.
 * Numerals stay LTR inside RTL layouts.
 */
export default function Price({
  product,
  size = "md",
  showLabel = true,
  className = "",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}) {
  const c = t(useLocale()).buy;
  const hasOffer = product.compareAt != null && product.compareAt > product.price;

  const priceCls =
    size === "lg" ? "text-xl font-light" : size === "md" ? "text-lg font-light" : "text-sm font-light";
  const compareCls =
    size === "sm" ? "text-xs" : "text-sm";

  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 ${className}`}>
      {hasOffer && (
        <s dir="ltr" className={`${compareCls} font-light text-text-muted`}>
          {formatPrice(product.compareAt!, product.currency)}
        </s>
      )}
      <span dir="ltr" className={priceCls}>
        {formatPrice(product.price, product.currency)}
      </span>
      {hasOffer && showLabel && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {c.launchOffer}
        </span>
      )}
    </span>
  );
}
