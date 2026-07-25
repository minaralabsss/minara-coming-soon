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
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
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

/** Reserved composition space for professional renders. */
function Frame({
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm bg-divider ${ratio} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-center text-xs uppercase tracking-[0.25em] text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

/** The finished render. WebP with a PNG fallback. */
function ProductRender({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <picture>
      <source srcSet="/product-hero.webp" type="image/webp" />
      <img
        src="/product-hero.png"
        alt="minara red light therapy panel, three-quarter view with emitters illuminated"
        width={1068}
        height={1600}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-auto w-full object-contain ${className}`}
      />
    </picture>
  );
}

const wavelengths = [
  {
    nm: "630",
    band: "Visible red",
    note: "Absorbed at the surface. The band most closely associated with skin tone, texture and collagen activity.",
  },
  {
    nm: "660",
    band: "Deep red",
    note: "Reaches beyond the epidermis while remaining in the range where cellular absorption peaks.",
  },
  {
    nm: "810",
    band: "Near-infrared",
    note: "The deepest practical penetration for soft tissue. Central to the recovery literature.",
  },
  {
    nm: "850",
    band: "Near-infrared",
    note: "Carries into joints and denser tissue where shorter wavelengths cannot reach.",
  },
  {
    nm: "940",
    band: "Far-infrared",
    note: "Extends the delivered spectrum and contributes gentle thermal effect at depth.",
  },
  {
    nm: "1060",
    band: "Far-infrared",
    note: "The upper boundary of the panel. Broadens coverage rather than concentrating it.",
  },
];

const specifications: [string, [string, string][]][] = [
  [
    "Optical",
    [
      ["Wavelengths", "630, 660, 810, 850, 940, 1060 nm"],
      ["Emitters", "70 LEDs"],
      ["Lens angle", "30°"],
      ["Irradiance", "220 mW/cm² ±10% at 0 in"],
    ],
  ],
  [
    "Power",
    [
      ["LED power", "350 W"],
      ["Actual consumption", "120 W ±10%"],
      ["Input", "AC 100–240 V, 50/60 Hz"],
      ["Rated life", "50,000+ hours"],
    ],
  ],
  [
    "Physical",
    [
      ["Dimensions", "318 × 220 × 70 mm"],
      ["Weight", "4.5 kg with packaging"],
      ["Housing", "Cold-rolled SPCC steel"],
      ["Ingress rating", "IP20"],
    ],
  ],
  [
    "Environment",
    [
      ["EMF emission", "0 µT"],
      ["Operating temperature", "−20 °C to 50 °C"],
      ["Relative humidity", "30% to 70%"],
      ["Intended use", "Indoor, dry environments"],
    ],
  ],
];

export default function ProductPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroShift = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      {/* ——— Hero product ——— */}
      <section
        ref={heroRef}
        className="flex min-h-[92vh] items-center px-6 pb-28 pt-28 sm:pb-36 sm:pt-32"
      >
        <motion.div
          style={{ y: heroShift, opacity: heroFade }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12"
        >
          {/* The object leads */}
          <motion.div
            variants={rise}
            className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6"
          >
            <ProductRender
              priority
              className="mx-auto max-h-[62vh] w-auto lg:max-h-[74vh]"
            />
          </motion.div>

          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-5 lg:items-start lg:text-left">
            <Eyebrow>The Panel</Eyebrow>

            <motion.h1
              variants={rise}
              className="mt-8 text-5xl font-light leading-[1.06] tracking-[-0.03em] sm:text-6xl"
            >
              One instrument.
              <br />
              Six wavelengths.
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-8 max-w-sm text-base font-light leading-relaxed text-text-secondary sm:text-lg"
            >
              Seventy emitters behind a steel body, holding a measured output
              for the length of every session.
            </motion.p>

            <motion.div variants={rise} className="mt-12">
              <Link
                href="/support"
                className="border-b border-text pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
              >
                Request early access
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ——— Why it exists ——— */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl"
        >
          <Eyebrow>Why it exists</Eyebrow>
          <motion.p
            variants={rise}
            className="mt-12 text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl lg:text-4xl"
          >
            Most panels are assembled to a price. Components are chosen because
            they are available, and the specification is written afterwards to
            describe whatever was built.
          </motion.p>
          <motion.p
            variants={rise}
            className="mt-12 text-base font-light leading-relaxed text-text-secondary sm:text-lg"
          >
            minara was written first. The wavelengths were selected against
            clinical evidence, the irradiance was fixed as a requirement rather
            than a result, and the housing was drawn around the thermal load the
            emitters would actually produce. Everything that follows on this page
            is a consequence of that order of operations.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Industrial design ——— */}
      <section className="px-6 pb-32 sm:pb-40 lg:pb-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>Industrial design</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Drawn to be left
              <br />
              in the open
            </motion.h2>
          </div>

          <motion.div variants={rise} className="mt-20">
            <Frame label="Front elevation — full panel" ratio="aspect-[16/9]" />
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div variants={rise} className="lg:col-span-7">
              <Frame label="Side profile — 70 mm depth" ratio="aspect-[4/3]" />
            </motion.div>
            <motion.div
              variants={rise}
              className="flex flex-col justify-center space-y-6 text-base font-light leading-relaxed text-text-secondary lg:col-span-5"
            >
              <p>
                At 318 by 220 millimetres and 70 deep, the panel is sized to be
                handled by one person and mounted without hardware you would
                need to hide.
              </p>
              <p>
                There is no branding on the face, no indicator ring, no
                decorative venting. The only visible detail is the emitter array
                itself, because that is the part doing the work.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ——— Engineering ——— */}
      <section className="border-y border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>Engineering</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Four decisions
              <br />
              that shaped everything else
            </motion.h2>
          </div>

          <div className="mt-24 space-y-24 lg:space-y-32">
            {[
              {
                index: "01",
                title: "Why seventy emitters",
                body: "Fewer, brighter emitters produce a hot centre and a dim edge. Seventy lower-driven LEDs spread the same delivered energy across the whole treatment area, which keeps the dose even and lets each emitter run well below its thermal limit. Running cool is the single largest factor in how long an LED holds its rated output.",
                frame: "Emitter array — macro detail",
                ratio: "aspect-[4/3]",
              },
              {
                index: "02",
                title: "Why thirty-degree optics",
                body: "A bare LED throws light in a wide, uncontrolled cone. Most of it never reaches the body, and what does arrives at an angle that reduces absorption. A 30° lens holds the beam where it is aimed, so the figure measured at the panel surface is close to the figure delivered at the skin.",
                frame: "Lens assembly — cross section",
                ratio: "aspect-[4/3]",
              },
              {
                index: "03",
                title: "Why steel, not moulded plastic",
                body: "Plastic housings insulate. Heat accumulates behind the array, output drifts downward during a session, and the emitters age faster than their rating suggests. Cold-rolled SPCC steel conducts that heat into the body of the panel and away, which is why the output at minute twenty matches the output at minute one.",
                frame: "Rear housing — passive cooling structure",
                ratio: "aspect-[4/3]",
              },
              {
                index: "04",
                title: "Why zero EMF",
                body: "A panel used for twenty minutes a day sits close to the body for thousands of hours across its life. Driver placement and shielding were treated as a design constraint from the beginning rather than a figure to measure afterwards. The result is no detectable electromagnetic emission at the treatment distance.",
                frame: "Driver bay — shielding detail",
                ratio: "aspect-[4/3]",
              },
            ].map((item, i) => (
              <div
                key={item.index}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20"
              >
                <motion.div
                  variants={rise}
                  className={
                    i % 2 === 0
                      ? "lg:col-span-6"
                      : "lg:col-span-6 lg:order-2 lg:col-start-7"
                  }
                >
                  <Frame label={item.frame} ratio={item.ratio} />
                </motion.div>
                <motion.div
                  variants={rise}
                  className={
                    i % 2 === 0
                      ? "lg:col-span-5 lg:col-start-8"
                      : "lg:col-span-5 lg:order-1 lg:col-start-1"
                  }
                >
                  <p className="text-xs tracking-[0.2em] text-text-muted">
                    {item.index}
                  </p>
                  <h3 className="mt-6 text-2xl font-light tracking-[-0.01em] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-base font-light leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Clinical wavelength selection ——— */}
      <section className="px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>Wavelength selection</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Six, because
              <br />
              six could be justified
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-10 text-base font-light leading-relaxed text-text-secondary sm:text-lg"
            >
              Every wavelength on this panel had to earn its place in the
              literature before it earned a position in the array. Depth of
              penetration rises across the range, so the six together cover skin
              through to joint rather than concentrating on a single tissue
              depth.
            </motion.p>
          </div>

          <div className="mt-24 border-t border-divider">
            {wavelengths.map((w) => (
              <motion.div
                key={w.nm}
                variants={rise}
                className="grid grid-cols-1 gap-4 border-b border-divider py-10 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-3">
                  <p className="text-3xl font-light tracking-[-0.02em] sm:text-4xl">
                    {w.nm}
                    <span className="ml-1 text-base text-text-muted">nm</span>
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    {w.band}
                  </p>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm font-light leading-relaxed text-text-secondary">
                    {w.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Materials & construction ——— */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div variants={rise} className="order-2 lg:order-1">
              <Eyebrow>Materials</Eyebrow>
              <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
                Cold-rolled steel,
                <br />
                chosen for what it does
              </h2>
              <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">
                SPCC is a structural steel, not a finish. It was specified for
                conductivity and rigidity, and the surface treatment came
                afterwards. A panel weighing 4.5 kilograms is heavier than it
                needs to be to hold seventy LEDs. That mass is the cooling
                system.
              </p>
            </motion.div>
            <motion.div variants={rise} className="order-1 lg:order-2">
              <Frame label="Material detail — surface and edge" ratio="aspect-[3/4]" />
            </motion.div>
          </div>

          <motion.div variants={rise} className="mt-24">
            <Frame label="Rear assembly — thermal path" ratio="aspect-[21/9]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ——— Performance ——— */}
      <section className="border-y border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>Performance</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Measured, then
              <br />
              stated conservatively
            </motion.h2>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-px border-t border-divider sm:grid-cols-3">
            {[
              {
                value: "220",
                unit: "mW/cm²",
                note: "Irradiance at the panel surface, quoted with a ±10% tolerance rather than as a peak figure",
              },
              {
                value: "350",
                unit: "watts LED",
                note: "Drawing 120 W ±10% in practice, because the array is deliberately run below its ceiling",
              },
              {
                value: "50,000",
                unit: "hours rated",
                note: "More than five years of continuous operation, and a lifetime of ordinary daily sessions",
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
                <p className="mt-6 max-w-[28ch] text-sm font-light leading-relaxed text-text-secondary">
                  {stat.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Safety ——— */}
      <section className="px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div variants={rise} className="lg:col-span-5">
              <Eyebrow>Safety</Eyebrow>
              <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
                Nothing you
                <br />
                need to think about
              </h2>
            </motion.div>

            <motion.div variants={rise} className="lg:col-span-6 lg:col-start-7">
              <dl className="divide-y divide-divider border-y border-divider">
                {[
                  [
                    "Electromagnetic emission",
                    "0 µT. No detectable field at treatment distance.",
                  ],
                  [
                    "Ingress protection",
                    "IP20. Specified for indoor, dry environments.",
                  ],
                  [
                    "Voltage",
                    "AC 100–240 V, 50/60 Hz. No adapter or transformer required.",
                  ],
                  [
                    "Operating range",
                    "−20 °C to 50 °C, 30% to 70% relative humidity.",
                  ],
                ].map(([label, value]) => (
                  <div key={label} className="py-6">
                    <dt className="text-xs uppercase tracking-[0.2em] text-text-muted">
                      {label}
                    </dt>
                    <dd className="mt-3 text-base font-light leading-relaxed">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          <motion.p
            variants={rise}
            className="mt-20 max-w-2xl text-xs font-light leading-relaxed text-text-muted"
          >
            Red light therapy is a wellness practice, not a medical treatment.
            minara is not intended to diagnose, treat or cure any condition.
            Speak with a healthcare professional about your own circumstances.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Specifications ——— */}
      <section className="border-t border-divider px-6 py-32 sm:py-40 lg:py-48">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <Eyebrow>Specifications</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl"
            >
              The complete figures
            </motion.h2>
          </div>

          <div className="mt-20 space-y-16">
            {specifications.map(([group, rows]) => (
              <motion.div
                key={group}
                variants={rise}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted lg:col-span-3">
                  {group}
                </h3>
                <dl className="divide-y divide-divider border-y border-divider lg:col-span-9">
                  {rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <dt className="text-sm font-light text-text-secondary">
                        {label}
                      </dt>
                      <dd className="text-left text-base font-light sm:text-right">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>

          <motion.div variants={rise} className="mt-32 grid grid-cols-1 gap-12 sm:grid-cols-2">
            <Frame label="Packaging — presentation" ratio="aspect-[4/3]" />
            <Frame label="In-home — lifestyle" ratio="aspect-[4/3]" />
          </motion.div>
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
            Years in specification.
            <br />
            Months in production.
          </motion.h2>

          <motion.p
            variants={rise}
            className="mx-auto mt-12 max-w-md text-base font-light leading-relaxed opacity-70"
          >
            The first release is limited by intent. Those on the list are told
            first, and are given the time to decide.
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
