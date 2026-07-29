"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "./locale";

/** Client-side locale, derived from the URL. No provider needed. */
export function useLocale(): Locale {
  return localeFromPath(usePathname() ?? "/");
}
