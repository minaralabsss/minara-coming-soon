"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { validateEmail } from "@/lib/utils";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

/**
 * Mailing list signup for the About page.
 *
 * Deliberately not the existing EmailForm. That one belongs to the
 * coming-soon gate: a full-width block with a rounded filled button and a
 * boxed input, sized to dominate a modal. Dropped into the quiet close of
 * the About page it would read as an advert pasted onto an essay.
 *
 * This starts as a single button so the page stays calm, and only becomes a
 * field once someone has said they want it. Same endpoint, same Loops
 * audience, same strings from content.form, so nothing diverges.
 */
export default function WaitlistSignup({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.form;
  const a = s.about;

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function reveal() {
    setOpen(true);
    // Focus after the field has actually mounted, otherwise the ref is null.
    window.setTimeout(() => inputRef.current?.focus(), 60);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError("");

    if (!validateEmail(email.trim())) {
      setError(a.waitlistInvalid);
      inputRef.current?.focus();
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        setError(data?.message || a.waitlistError);
        setBusy(false);
        return;
      }
      setDone(true);
    } catch {
      setError(a.waitlistError);
      setBusy(false);
    }
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-2"
      >
        <p className="text-base font-light text-text">{c.success}</p>
        <p className="text-sm font-light text-text-secondary">{c.successBody}</p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!open ? (
        <motion.button
          key="cta"
          type="button"
          onClick={reveal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center justify-center bg-text px-10 py-4 text-sm tracking-wide text-bg transition-opacity duration-500 hover:opacity-70"
        >
          {a.waitlistCta}
        </motion.button>
      ) : (
        <motion.form
          key="form"
          onSubmit={submit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-full max-w-sm"
          noValidate
        >
          <div className="flex items-stretch gap-3">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder={c.placeholder}
              disabled={busy}
              dir="ltr"
              aria-label={a.waitlistCta}
              aria-invalid={Boolean(error)}
              className={`min-w-0 flex-1 border-b bg-transparent pb-2 text-start text-base font-light text-text placeholder-text-muted transition-colors duration-300 focus:outline-none disabled:opacity-50 ${
                error ? "border-[#c0392b]" : "border-divider focus:border-text"
              }`}
            />
            <button
              type="submit"
              disabled={busy}
              className="flex-shrink-0 border-b border-text pb-2 text-sm tracking-wide text-text transition-opacity duration-300 hover:opacity-60 disabled:opacity-40"
            >
              {busy ? `${c.sending}…` : c.submit}
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm font-light text-[#c0392b]">
              {error}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
