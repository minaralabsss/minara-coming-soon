import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import type { Locale, Policy } from "@/content/policies";

const ui = {
  en: {
    other: "العربية",
    otherLabel: "Read in Arabic",
    returns: "Returns",
    warranty: "Warranty",
  },
  ar: {
    other: "English",
    otherLabel: "اقرأ بالإنجليزية",
    returns: "الإرجاع",
    warranty: "الضمان",
  },
} as const;

export default function PolicyPage({
  policy,
  locale,
  altHref,
  siblings,
}: {
  policy: Policy;
  locale: Locale;
  /** Kept for the route files; the nav now owns language switching. */
  altHref?: string;
  /** The other policy page, same language. */
  siblings: { href: string; label: string }[];
}) {
  const rtl = locale === "ar";
  const t = ui[locale];

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-bg text-text ${rtl ? "font-arabic" : ""}`}
    >
      <Navigation />

      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-baseline justify-between gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              {policy.eyebrow}
            </p>

          </div>

          <h1 className="mt-10 whitespace-pre-line text-4xl font-light leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {policy.title}
          </h1>

          <p className="mt-10 text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            {policy.intro}
          </p>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-divider border-y border-divider">
            {policy.sections.map((s) => (
              <div key={s.heading} className="py-12">
                <h2 className="text-xl font-light tracking-[-0.01em] sm:text-2xl">
                  {s.heading}
                </h2>

                {s.body?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-6 text-base font-light leading-relaxed text-text-secondary"
                  >
                    {p}
                  </p>
                ))}

                {s.list && (
                  <ul className="mt-8 space-y-3">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-base font-light leading-relaxed text-text-secondary"
                      >
                        <span aria-hidden="true" className="mt-2 h-px w-4 flex-shrink-0 bg-text-muted" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.note && (
                  <p className="mt-8 text-sm font-light leading-relaxed text-text-muted">
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs font-light text-text-muted">
            {policy.updated}
          </p>
        </div>
      </section>

      {policy.closing && (
        <section className="bg-text px-6 py-28 text-bg sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">
              {policy.closing.heading}
            </h2>
            <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed opacity-70">
              {policy.closing.body}
            </p>
            <a
              href={`mailto:${policy.closing.contact}`}
              className="mt-10 inline-block border-b border-bg pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              {policy.closing.contact}
            </a>
          </div>
        </section>
      )}

      <section className="border-t border-divider px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-8">
          {siblings.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
