"use client";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

export default function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.about;

  return (
    <div dir={s.dir} lang={locale} className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}>
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.eyebrow}</p>
          <h1 className="mt-10 max-w-3xl text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            <Lines text={c.title} />
          </h1>
          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-text-secondary sm:text-lg">{c.intro}</p>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl">{c.statement}</h2>
          <div className="mt-12 space-y-6 text-base font-light leading-relaxed text-text-secondary">
            {c.statementBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.howEyebrow}</p>
          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {c.values.map((v) => (
              <div key={v.index} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{v.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{v.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.nextEyebrow}</p>
          <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.nextTitle} />
          </h2>
          <p className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed text-text-secondary">{c.nextBody}</p>
          <div className="mt-14">
            <a href="mailto:minaralabs@gmail.com" dir="ltr" className="border-b border-text pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50">
              minaralabs@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
