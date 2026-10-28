"use client";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";
import { SUPPORT_EMAIL } from "@/lib/business";

/**
 * About.
 *
 * Two structural problems were fixed here rather than just the copy.
 *
 * The hero put a max-w-3xl headline and a max-w-xl paragraph inside a
 * max-w-6xl container, stacked. On a laptop that left most of the right
 * half of the screen empty for the full height of the section, which read
 * as a loading error rather than as restraint. Headline and intro now sit
 * side by side at lg and the column is used.
 *
 * The mission body was a lone narrow column of prose floating in a
 * full-width white section directly below the black band, with no heading
 * and no edge to sit against. It is now a titled two-column section, which
 * is also where the Saudi argument lives.
 */
export default function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.about;

  return (
    <div dir={s.dir} lang={locale} className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 pb-24 pt-24 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.eyebrow}</p>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <h1 className="text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:col-span-7 lg:text-6xl">
              <Lines text={c.title} />
            </h1>
            <p className="text-base font-light leading-relaxed text-text-secondary sm:text-lg lg:col-span-5 lg:pb-3">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Mission, the centrepiece */}
      <section className="border-t border-divider bg-text px-6 py-32 text-bg sm:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] opacity-50">{c.missionEyebrow}</p>
          <p className="mt-12 text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl lg:text-4xl">
            {c.mission}
          </p>
        </div>
      </section>

      {/* The spa, at home. The argument the mission statement asserts. */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.homeEyebrow}</p>
            <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
              <Lines text={c.homeTitle} />
            </h2>
          </div>
          <div className="space-y-6 text-base font-light leading-relaxed text-text-secondary sm:text-lg lg:col-span-7">
            {c.missionBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.beliefsEyebrow}</p>
          <h2 className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.beliefsTitle} />
          </h2>
          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-3">
            {c.beliefs.map((b) => (
              <div key={b.index} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{b.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{b.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What follows */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.nextEyebrow}</p>
          <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.nextTitle} />
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-text-secondary">
            {c.nextBody}
          </p>
          <div className="mt-12">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              dir="ltr"
              className="border-b border-text pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
