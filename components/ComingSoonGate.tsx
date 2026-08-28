"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import EmailForm from "./EmailForm";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/content/site";

const DISMISS_KEY = "minara_waitlist_dismissed";

interface ComingSoonGateProps {
  onEmailSubmitted?: () => void;
}

export default function ComingSoonGate({
  onEmailSubmitted,
}: ComingSoonGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const c = t(locale).modal;
  const dir = t(locale).dir;

  // Appear once the page has settled. Never again in this session.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const timer = setTimeout(() => setIsOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
      // sessionStorage unavailable — dismissal is still honoured for this view
    }
  }, []);

  // Escape to dismiss, and hold the page still while open.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  const handleSuccess = () => {
    onEmailSubmitted?.();
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
      // no-op
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-text/25 px-4 py-10 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
            dir={dir}
            className={`relative w-full max-w-lg rounded-sm bg-bg px-8 py-16 sm:px-16 sm:py-20 ${locale === "ar" ? "font-arabic" : ""}`}
          >
            <button
              onClick={close}
              aria-label={c.close}
              className="absolute end-6 top-6 flex h-8 w-8 items-center justify-center text-text-muted transition-colors duration-500 hover:text-text"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <path d="M12 4L4 12M4 4l8 8" />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <Logo size="md" />

              <h2
                id="waitlist-heading"
                className="mt-12 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl"
              >
                {c.title.split('\n').map((l, i) => (
                  <span key={i} className="block">{l}</span>
                ))}
              </h2>

              {/* Small caps in Latin only. Arabic has no capital forms, so
                  applying it there does nothing visually but would break the
                  letterforms in some renderers. */}
              <p
                className="mt-8 max-w-xs text-sm font-light leading-relaxed text-text-secondary"
                style={locale === "ar" ? undefined : { fontVariantCaps: "small-caps" }}
              >
                {c.body}
              </p>

              <div className="mt-12 w-full">
                <EmailForm onSuccess={handleSuccess} />
              </div>

              <button
                onClick={close}
                className="mt-14 border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
              >
                {c.continue}
              </button>

              <div className="mt-14 h-px w-10 bg-divider" />

              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-text-muted">
                {c.origin}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
