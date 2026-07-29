"use client";

import { useCart } from "./CartContext";
import { formatPrice, type Product } from "@/lib/products";

export default function AddToCart({
  product,
  variant = "solid",
  showPrice = true,
  className = "",
}: {
  product: Product;
  variant?: "solid" | "outline";
  showPrice?: boolean;
  className?: string;
}) {
  const { add } = useCart();

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
          variantId: product.variantId,
        })
      }
      className={`${base} ${skin} ${className}`}
    >
      <span>Add to cart</span>
      {showPrice && (
        <span className="opacity-60">
          {formatPrice(product.price, product.currency)}
        </span>
      )}
    </button>
  );
}
