"use client";

import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";
import { Lines } from "./ui";

/**
 * What's in the box. Item images are language-agnostic, so labels come
 * from the content contract and translate with the rest of the site.
 */
export default function IncludedKit({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.panel;
  const [hero, ...rest] = c.included;

  return (
    <section className="border-t border-divider px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
          {c.includedEyebrow}
        </p>
        <h2 className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
          <Lines text={c.includedTitle} />
        </h2>

        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Panel */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-center rounded-sm bg-divider/30 p-10">
              <picture>
                <source srcSet={`/included/${hero.img}.webp`} type="image/webp" />
                <img
                  src={`/included/${hero.img}.png`}
                  alt={hero.label}
                  loading="lazy"
                  decoding="async"
                  className="h-auto max-h-[46vh] w-auto object-contain"
                />
              </picture>
            </div>
            <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-text-muted">
              {hero.label}
            </p>
          </div>

          {/* Accessories */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
              {rest.map((item) => (
                <div key={item.img} className="flex flex-col items-center">
                  <div className="flex h-28 w-full items-center justify-center">
                    <picture className="flex h-full w-full items-center justify-center">
                      <source
                        srcSet={`/included/${item.img}.webp`}
                        type="image/webp"
                      />
                      <img
                        src={`/included/${item.img}.png`}
                        alt={item.label}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </picture>
                  </div>
                  <p className="mt-4 text-center text-xs font-light leading-relaxed text-text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
