"use client";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines, Photo } from "./ui";
import DepthDiagram from "./DepthDiagram";
import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

export default function SciencePage({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.science;

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
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
              <Lines text={c.collagenTitle} />
            </h2>
            <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
              {c.collagenBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo src="/panel-emitters" alt={s.panel.emittersAlt} ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.mechEyebrow}</p>
            <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              <Lines text={c.mechTitle} />
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-3">
            {c.mechanism.map((m) => (
              <div key={m.index} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{m.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{m.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.evidenceEyebrow}</p>
            <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              <Lines text={c.evidenceTitle} />
            </h2>
            <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">{c.evidenceIntro}</p>
          </div>

          <div className="mt-20 space-y-px border-t border-divider">
            {c.evidence.map((e, i) => (
              <div key={e.headline} className="grid grid-cols-1 gap-6 border-b border-divider py-12 lg:grid-cols-12 lg:gap-12">
                <p className="text-xs tracking-[0.2em] text-text-muted lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-light leading-snug tracking-[-0.01em] lg:col-span-5 lg:pe-8">{e.headline}</h3>
                <div className="lg:col-span-6">
                  <p className="text-sm font-light leading-relaxed text-text-secondary">{e.detail}</p>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="mt-5 block text-xs font-light leading-relaxed text-text-muted underline-offset-4 transition-colors duration-300 hover:text-text hover:underline"
                  >
                    {e.cite} <span className="whitespace-nowrap">[{e.ref}]</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-3xl text-xs font-light leading-relaxed text-text-muted">{c.evidenceNote}</p>
        </div>
      </section>

      {/* Penetration depth */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {c.wlEyebrow}
          </p>
          <h2 className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.depthTitle} />
          </h2>
          <div className="mt-16">
            <DepthDiagram locale={locale} />
          </div>
        </div>
      </section>

      {/* Wavelengths */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.wlEyebrow}</p>
            <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
              <Lines text={c.wlTitle} />
            </h2>
          </div>
          <div className="mt-16 border-t border-divider">
            {c.wavelengths.map(([nm, note]) => (
              <div key={nm} className="grid grid-cols-1 gap-3 border-b border-divider py-8 sm:grid-cols-12 sm:gap-8">
                <p className="text-2xl font-light tracking-[-0.02em] sm:col-span-3 sm:text-3xl">{nm}</p>
                <p className="text-sm font-light leading-relaxed text-text-secondary sm:col-span-9">{note}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-2xl text-xs font-light leading-relaxed text-text-muted">{s.disclaimer}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
