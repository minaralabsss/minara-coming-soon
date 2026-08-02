"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { Eyebrow, Lines, Photo, ProductRender, rise, stagger, viewport } from "./ui";
import { products } from "@/lib/products";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

export default function MainPage({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.home;
  const panel = products[0];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      dir={s.dir}
      lang={locale}
      className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}
    >
      <Navigation />

      {/* Curiosity */}
      <section ref={heroRef} className="px-6 pb-28 pt-16 sm:pb-36 sm:pt-24">
        <motion.div
          style={{ y: heroShift }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <Eyebrow>{c.eyebrow}</Eyebrow>

          <motion.h1
            variants={rise}
            className="mt-10 max-w-3xl text-5xl font-light leading-[1.08] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            <Lines text={c.title} />
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-10 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg"
          >
            {c.intro}
          </motion.p>

          <motion.div variants={rise} className="mt-14 w-full sm:mt-16">
            <ProductRender
              alt={s.panel.name}
              className="mx-auto max-h-[56vh] w-auto sm:max-h-[62vh]"
            />
          </motion.div>

          <motion.div variants={rise} className="mt-12 flex flex-col items-center gap-5">
            <AddToCart product={panel} />
            <Link
              href={localeHref("/product/panel", locale)}
              className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
            >
              {s.buy.viewDetails}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Desire */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow>{c.whyEyebrow}</Eyebrow>
          <motion.p
            variants={rise}
            className="mt-12 text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl lg:text-4xl"
          >
            {c.whyStatement}
          </motion.p>
        </motion.div>
      </section>

      {/* The face */}
      <section className="px-6 pb-32 sm:pb-40 lg:pb-48">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div variants={rise}>
              <Photo src="/panel-in-use" alt={s.panel.inUseAlt} ratio="aspect-[4/5]" />
            </motion.div>
            <motion.div variants={rise}>
              <Eyebrow>{c.faceEyebrow}</Eyebrow>
              <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
                <Lines text={c.faceTitle} />
              </h2>
              <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
                {c.faceBody.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust */}
      <section className="border-y border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>{c.scienceEyebrow}</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              <Lines text={c.scienceTitle} />
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-10 text-base font-light leading-relaxed text-text-secondary sm:text-lg"
            >
              {c.scienceBody}
            </motion.p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-3">
            {c.stats.map((st) => (
              <motion.div key={st.unit} variants={rise} className="border-b border-divider py-12 sm:border-b-0 sm:pe-10">
                <p className="text-5xl font-light tracking-[-0.03em] sm:text-6xl">{st.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-text-muted">{st.unit}</p>
                <p className="mt-6 max-w-[28ch] text-sm font-light leading-relaxed text-text-secondary">{st.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The object */}
      <section className="px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={rise} className="order-2 lg:order-1">
            <Eyebrow>{c.objectEyebrow}</Eyebrow>
            <h2 className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl">
              <Lines text={c.objectTitle} />
            </h2>
            <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">
              {c.objectBody}
            </p>
            <dl className="mt-14 divide-y divide-divider border-y border-divider">
              {c.objectSpecs.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-8 py-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-text-muted">{label}</dt>
                  <dd className="text-end text-base font-light">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div variants={rise} className="order-1 lg:order-2">
            <Photo src="/panel-side" alt={s.panel.sideAlt} ratio="aspect-[3/4]" />
          </motion.div>
        </motion.div>
      </section>

      {/* The effect */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>{c.effectEyebrow}</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.2] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              <Lines text={c.effectTitle} />
            </motion.h2>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {c.effects.map((item) => (
              <motion.div key={item.index} variants={rise} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{item.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={rise} className="mt-24 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
            {s.disclaimer}
          </motion.p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-text px-6 py-40 text-bg sm:py-48 lg:py-56">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] opacity-50">
            {c.ctaEyebrow}
          </motion.p>
          <motion.h2 variants={rise} className="mt-12 text-4xl font-light leading-[1.15] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            <Lines text={c.ctaTitle} />
          </motion.h2>
          <motion.p variants={rise} className="mx-auto mt-12 max-w-md text-base font-light leading-relaxed opacity-70">
            {c.ctaBody}
          </motion.p>
          <motion.div variants={rise} className="mt-16">
            <Link
              href={localeHref("/product/panel", locale)}
              className="border-b border-bg pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              {c.ctaLink}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
