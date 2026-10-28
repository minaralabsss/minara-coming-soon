/**
 * Legal identifiers shown in the site footer.
 *
 * Saudi e-commerce regulations require a store to disclose its registration
 * details. Fill in whichever values apply and leave the rest as empty
 * strings — the footer only renders the ones that have a value, so nothing
 * shows a blank label.
 *
 * Where to find each one:
 *   unifiedNumber — الرقم الوطني الموحد للمنشأة, the 700-series number on
 *                   your registration document
 *   maroofUrl — your store's public page on maroof.gov.sa, available once the
 *               Ministry of Commerce approves the registration. Save the
 *               official badge artwork from the Maroof dashboard to
 *               public/maroof.png; the footer links the badge to this URL.
 */
/**
 * The address customers are told to write to. Kept here rather than typed
 * into each page, because it was previously hardcoded in five components
 * and four policy entries and they drift apart the moment one is missed.
 *
 * This is NOT where order alerts are delivered; that is MERCHANT_EMAIL in
 * lib/orders.ts and it stays separate on purpose.
 */
export const SUPPORT_EMAIL = "support@minaralabs.shop";

export const BUSINESS = {
  /** Unified national number (الرقم الوطني الموحد للمنشأة), 700-series.
   *  This is NOT the commercial register number; they are separate fields
   *  on the registration document. */
  unifiedNumber: "7054911180",

  /** Public Maroof store page (معروف). Leave empty until approved. */
  maroofUrl: "",
} as const;
