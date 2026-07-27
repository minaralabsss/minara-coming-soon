"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { products, forthcoming, formatPrice } from "@/lib/products";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const viewport = { once: true, margin: "-15%" };

export default function ProductPageContent() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      {/* Collection header */}
      <section className="px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            The collection
          </motion.p>
          <motion.h1
            variants={rise}
            className="mt-10 max-w-2xl text-4xl font-light leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            Instruments for
            <br />
            considered skin
          </motion.h1>
          <motion.p
            variants={rise}
            className="mt-10 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg"
          >
            We build a small number of things, slowly. Each one is specified
            before it is designed, and released only once it does what the
            research says it should.
          </motion.p>
        </motion.div>
      </section>

      {/* Available now */}
      <section className="border-t border-divider px-6 py-24 sm:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <motion.h2 variants={rise} className="text-xs uppercase tracking-[0.2em] text-text-muted">
            Available
          </motion.h2>

          <div className="mt-16 space-y-24">
            {products.map((p) => (
              <motion.article
                key={p.slug}
                variants={rise}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20"
              >
                <Link href={`/product/${p.slug}`} className="group block lg:col-span-6">
                  <picture>
                    <source srcSet={p.imageWebp} type="image/webp" />
                    <img
                      src={p.image}
                      alt={`minara ${p.name}`}
                      className="mx-auto h-auto max-h-[52vh] w-auto object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                    />
                  </picture>
                </Link>

                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {p.tagline}
                  </p>
                  <h3 className="mt-6 text-3xl font-light tracking-[-0.02em] sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-6 text-base font-light leading-relaxed text-text-secondary">
                    {p.summary}
                  </p>
                  <p className="mt-8 text-lg font-light">
                    {formatPrice(p.price, p.currency)}
                  </p>

                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <AddToCart product={p} showPrice={false} />
                    <Link
                      href={`/product/${p.slug}`}
                      className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
                    >
                      Full details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Forthcoming */}
      <section className="border-t border-divider px-6 py-24 sm:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <motion.h2 variants={rise} className="text-xs uppercase tracking-[0.2em] text-text-muted">
            In development
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-2">
            {forthcoming.map((f) => (
              <motion.div
                key={f.name}
                variants={rise}
                className="border-b border-divider py-12 sm:pr-12"
              >
                <h3 className="text-2xl font-light tracking-[-0.01em]">{f.name}</h3>
                <p className="mt-3 text-sm font-light text-text-secondary">{f.tagline}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-text-muted">
                  {f.note}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={rise}
            className="mt-16 max-w-lg text-sm font-light leading-relaxed text-text-secondary"
          >
            Announced when they are ready and not before. Join the list on any
            page and you will hear about each release first.
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
