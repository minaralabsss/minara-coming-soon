/**
 * Legal identifiers shown in the site footer.
 *
 * Saudi e-commerce regulations require a store to disclose its registration
 * details. Fill in whichever values apply and leave the rest as empty
 * strings — the footer only renders the ones that have a value, so nothing
 * shows a blank label.
 *
 * Where to find each one:
 *   crNumber  — رقم السجل التجاري, usually 10 digits starting 1/2/4/5/7
 *   maroofUrl — your store's public page on maroof.gov.sa, available once the
 *               Ministry of Commerce approves the registration. Save the
 *               official badge artwork from the Maroof dashboard to
 *               public/maroof.png; the footer links the badge to this URL.
 */
export const BUSINESS = {
  /** Commercial registration number (رقم السجل التجاري). */
  crNumber: "",

  /** Public Maroof store page (معروف). Leave empty until approved. */
  maroofUrl: "",
} as const;
