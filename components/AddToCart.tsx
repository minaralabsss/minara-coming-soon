"use client";

import { useCart } from "./CartContext";
import { formatPrice, type Product } from "@/lib/products";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/content/site";

export default function AddToCart({
  product,
  variant = "solid",
  showPrice = true,
  className = "",
  soldOut = false,
}: {
  product: Product;
  variant?: "solid" | "outline";
  showPrice?: boolean;
  className?: string;
  /** Server-resolved. When true the button is inert and reads as sold out. */
  soldOut?: boolean;
}) {
  const { add } = useCart();
  const c = t(useLocale()).buy;

  if (soldOut) {
    return (
      <span
        aria-disabled="true"
        className={`inline-flex items-center justify-center px-10 py-4 text-sm tracking-wide border border-divider text-text-muted ${className}`}
      >
        {c.soldOut}
      </span>
    );
  }

  const base =
    "inline-flex items-center justify-center gap-4 px-10 py-4 text-sm tracking-wide transition-opacity duration-500 hover:opacity-70";
  const skin =
    variant === "solid"
      ? "bg-text text-bg"
      : "border border-text text-text";

  return (
    <button
      onClick={() =>
        add({
          slug: product.slug,
          name: product.name,
          price: product.price,
          currency: product.currency,
        })
      }
      className={`${base} ${skin} ${className}`}
    >
      <span>{c.addToCart}</span>
      {showPrice && (
        <span className="inline-flex items-baseline gap-2 opacity-60">
          {product.compareAt != null && product.compareAt > product.price && (
            <s dir="ltr" className="text-xs">
              {formatPrice(product.compareAt, product.currency)}
            </s>
          )}
          <span dir="ltr">{formatPrice(product.price, product.currency)}</span>
        </span>
      )}
    </button>
  );
}
