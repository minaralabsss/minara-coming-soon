export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

/** Arabic lives under /ar. Everything else is English at the root. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

/** Same page, other language. */
export function swapLocale(pathname: string, to: Locale): string {
  const stripped =
    pathname === "/ar" ? "/" : pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
  if (to === "en") return stripped;
  return stripped === "/" ? "/ar" : `/ar${stripped}`;
}

/** Prefix an English href for the given locale. */
export function localeHref(href: string, locale: Locale): string {
  if (locale === "en") return href;
  return href === "/" ? "/ar" : `/ar${href}`;
}

export function isRtl(locale: Locale) {
  return locale === "ar";
}
