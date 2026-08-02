"use client";

import Navigation from "./Navigation";
import Footer from "./Footer";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

export default function SupportPage({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.support;

  return (
    <div dir={s.dir} lang={locale} className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}>
      <Navigation />

      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.eyebrow}</p>
          <h1 className="mt-10 max-w-2xl text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {c.title}
          </h1>
          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-text-secondary sm:text-lg">{c.intro}</p>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">{c.faqTitle}</h2>
          <div className="mt-12 space-y-6">
            {c.faqs.map((f) => (
              <details key={f.q} className="group cursor-pointer rounded-lg border border-divider p-6 transition-colors duration-300 hover:border-text-muted sm:p-8">
                <summary className="flex items-start justify-between gap-4 font-medium text-text">
                  <span className="text-start text-base leading-relaxed sm:text-lg">{f.q}</span>
                  <span className="flex-shrink-0 text-xl text-text transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-base font-light leading-relaxed text-text-secondary">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">{c.contactTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">{c.email}</h3>
                <a
                  href="mailto:minaralabs@gmail.com"
                  dir="ltr"
                  className="mt-3 inline-block border-b border-text pb-1 text-xl font-light text-text transition-opacity duration-300 hover:opacity-60 sm:text-2xl"
                >
                  minaralabs@gmail.com
                </a>
                <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-text-secondary">
                  {c.responseNote}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">{c.response}</h3>
                <p className="mt-3 text-lg text-text">{c.responseValue}</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">{c.location}</h3>
                <p className="mt-3 text-lg text-text">{c.locationValue}</p>
                <p className="mt-1 text-sm text-text-secondary">{c.locationNote}</p>
              </div>
            </div>

            <div className="border-t border-divider pt-8 sm:border-s sm:border-t-0 sm:ps-12 sm:pt-0">
              <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted">{c.lookingFor}</h3>
              <ul className="mt-6 space-y-4 text-base font-light text-text-secondary">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-4 flex-shrink-0 bg-text-muted" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
