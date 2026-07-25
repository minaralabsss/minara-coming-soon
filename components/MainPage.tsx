"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-15%" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={rise}
      className="text-xs uppercase tracking-[0.25em] text-text-muted"
    >
      {children}
    </motion.p>
  );
}

export default function MainPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      {/* ——— Curiosity ——— */}
      <section
        ref={heroRef}
        className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pb-32 pt-24 sm:pb-40 sm:pt-32"
      >
        <motion.div
          style={{ y: heroShift, opacity: heroFade }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >
          <Eyebrow>minara labs — first release</Eyebrow>

          <motion.h1
            variants={rise}
            className="mt-10 max-w-3xl text-5xl font-light leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            Engineered Light
            <br />
            for Enhanced Living
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-10 max-w-md text-base font-light leading-relaxed text-text-secondary sm:text-lg"
          >
            Six therapeutic wavelengths. One instrument. Built to a standard
            that does not exist yet.
          </motion.p>

          {/* Product stage */}
          <motion.div
            variants={rise}
            className="mt-20 w-full max-w-2xl sm:mt-24"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-divider sm:max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                  minara panel
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={rise} className="mt-16 sm:mt-20">
            <Link
              href="/product"
              className="border-b border-text pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              Discover the instrument
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
          <Eyebrow>The Object</Eyebrow>
          <motion.p
            variants={rise}
            className="mt-12 text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl lg:text-4xl"
          >
            Most wellness devices are appliances. minara was drawn as an
            instrument — one you would leave in the open rather than in a
            drawer.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Trust: the object, in detail ——— */}
      <section className="px-6 pb-32 sm:pb-40 lg:pb-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <motion.div
            variants={rise}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-divider"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                Full panel — detail view
              </span>
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-16 sm:mt-24 lg:grid-cols-12 lg:gap-20">
            <motion.div variants={rise} className="lg:col-span-5">
              <h2 className="text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
                Built from a single
                <br />
                sheet of steel
              </h2>
            </motion.div>
            <motion.div
              variants={rise}
              className="space-y-6 text-base font-light leading-relaxed text-text-secondary lg:col-span-6 lg:col-start-7"
            >
              <p>
                A cold-rolled SPCC steel body carries heat away from seventy
                individually positioned emitters, so the panel holds its output
                for the length of a session rather than fading through it.
              </p>
              <p>
                Thirty-degree lenses hold the beam where it is aimed. The result
                is even coverage across the treatment area instead of a bright
                centre and a dim edge.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ——— Scientific credibility ——— */}
      <section className="border-y border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>The Science</Eyebrow>
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
              Red and near-infrared light passes into tissue and is absorbed by
              the structures inside your cells that produce energy. Four decades
              of peer-reviewed research describe what follows: more available
              energy, and cells better equipped to repair themselves.
            </motion.p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-3">
            {[
              {
                value: "6",
                unit: "wavelengths",
                note: "630 to 1060 nanometres, each selected against clinical evidence",
              },
              {
                value: "220",
                unit: "mW/cm²",
                note: "Professional irradiance measured at the panel surface",
              },
              {
                value: "0",
                unit: "µT EMF",
                note: "No measurable electromagnetic emission during operation",
              },
            ].map((stat) => (
              <motion.div
                key={stat.unit}
                variants={rise}
                className="border-b border-divider py-12 sm:border-b-0 sm:pr-10"
              >
                <p className="text-5xl font-light tracking-[-0.03em] sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-text-muted">
                  {stat.unit}
                </p>
                <p className="mt-6 max-w-[26ch] text-sm font-light leading-relaxed text-text-secondary">
                  {stat.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Engineering excellence ——— */}
      <section className="px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={rise} className="order-2 lg:order-1">
            <Eyebrow>The Engineering</Eyebrow>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Specified once.
              <br />
              Built to outlast the decade.
            </h2>

            <dl className="mt-14 divide-y divide-divider border-y border-divider">
              {[
                ["Emitters", "70 high-efficiency LEDs"],
                ["Rated life", "50,000+ hours"],
                ["Body", "Cold-rolled SPCC steel"],
                ["Input", "AC 100–240V, 50/60Hz"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-8 py-5"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {label}
                  </dt>
                  <dd className="text-right text-base font-light">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            variants={rise}
            className="relative order-1 aspect-[3/4] w-full overflow-hidden rounded-sm bg-divider lg:order-2"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
                Emitter array — macro
              </span>
            </div>
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
            <Eyebrow>The Effect</Eyebrow>
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
              {
                index: "01",
                title: "Cellular energy",
                body: "Supports the process your cells use to produce energy, which is felt as steadier vitality through the day.",
              },
              {
                index: "02",
                title: "Recovery",
                body: "Helps the body settle inflammation after exertion, shortening the interval between effort and readiness.",
              },
              {
                index: "03",
                title: "Skin quality",
                body: "Encourages collagen activity in the dermis, supporting firmness, tone and an even surface over time.",
              },
              {
                index: "04",
                title: "Physical capacity",
                body: "Associated with improved muscle function and endurance when used consistently alongside training.",
              },
              {
                index: "05",
                title: "Sleep architecture",
                body: "Reinforces the body's daily light cues, supporting deeper and less interrupted rest.",
              },
              {
                index: "06",
                title: "Clarity and mood",
                body: "Linked in research to improved mental clarity and a more even emotional baseline.",
              },
            ].map((item) => (
              <motion.div
                key={item.index}
                variants={rise}
                className="border-t border-divider pt-8"
              >
                <p className="text-xs tracking-[0.2em] text-text-muted">
                  {item.index}
                </p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={rise}
            className="mt-24 max-w-2xl text-xs font-light leading-relaxed text-text-muted"
          >
            Red light therapy is a wellness practice, not a medical treatment.
            minara is not intended to diagnose, treat or cure any condition.
            Speak with a healthcare professional about your own circumstances.
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
          <motion.p
            variants={rise}
            className="text-xs uppercase tracking-[0.25em] opacity-50"
          >
            First Release — 2026
          </motion.p>

          <motion.h2
            variants={rise}
            className="mt-12 text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            A small number
            <br />
            will be made first
          </motion.h2>

          <motion.p
            variants={rise}
            className="mx-auto mt-12 max-w-md text-base font-light leading-relaxed opacity-70"
          >
            The first release is limited by intent, not scarcity. Those on the
            list are told first, and are given the time to decide.
          </motion.p>

          <motion.div variants={rise} className="mt-16">
            <Link
              href="/support"
              className="border-b border-bg pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              Request early access
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
