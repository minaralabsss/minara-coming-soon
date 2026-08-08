export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** Minor units, so no floating point money. */
  price: number;
  /** Original price when a launch discount applies. */
  compareAt?: number;
  currency: string;
  status: "available" | "waitlist" | "development";
  image: string;
  imageWebp?: string;
  summary: string;
};

// Retail, VAT-inclusive as required for consumer display in KSA.
export const PANEL_PRICE = 1999;
/** Store-opening launch price. Remove when the offer ends. */
export const PANEL_LAUNCH_PRICE = 1599;
export const PANEL_CURRENCY = "SAR";

/**
 * Delivery charge in whole SAR. Zero means free.
 * Change this one number and it flows through checkout, the order total
 * and the receipt email. Nothing else needs editing.
 */
export const DELIVERY_FEE = 0;

export const products: Product[] = [
  {
    slug: "panel",
    name: "The Panel",
    tagline: "Full-body and facial light therapy",
    price: PANEL_LAUNCH_PRICE,
    compareAt: PANEL_PRICE,
    currency: "SAR",
    status: "available",
    image: "/product-hero.png",
    imageWebp: "/product-hero.webp",
    summary:
      "Six clinically selected wavelengths across seventy emitters, in a cold-rolled steel body built to hold its output.",
  },
];

/** Announced but not yet purchasable. Keeps the collection page honest. */
export const forthcoming = [
  {
    name: "The Cap",
    tagline: "Scalp and hair therapy",
    note: "In development",
  },
  {
    name: "The Head Massager",
    tagline: "Scalp stimulation and relief",
    note: "In development",
  },
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number, currency: string) {
  return `${currency} ${amount.toLocaleString("en-US")}`;
}
