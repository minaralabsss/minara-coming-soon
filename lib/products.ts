export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** Minor units, so no floating point money. */
  price: number;
  currency: string;
  status: "available" | "waitlist" | "development";
  /** gid://shopify/ProductVariant/... Set via env once the product exists in Shopify. */
  variantId?: string;
  image: string;
  imageWebp?: string;
  summary: string;
};

// Retail, VAT-inclusive as required for consumer display in KSA.
export const PANEL_PRICE = 1000;

export const products: Product[] = [
  {
    slug: "panel",
    name: "The Panel",
    tagline: "Full-body and facial light therapy",
    price: PANEL_PRICE,
    currency: "SAR",
    status: "available",
    variantId: process.env.NEXT_PUBLIC_SHOPIFY_PANEL_VARIANT_ID,
    image: "/product-hero.png",
    imageWebp: "/product-hero.webp",
    summary:
      "Six clinically selected wavelengths across seventy emitters, in a cold-rolled steel body built to hold its output.",
  },
];

/** Announced but not yet purchasable. Keeps the collection page honest. */
export const forthcoming = [
  {
    name: "The Mask",
    tagline: "Contoured facial treatment",
    note: "In development",
  },
  {
    name: "The Wand",
    tagline: "Targeted precision treatment",
    note: "In development",
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number, currency: string) {
  return `${currency} ${amount.toLocaleString("en-US")}`;
}
