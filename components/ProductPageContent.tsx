"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { Lines, rise, stagger, viewport } from "./ui";
import { products } from "@/lib/products";
import Price from "./Price";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

export default function ProductPageContent({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.product;

  return (
    <div dir={s.dir} lang={locale} className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}>
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mx-auto max-w-6xl">
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {c.eyebrow}
          </motion.p>
          <motion.h1 variants={rise} className="mt-10 max-w-2xl text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            <Lines text={c.title} />
          </motion.h1>
          <motion.p variants={rise} className="mt-10 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            {c.intro}
          </motion.p>
        </motion.div>
      </section>

      <section className="border-t border-divider px-6 py-24 sm:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-6xl">
          <motion.h2 variants={rise} className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {c.available}
          </motion.h2>

          <div className="mt-16 space-y-24">
            {products.map((p) => (
              <motion.article key={p.slug} variants={rise} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
                <Link href={localeHref(`/product/${p.slug}`, locale)} className="group block lg:col-span-6">
                  <picture>
                    <source srcSet={p.imageWebp} type="image/webp" />
                    <img
                      src={p.image}
                      alt={s.panel.name}
                      className="mx-auto h-auto max-h-[52vh] w-auto object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    />
                  </picture>
                </Link>

                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">{c.panelTagline}</p>
                  <h3 className="mt-6 text-3xl font-light tracking-[-0.02em] sm:text-4xl">{s.panel.name}</h3>
                  <p className="mt-6 text-base font-light leading-relaxed text-text-secondary">{c.panelSummary}</p>
                  <div className="mt-8"><Price product={p} size="md" /></div>

                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <AddToCart product={p} showPrice={false} />
                    <Link
                      href={localeHref(`/product/${p.slug}`, locale)}
                      className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
                    >
                      {s.buy.fullDetails}
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-t border-divider px-6 py-24 sm:py-32">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-6xl">
          <motion.h2 variants={rise} className="text-xs uppercase tracking-[0.2em] text-text-muted">
            {c.development}
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-2">
            {c.forthcoming.map((f) => (
              <motion.div key={f.name} variants={rise} className="border-b border-divider py-12 sm:pe-12">
                <h3 className="text-2xl font-light tracking-[-0.01em]">{f.name}</h3>
                <p className="mt-3 text-sm font-light text-text-secondary">{f.tagline}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-text-muted">{f.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={rise} className="mt-16 max-w-lg text-sm font-light leading-relaxed text-text-secondary">
            {c.devNote}
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
