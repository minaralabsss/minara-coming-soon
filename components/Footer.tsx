import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Red Light Panel", href: "/product" },
    { label: "Specifications", href: "/product#specs" },
    { label: "Technology", href: "/technology" },
  ],
  Explore: [
    { label: "Science", href: "/science" },
    { label: "Journal", href: "/journal" },
    { label: "About Us", href: "/about" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/support#faq" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-wider text-text font-medium">
              minara labs
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-light">
              Precision light technology engineered for optimal wellness and
              longevity.
            </p>
            <p className="text-xs text-text-muted">
              Designed in Saudi Arabia
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-medium">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.Product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-text-muted font-medium">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.Support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8 sm:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-text-muted text-center sm:text-left">
            © {currentYear} minara labs. All rights reserved. Engineered in Saudi Arabia.
          </p>

          {/* Social & Legal */}
          <div className="flex items-center gap-6">
            <Link
              href="mailto:hello@minaralabs.shop"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-text transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">Contact</span>
            </Link>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-text transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
