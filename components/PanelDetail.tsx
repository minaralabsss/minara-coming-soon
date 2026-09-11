"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { Lines, rise, stagger, viewport } from "./ui";
import { findProduct } from "@/lib/products";
import Price from "./Price";
import IncludedKit from "./IncludedKit";
import DepthDiagram from "./DepthDiagram";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

const galleryImages: (string | null)[] = [
  "/product-hero.png",
  "/panel-side.png",
  "/panel-in-use.png",
  "/panel-emitters.png",
];

export default function PanelDetail({
  locale = "en",
  soldOut = false,
}: {
  locale?: Locale;
  soldOut?: boolean;
}) {
  const s = t(locale);
  const c = s.panel;
  const product = findProduct("panel")!;
  const [active, setActive] = useState(0);
  const src = galleryImages[active];

  return (
    <div dir={s.dir} lang={locale} className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}>
      <Navigation />

      {/* Buy block */}
      <section className="px-6 pb-24 pt-14 sm:pb-32 sm:pt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {/*
              Fixed aspect ratio rather than a height that follows the
              active photo's own proportions. The four gallery images mix
              portrait studio renders (3:4) and landscape lifestyle shots
              (3:2), so a height that hugs the content made the frame
              visibly resize itself on every click — which read as
              inconsistent rather than intentional. One frame, one size,
              every photo scales to fit inside it.
            */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#ECECEC]">
              <AnimatePresence mode="wait">
                {src ? (
                  <motion.picture
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center p-10"
                  >
                    <source srcSet={src.replace(".png", ".webp")} type="image/webp" />
                    <img
                      src={src}
                      alt={`${c.name} — ${c.gallery[active]}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </motion.picture>
                ) : (
                  <motion.span
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center text-center text-xs uppercase tracking-[0.25em] text-text-muted"
                  >
                    {c.gallery[active]}
                  </motion.span>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setActive((i) => (i - 1 + c.gallery.length) % c.gallery.length)}
                aria-label={c.prevImage}
                className="absolute inset-y-0 start-2 flex items-center px-2 text-text-muted transition-colors duration-300 hover:text-text"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rtl:-scale-x-100">
                  <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % c.gallery.length)}
                aria-label={c.nextImage}
                className="absolute inset-y-0 end-2 flex items-center px-2 text-text-muted transition-colors duration-300 hover:text-text"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rtl:-scale-x-100">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
              {c.gallery.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActive(i)}
                  aria-label={label}
                  aria-current={i === active}
                  className={`flex aspect-square items-center justify-center overflow-hidden rounded-sm border p-1 transition-colors duration-300 ${
                    i === active ? "border-text" : "border-divider hover:border-text-muted"
                  }`}
                >
                  {galleryImages[i] ? (
                    <picture className="flex h-full w-full items-center justify-center">
                      <source srcSet={galleryImages[i]!.replace(".png", ".webp")} type="image/webp" />
                      <img
                        src={galleryImages[i]!}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                      />
                    </picture>
                  ) : (
                    <span className="text-[9px] tracking-wider text-text-muted">{i + 1}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.tagline}</p>
            <h1 className="mt-6 text-4xl font-light tracking-[-0.03em] sm:text-5xl">{c.name}</h1>
            <div className="mt-8"><Price product={product} size="lg" note /></div>
            <p className="mt-8 text-base font-light leading-relaxed text-text-secondary">{c.summary}</p>

            <ul className="mt-10 divide-y divide-divider border-y border-divider">
              {c.quickSpecs.map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-text-muted">{k}</span>
                  <span className="text-end text-sm font-light">{v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <AddToCart product={product} showPrice={false} className="w-full" soldOut={soldOut} />
            </div>

            <p className="mt-6 text-xs font-light leading-relaxed text-text-muted">{c.shipping}</p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-divider pt-8">
              <Link href={localeHref("/policies/returns", locale)} className="text-xs uppercase tracking-[0.15em] text-text-muted underline-offset-4 transition-colors duration-300 hover:text-text hover:underline">
                {c.returnsLink}
              </Link>
              <Link href={localeHref("/policies/warranty", locale)} className="text-xs uppercase tracking-[0.15em] text-text-muted underline-offset-4 transition-colors duration-300 hover:text-text hover:underline">
                {c.warrantyLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For the face */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-3xl">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.faceEyebrow}</motion.p>
          <motion.h2 variants={rise} className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.faceTitle} />
          </motion.h2>
          <motion.div variants={rise} className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
            {c.faceBody.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
        </motion.div>
      </section>

      {/* Wavelengths */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-6xl">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.wlEyebrow}</motion.p>
          <motion.h2 variants={rise} className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={c.wlTitle} />
          </motion.h2>

          <div className="mt-20 border-t border-divider">
            {c.wavelengths.map((w) => (
              <motion.div key={w.nm} variants={rise} className="grid grid-cols-1 gap-4 border-b border-divider py-10 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-3">
                  <p className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">
                    {w.nm}<span className="ms-1 text-base text-text-muted">nm</span>
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">{w.band}</p>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm font-light leading-relaxed text-text-secondary">{w.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Penetration depth */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-6xl">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {s.science.wlEyebrow}
          </motion.p>
          <motion.h2 variants={rise} className="mt-10 max-w-2xl text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            <Lines text={s.science.depthTitle} />
          </motion.h2>
          <motion.div variants={rise} className="mt-16">
            <DepthDiagram locale={locale} />
          </motion.div>
        </motion.div>
      </section>

      {/* Specifications */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-6xl">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.specsEyebrow}</motion.p>

          <div className="mt-16 space-y-14">
            {c.specs.map(([group, rows]) => (
              <motion.div key={group} variants={rise} className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted lg:col-span-3">{group}</h3>
                <dl className="divide-y divide-divider border-y border-divider lg:col-span-9">
                  {rows.map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                      <dt className="text-sm font-light text-text-secondary">{label}</dt>
                      <dd className="text-start text-base font-light sm:text-end">{value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      <IncludedKit locale={locale} />

      {/* Close */}
      <section className="bg-text px-6 py-32 text-bg sm:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            <Lines text={c.closeTitle} />
          </h2>
          <p className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed opacity-70">{c.closeBody}</p>
          <div className="mt-14 flex justify-center">
            <AddToCart product={product} variant="outline" className="!border-bg !text-bg" soldOut={soldOut} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
