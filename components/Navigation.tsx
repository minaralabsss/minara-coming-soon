"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useCart } from "./CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const { count, open } = useCart();

  return (
    <nav className="sticky top-0 z-40 border-b border-divider bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="minara labs — home" className="flex items-center">
            <Logo size="md" />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
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

          <div className="flex items-center gap-5">
            <button
              onClick={open}
              aria-label={`Open cart${count ? `, ${count} item${count > 1 ? "s" : ""}` : ""}`}
              className="relative flex h-10 w-10 items-center justify-center text-text transition-opacity duration-300 hover:opacity-60"
            >
              <svg width="19" height="19" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3.5 6h13l-1 10.5a1 1 0 0 1-1 .9H5.5a1 1 0 0 1-1-.9L3.5 6Z" />
                <path d="M7.25 6V4.6a2.75 2.75 0 0 1 5.5 0V6" />
              </svg>
              {count > 0 && (
                <span className="absolute right-0 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-text px-1 text-[10px] font-medium leading-none text-bg">
                  {count}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
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
