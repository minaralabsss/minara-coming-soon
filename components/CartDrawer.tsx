"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/products";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/content/site";

export default function CartDrawer() {
  const { lines, subtotal, currency, isOpen, isSyncing, checkoutUrl, close, setQuantity, remove } =
    useCart();
  const locale = useLocale();
  const c = t(locale).cart;
  const dir = t(locale).dir;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={close}
          className="fixed inset-0 z-[60] bg-text/25"
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
        >
          <motion.aside
            initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            dir={dir}
            className={`absolute top-0 flex h-full w-full max-w-md flex-col bg-bg ${dir === "rtl" ? "left-0 font-arabic" : "right-0"}`}
          >
            <header className="flex items-center justify-between px-8 py-8">
              <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
                {c.title}
              </p>
              <button
                onClick={close}
                aria-label={c.close}
                className="flex h-8 w-8 items-center justify-center text-text-muted transition-colors duration-500 hover:text-text"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 4L4 12M4 4l8 8" />
                </svg>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-8">
              {lines.length === 0 ? (
                <p className="py-20 text-center text-sm font-light text-text-muted">
                  {c.empty}
                </p>
              ) : (
                <ul className="divide-y divide-divider border-y border-divider">
                  {lines.map((l) => (
                    <li key={l.slug} className="flex gap-5 py-6">
                      <div className="flex-1">
                        <p className="text-base font-light">{l.name}</p>
                        <p className="mt-1 text-sm font-light text-text-secondary">
                          {formatPrice(l.price, l.currency)}
                        </p>

                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center border border-divider">
                            <button
                              onClick={() => setQuantity(l.slug, l.quantity - 1)}
                              aria-label={`Decrease ${l.name} quantity`}
                              className="px-3 py-1 text-text-muted transition-colors hover:text-text"
                            >
                              −
                            </button>
                            <span className="min-w-8 text-center text-sm">
                              {l.quantity}
                            </span>
                            <button
                              onClick={() => setQuantity(l.slug, l.quantity + 1)}
                              aria-label={`Increase ${l.name} quantity`}
                              className="px-3 py-1 text-text-muted transition-colors hover:text-text"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(l.slug)}
                            className="text-xs uppercase tracking-[0.15em] text-text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
                          >
                            {c.remove}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <footer className="space-y-6 px-8 py-10">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  {c.subtotal}
                </span>
                <span className="text-lg font-light">
                  {formatPrice(subtotal, currency)}
                </span>
              </div>

              <a
                href={checkoutUrl ?? "mailto:minaralabs@gmail.com?subject=Order%20enquiry"}
                className={`block w-full py-4 text-center text-sm tracking-wide transition-opacity duration-500 ${
                  lines.length && !isSyncing
                    ? "bg-text text-bg hover:opacity-80"
                    : "pointer-events-none bg-divider text-text-muted"
                }`}
              >
                {isSyncing ? c.updating : checkoutUrl ? c.checkoutReady : c.checkout}
              </a>

              <p className="text-center text-xs font-light leading-relaxed text-text-muted">
{checkoutUrl ? c.taxNote : c.note}
              </p>
            </footer>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
