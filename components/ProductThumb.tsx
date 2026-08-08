"use client";

import { findProduct } from "@/lib/products";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

/**
 * Display name for a product, by slug.
 *
 * Falls back to the catalogue name if a translation is missing, so a newly
 * added product still renders something sensible rather than an empty gap.
 */
export function productName(locale: Locale, slug: string, fallback?: string) {
  const names = t(locale).productNames;
  return names[slug] ?? fallback ?? findProduct(slug)?.name ?? slug;
}

/**
 * Small product image. Reads the picture straight from the catalogue, so
 * any product added to lib/products works here with no further changes.
 */
export default function ProductThumb({
  slug,
  alt,
  size = "md",
  className = "",
}: {
  slug: string;
  alt: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const product = findProduct(slug);
  const box = size === "sm" ? "h-12 w-12" : "h-16 w-16";

  if (!product) {
    return <span className={`${box} flex-shrink-0 rounded-sm bg-divider ${className}`} />;
  }

  return (
    <span
      className={`${box} flex flex-shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white ${className}`}
    >
      <picture>
        {product.imageWebp && (
          <source srcSet={product.imageWebp} type="image/webp" />
        )}
        <img
          src={product.image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-1"
        />
      </picture>
    </span>
  );
}
