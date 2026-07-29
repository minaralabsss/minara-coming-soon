"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useCart } from "./CartContext";
import { localeFromPath, localeHref, swapLocale } from "@/lib/locale";
import { t } from "@/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const c = t(locale);
  const { count, open } = useCart();

  const other = locale === "en" ? "ar" : "en";
  const altPath = swapLocale(pathname, other);
  // Compare against the path with any /ar prefix removed.
  const bare = pathname === "/ar" ? "/" : pathname.replace(/^\/ar(?=\/|$)/, "") || "/";

  return (
    <nav
      dir={c.dir}
      className={`sticky top-0 z-40 border-b border-divider bg-bg/90 backdrop-blur-sm ${
        locale === "ar" ? "font-arabic" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link
            href={localeHref("/", locale)}
            aria-label={c.nav.home}
            className="flex items-center"
          >
            <Logo size="md" />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {c.nav.links.map((link) => {
              const active = isActive(bare, link.href);
              return (
                <Link
                  key={link.href}
                  href={localeHref(link.href, locale)}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors duration-300 ${
                    active
                      ? "font-medium text-text"
                      : "font-light text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Language switch */}
            <Link
              href={altPath}
              lang={other}
              hrefLang={other}
              aria-label={c.nav.switchLabel}
              className="flex h-9 items-center gap-2 rounded-full border border-divider px-4 text-xs tracking-wide text-text-secondary transition-colors duration-300 hover:border-text hover:text-text"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.4" />
                <path d="M1.6 8h12.8" />
                <path d="M8 1.6a10 10 0 0 1 0 12.8a10 10 0 0 1 0-12.8" />
              </svg>
              <span className={other === "ar" ? "font-arabic" : ""}>
                {c.nav.switchTo}
              </span>
            </Link>

            <button
              onClick={open}
              aria-label={c.nav.cart}
              className="relative flex h-10 w-10 items-center justify-center text-text transition-opacity duration-300 hover:opacity-60"
            >
              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3.5 6h13l-1 10.5a1 1 0 0 1-1 .9H5.5a1 1 0 0 1-1-.9L3.5 6Z" />
                <path d="M7.25 6V4.6a2.75 2.75 0 0 1 5.5 0V6" />
              </svg>
              {count > 0 && (
                <span className="absolute end-0 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-text px-1 text-[10px] font-medium leading-none text-bg">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={c.nav.menu}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
                {isOpen ? (
                  <path d="M14 4L4 14M4 4l10 10" />
                ) : (
                  <>
                    <path d="M2 5h14" />
                    <path d="M2 13h14" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-divider py-6 lg:hidden">
            {c.nav.links.map((link) => {
              const active = isActive(bare, link.href);
              return (
                <Link
                  key={link.href}
                  href={localeHref(link.href, locale)}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 text-sm transition-colors duration-300 ${
                    active ? "font-medium text-text" : "font-light text-text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
