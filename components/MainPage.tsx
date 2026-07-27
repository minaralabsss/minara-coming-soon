"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { products } from "@/lib/products";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const viewport = { once: true, margin: "-15%" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
      {children}
    </motion.p>
  );
}

function Frame({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-sm bg-divider ${ratio}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-center text-xs uppercase tracking-[0.25em] text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function MainPage() {
  const panel = products[0];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      {/* ——— Curiosity ——— */}
      <section ref={heroRef} className="px-6 pb-28 pt-16 sm:pb-36 sm:pt-24">
        <motion.div
          style={{ y: heroShift }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <Eyebrow>minara labs — first release</Eyebrow>

          <motion.h1
            variants={rise}
            className="mt-10 max-w-3xl text-5xl font-light leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            The face you have.
            <br />
            Simply better rested.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-10 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg"
          >
            Clinical red light, at the wavelengths shown to stimulate collagen
            and soften fine lines. Twenty minutes. At home. On your schedule.
          </motion.p>

          <motion.div variants={rise} className="mt-14 w-full sm:mt-16">
            <picture>
              <source srcSet="/product-hero.webp" type="image/webp" />
              <img
                src="/product-hero.png"
                alt="minara panel, three-quarter view with emitters illuminated"
                width={1337}
                height={2000}
                decoding="async"
                className="mx-auto h-auto max-h-[56vh] w-auto object-contain sm:max-h-[62vh]"
              />
            </picture>
          </motion.div>

          {/* Purchase, immediately under the object */}
          <motion.div
            variants={rise}
            className="mt-12 flex flex-col items-center gap-5"
          >
            <AddToCart product={panel} />
            <Link
              href="/product/panel"
              className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
            >
              View full details
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ——— Desire ——— */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow>Why it exists</Eyebrow>
          <motion.p
            variants={rise}
            className="mt-12 text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl lg:text-4xl"
          >
            Serums work on the surface. Collagen is made underneath it. minara
            was built to reach the layer where skin is actually rebuilt.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— The face ——— */}
      <section className="px-6 pb-32 sm:pb-40 lg:pb-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div variants={rise}>
              <Frame label="Facial treatment — in use" ratio="aspect-[4/5]" />
            </motion.div>

            <motion.div variants={rise}>
              <Eyebrow>The face</Eyebrow>
              <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
                Where the evidence
                <br />
                is strongest
              </h2>
              <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
                <p>
                  Facial skin is where red light therapy has been studied most
                  closely, and where the findings are most consistent. Fibroblasts
                  sit in the dermis, and at 630 and 660 nanometres light reaches
                  them directly.
                </p>
                <p>
                  What that supports is measurable rather than magical: increased
                  collagen density, improved elasticity, a softening of fine lines
                  around the eyes and mouth, and a more even tone. It is gradual.
                  It is also cumulative, which is why the panel was built to be
                  used every day rather than saved for occasions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ——— Trust ——— */}
      <section className="border-y border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>The science</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Light your cells
              <br />
              already know how to use
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-10 text-base font-light leading-relaxed text-text-secondary sm:text-lg"
            >
              Red and near-infrared light is absorbed by the structures inside
              your cells that produce energy. Four decades of peer-reviewed work
              describe what follows: fibroblasts with more energy available to
              them build more collagen, and skin repairs itself more readily.
            </motion.p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-3">
            {[
              { value: "6", unit: "wavelengths", note: "630 to 1060 nanometres, each selected against clinical evidence" },
              { value: "20", unit: "minutes", note: "A single daily session, at a distance you choose" },
              { value: "0", unit: "µT EMF", note: "No measurable electromagnetic emission during operation" },
            ].map((s) => (
              <motion.div key={s.unit} variants={rise} className="border-b border-divider py-12 sm:border-b-0 sm:pr-10">
                <p className="text-5xl font-light tracking-[-0.03em] sm:text-6xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-text-muted">{s.unit}</p>
                <p className="mt-6 max-w-[26ch] text-sm font-light leading-relaxed text-text-secondary">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Engineering ——— */}
      <section className="px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={rise} className="order-2 lg:order-1">
            <Eyebrow>The object</Eyebrow>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Made to be left out,
              <br />
              not put away
            </h2>
            <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">
              A device you are meant to use daily has to earn its place in the
              room. minara is drawn as an object first: a clean steel body, no
              branding across the face, and a display that tells you what you
              need and nothing more.
            </p>

            <dl className="mt-14 divide-y divide-divider border-y border-divider">
              {[
                ["Emitters", "70 high-efficiency LEDs"],
                ["Rated life", "50,000+ hours"],
                ["Body", "Cold-rolled SPCC steel"],
                ["Input", "AC 100–240V, 50/60Hz"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-8 py-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-text-muted">{label}</dt>
                  <dd className="text-right text-base font-light">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div variants={rise} className="order-1 lg:order-2">
            <Frame label="Emitter array — macro" ratio="aspect-[3/4]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ——— Benefits ——— */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>The effect</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              What consistent use
              <br />
              is understood to support
            </motion.h2>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { index: "01", title: "Collagen density", body: "Fibroblasts in the dermis respond to red light by producing more collagen and elastin, the two proteins that keep skin firm." },
              { index: "02", title: "Fine lines", body: "Improved dermal density softens the appearance of fine lines, most visibly around the eyes, mouth and forehead." },
              { index: "03", title: "Tone and texture", body: "Associated with a more even complexion, reduced redness and a refinement of surface texture over sustained use." },
              { index: "04", title: "Recovery", body: "Helps the body settle inflammation after exertion, shortening the interval between effort and readiness." },
              { index: "05", title: "Sleep quality", body: "Reinforces the body's daily light cues, supporting deeper and less interrupted rest." },
              { index: "06", title: "Clarity and mood", body: "Linked in research to improved mental clarity and a more even emotional baseline." },
            ].map((item) => (
              <motion.div key={item.index} variants={rise} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{item.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={rise} className="mt-24 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
            Red light therapy is a wellness practice, not a medical treatment.
            minara is not intended to diagnose, treat or cure any condition.
            Results vary between individuals. Speak with a healthcare
            professional about your own circumstances.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Call to action ——— */}
      <section className="bg-text px-6 py-40 text-bg sm:py-48 lg:py-56">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] opacity-50">
            First release — 2026
          </motion.p>
          <motion.h2 variants={rise} className="mt-12 text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            A small number
            <br />
            will be made first
          </motion.h2>
          <motion.p variants={rise} className="mx-auto mt-12 max-w-md text-base font-light leading-relaxed opacity-70">
            The first release is limited by intent, not scarcity. Those on the
            list are told first, and are given the time to decide.
          </motion.p>
          <motion.div variants={rise} className="mt-16">
            <Link href="/product/panel" className="border-b border-bg pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50">
              View the panel
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
