"use client";

import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";
import { Lines } from "./ui";

/**
 * What's in the box: one flat-lay photograph, with the contents set as a
 * plain list beside it.
 *
 * This replaced a grid of individually cut-out item thumbnails. Six small
 * cut-outs on a tinted tile read as a parts diagram, and they could never
 * quite match each other's lighting. One photograph of the real contents
 * does the showing, and the list does the naming, which is the division
 * of labour the rest of the site already uses.
 */
export default function IncludedKit({ locale = "en" }: { locale?: Locale }) {
  const c = t(locale).panel;

  return (
    <section className="border-t border-divider px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
          {c.includedEyebrow}
        </p>
        <h2 className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
          <Lines text={c.includedTitle} />
        </h2>

        <div className="mt-20 grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm border border-divider">
              <picture>
                <source srcSet="/included/in-the-box.webp" type="image/webp" />
                <img
                  src="/included/in-the-box.png"
                  alt={c.includedTitle.replace("\n", " ")}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </picture>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Hairline-divided rows, the same treatment as the
                specifications table, so the two read as one system. */}
            <ul className="divide-y divide-divider border-y border-divider">
              {c.included.map((item) => (
                <li
                  key={item}
                  className="py-5 text-base font-light leading-relaxed text-text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
