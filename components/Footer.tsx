"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { localeFromPath, localeHref } from "@/lib/locale";
import { t } from "@/content/site";
import { BUSINESS } from "@/lib/business";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.9 7.4a5.6 5.6 0 0 1-3.3-1.1a5.7 5.7 0 0 1-2.1-3.1h-3v12.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.7a6.6 6.6 0 0 0-.9-.06A6 6 0 1 0 14.6 15.6V9.8a8.6 8.6 0 0 0 5.3 1.8V8.5c0-.37-.04-.74 0-1.1Z" />
    </svg>
  );
}

const socials = [
  { href: "https://instagram.com/minaralabs", label: "Instagram", handle: "@minaralabs", Icon: InstagramIcon },
  { href: "https://tiktok.com/@minaralabs", label: "TikTok", handle: "@minaralabs", Icon: TikTokIcon },
];

export default function Footer() {
  const locale = localeFromPath(usePathname() ?? "/");
  const c = t(locale);
  const year = new Date().getFullYear();

  return (
    <footer
      dir={c.dir}
      className={`border-t border-divider bg-bg px-6 py-20 sm:py-24 ${
        locale === "ar" ? "font-arabic" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-text-secondary">
              {c.footer.blurb}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {c.footer.explore}
            </h3>
            <ul className="mt-6 space-y-3">
              {c.nav.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={localeHref(l.href, locale)}
                    className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {c.footer.policies}
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href={localeHref("/policies/returns", locale)}
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  {c.footer.returns}
                </Link>
              </li>
              <li>
                <Link
                  href={localeHref("/policies/warranty", locale)}
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  {c.footer.warranty}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
              {c.footer.connect}
            </h3>
            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    dir="ltr"
                    className="group inline-flex items-center gap-3 text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                  >
                    <s.Icon />
                    <span className="text-text-muted transition-colors duration-300 group-hover:text-text-secondary">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:minaralabs@gmail.com"
                  dir="ltr"
                  className="inline-block text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  minaralabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal identifiers. Only the numbers that are filled in appear,
            so nothing renders as a label with an empty value. */}
        {(BUSINESS.unifiedNumber || BUSINESS.crNumber) && (
          <ul className="mt-20 flex flex-wrap gap-x-8 gap-y-2 border-t border-divider pt-10">
            {BUSINESS.crNumber && (
              <li className="text-xs font-light text-text-muted">
                {c.footer.crLabel}{" "}
                <span dir="ltr" className="tracking-wide">{BUSINESS.crNumber}</span>
              </li>
            )}
            {BUSINESS.unifiedNumber && (
              <li className="text-xs font-light text-text-muted">
                {c.footer.unifiedLabel}{" "}
                <span dir="ltr" className="tracking-wide">{BUSINESS.unifiedNumber}</span>
              </li>
            )}
          </ul>
        )}

        <div className="mt-10 flex flex-col gap-4 border-t border-divider pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-text-muted">
            © {year} minara labs. {c.footer.rights}
          </p>
          <p className="text-xs font-light text-text-muted">
            {c.footer.disclaimerShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
