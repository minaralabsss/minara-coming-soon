"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { localeFromPath, localeHref } from "@/lib/locale";
import { t } from "@/content/site";

const socials = [
  { href: "https://instagram.com/minaralabs", label: "Instagram", handle: "@minaralabs" },
  { href: "https://tiktok.com/@minaralabs", label: "TikTok", handle: "@minaralabs" },
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
                    dir="ltr"
                    className="group inline-block text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                  >
                    {s.label}
                    <span className="ms-2 text-text-muted transition-colors duration-300 group-hover:text-text-secondary">
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

        <div className="mt-20 flex flex-col gap-4 border-t border-divider pt-10 sm:flex-row sm:items-center sm:justify-between">
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
