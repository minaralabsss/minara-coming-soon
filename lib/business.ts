/**
 * Legal identifiers shown in the site footer.
 *
 * Saudi e-commerce regulations require a store to disclose its registration
 * details. Fill in whichever numbers apply and leave the rest as empty
 * strings — the footer only renders the ones that have a value, so nothing
 * shows a blank label.
 *
 * Where to find each one:
 *   unifiedNumber — the 700-series الرقم الموحد on your registration document
 *   crNumber      — رقم السجل التجاري, usually 10 digits starting 1/2/4/5/7
 */
export const BUSINESS = {
  /** Unified national number (الرقم الموحد للمنشأة). */
  unifiedNumber: "7054911180",

  /** Commercial registration number (رقم السجل التجاري). */
  crNumber: "",
} as const;
