import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

const socials = [
  { href: "https://instagram.com/minaralabs", label: "Instagram", handle: "@minaralabs" },
  { href: "https://tiktok.com/@minaralabs", label: "TikTok", handle: "@minaralabs" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-bg px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-text-secondary">
              Precision light technology, designed in Saudi Arabia for the way
              modern skin and modern lives are actually lived.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
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
              Policies
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/policies/returns"
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/warranty"
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/ar/policies/returns"
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  العربية
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">
              Connect
            </h3>
            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                  >
                    {s.label}
                    <span className="ml-2 text-text-muted transition-colors duration-300 group-hover:text-text-secondary">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:minaralabs@gmail.com"
                  className="text-sm font-light text-text-secondary transition-colors duration-300 hover:text-text"
                >
                  minaralabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-divider pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-text-muted">
            © {year} minara labs. All rights reserved. Designed in Saudi Arabia.
          </p>
          <p className="text-xs font-light text-text-muted">
            A wellness practice, not a medical treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
