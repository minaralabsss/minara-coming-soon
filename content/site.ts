import type { Locale } from "@/lib/locale";
import type { SiteContent } from "./types";
import { en } from "./en";
import { ar } from "./ar";

export const site: Record<Locale, SiteContent> = { en, ar };

export function t(locale: Locale): SiteContent {
  return site[locale];
}

export type { SiteContent };
