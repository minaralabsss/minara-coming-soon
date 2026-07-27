"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AddToCart from "./AddToCart";
import { findProduct, formatPrice } from "@/lib/products";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const viewport = { once: true, margin: "-15%" };

/**
 * Gallery slots. `src` null renders a reserved frame at the right ratio,
 * so dropping photography in later needs no layout change.
 */
const gallery: { src: string | null; webp?: string; label: string }[] = [
  { src: "/product-hero.png", webp: "/product-hero.webp", label: "Three-quarter view" },
  { src: null, label: "Front elevation" },
  { src: null, label: "Side profile" },
  { src: null, label: "Emitter array — macro" },
  { src: null, label: "Display detail" },
  { src: null, label: "Rear — thermal path" },
  { src: null, label: "In use — facial treatment" },
  { src: null, label: "Packaging" },
];

const engineering = [
  {
    index: "01",
    title: "Why seventy emitters",
    body: "Fewer, brighter emitters produce a hot centre and a dim edge. Seventy lower-driven LEDs spread the same delivered energy across the whole treatment area, which keeps the dose even across the face and lets each emitter run well below its thermal limit. Running cool is the single largest factor in how long an LED holds its rated output.",
  },
  {
    index: "02",
    title: "Why thirty-degree optics",
    body: "A bare LED throws light in a wide, uncontrolled cone. Most of it never reaches the skin, and what does arrives at an angle that reduces absorption. A 30° lens holds the beam where it is aimed, so the figure measured at the panel surface is close to the figure delivered to the dermis.",
  },
  {
    index: "03",
    title: "Why steel, not moulded plastic",
    body: "Plastic housings insulate. Heat accumulates behind the array, output drifts downward during a session, and the emitters age faster than their rating suggests. Cold-rolled SPCC steel conducts that heat into the body of the panel and away, which is why the output at minute twenty matches the output at minute one.",
  },
  {
    index: "04",
    title: "Why zero EMF",
    body: "A panel used for twenty minutes a day sits close to the body for thousands of hours across its life. Driver placement and shielding were treated as a design constraint from the beginning rather than a figure to measure afterwards. The result is no detectable electromagnetic emission at treatment distance.",
  },
];

const wavelengths = [
  { nm: "630", band: "Visible red", note: "The band most closely associated with collagen activity, skin tone and surface texture." },
  { nm: "660", band: "Deep red", note: "Reaches into the dermis where fibroblasts sit, while remaining where cellular absorption peaks." },
  { nm: "810", band: "Near-infrared", note: "The deepest practical penetration for soft tissue. Central to the recovery literature." },
  { nm: "850", band: "Near-infrared", note: "Carries into joints and denser tissue where shorter wavelengths cannot reach." },
  { nm: "940", band: "Far-infrared", note: "Extends the delivered spectrum and contributes gentle thermal effect at depth." },
  { nm: "1060", band: "Far-infrared", note: "The upper boundary of the panel. Broadens coverage rather than concentrating it." },
];

const specifications: [string, [string, string][]][] = [
  ["Optical", [
    ["Wavelengths", "630, 660, 810, 850, 940, 1060 nm"],
    ["Emitters", "70 LEDs"],
    ["Lens angle", "30°"],
    ["Irradiance", "220 mW/cm² ±10% at 0 in"],
  ]],
  ["Power", [
    ["LED power", "350 W"],
    ["Actual consumption", "120 W ±10%"],
    ["Input", "AC 100–240 V, 50/60 Hz"],
    ["Rated life", "50,000+ hours"],
  ]],
  ["Physical", [
    ["Dimensions", "318 × 220 × 70 mm"],
    ["Weight", "4.5 kg with packaging"],
    ["Housing", "Cold-rolled SPCC steel"],
    ["Ingress rating", "IP20"],
  ]],
  ["Environment", [
    ["EMF emission", "0 µT"],
    ["Operating temperature", "−20 °C to 50 °C"],
    ["Relative humidity", "30% to 70%"],
    ["Intended use", "Indoor, dry environments"],
  ]],
];

export default function PanelDetail() {
  const product = findProduct("panel")!;
  const [active, setActive] = useState(0);
  const shot = gallery[active];

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      {/* ——— Buy block ——— */}
      <section className="px-6 pb-24 pt-14 sm:pb-32 sm:pt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="flex min-h-[46vh] items-center justify-center overflow-hidden rounded-sm bg-divider/40 p-6 sm:min-h-[60vh]">
              {shot.src ? (
                <picture>
                  <source srcSet={shot.webp} type="image/webp" />
                  <img
                    src={shot.src}
                    alt={`minara panel — ${shot.label}`}
                    className="max-h-[42vh] w-auto object-contain sm:max-h-[56vh]"
                  />
                </picture>
              ) : (
                <span className="text-center text-xs uppercase tracking-[0.25em] text-text-muted">
                  {shot.label}
                </span>
              )}
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
              {gallery.map((g, i) => (
                <button
                  key={g.label}
                  onClick={() => setActive(i)}
                  aria-label={g.label}
                  aria-current={i === active}
                  className={`flex aspect-square items-center justify-center overflow-hidden rounded-sm border p-1 transition-colors duration-300 ${
                    i === active ? "border-text" : "border-divider hover:border-text-muted"
                  }`}
                >
                  {g.src ? (
                    <img src={g.src} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-[9px] uppercase leading-tight tracking-wider text-text-muted">
                      {i + 1}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Purchase */}
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              {product.tagline}
            </p>
            <h1 className="mt-6 text-4xl font-light tracking-[-0.03em] sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-8 text-xl font-light">
              {formatPrice(product.price, product.currency)}
            </p>

            <p className="mt-8 text-base font-light leading-relaxed text-text-secondary">
              Six clinically selected wavelengths across seventy emitters. Built
              for a twenty-minute daily session on the face, and sized to treat
              the body when you want it to.
            </p>

            <ul className="mt-10 divide-y divide-divider border-y border-divider">
              {[
                ["Treatment", "20 minutes daily, at 0–12 in"],
                ["For", "Collagen support, fine lines, tone, recovery"],
                ["Wavelengths", "630 / 660 / 810 / 850 / 940 / 1060 nm"],
                ["Rated life", "50,000+ hours"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-text-muted">{k}</span>
                  <span className="text-right text-sm font-light">{v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <AddToCart product={product} showPrice={false} className="w-full" />
            </div>

            <p className="mt-6 text-xs font-light leading-relaxed text-text-muted">
              First release, 2026. Designed in Saudi Arabia. Ships worldwide on
              AC 100–240 V, so no adapter is required.
            </p>
          </div>
        </div>
      </section>

      {/* ——— For the face ——— */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            For the face
          </motion.p>
          <motion.h2 variants={rise} className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
            Collagen is built
            <br />
            below the surface
          </motion.h2>
          <motion.div variants={rise} className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
            <p>
              Fine lines are a structural change, not a surface one. As collagen
              and elastin production slows, the dermis loses density and the skin
              above it creases and holds the crease.
            </p>
            <p>
              Topicals work above that layer. Red light at 630 and 660 nanometres
              passes into it, and is absorbed by the fibroblasts responsible for
              producing collagen in the first place. Given more available energy,
              they produce more of it.
            </p>
            <p>
              The change is gradual and cumulative, which is the honest version.
              Most published protocols run three to five sessions a week over
              eight to twelve weeks before the difference is clearly visible.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ——— Engineering ——— */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-2xl">
            <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Engineering
            </motion.p>
            <motion.h2 variants={rise} className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Four decisions
              <br />
              that shaped everything else
            </motion.h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
            {engineering.map((e) => (
              <motion.div key={e.index} variants={rise} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{e.index}</p>
                <h3 className="mt-6 text-2xl font-light tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-5 text-sm font-light leading-relaxed text-text-secondary">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ——— Wavelengths ——— */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            Wavelength selection
          </motion.p>
          <motion.h2 variants={rise} className="mt-10 max-w-2xl text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
            Six, because six
            <br />
            could be justified
          </motion.h2>

          <div className="mt-20 border-t border-divider">
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

      {/* ——— Specifications ——— */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-6xl"
        >
          <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
            Specifications
          </motion.p>

          <div className="mt-16 space-y-14">
            {specifications.map(([group, rows]) => (
              <motion.div key={group} variants={rise} className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
                <h3 className="text-xs uppercase tracking-[0.2em] text-text-muted lg:col-span-3">
                  {group}
                </h3>
                <dl className="divide-y divide-divider border-y border-divider lg:col-span-9">
                  {rows.map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                      <dt className="text-sm font-light text-text-secondary">{label}</dt>
                      <dd className="text-left text-base font-light sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </div>

          <motion.p variants={rise} className="mt-20 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
            Red light therapy is a wellness practice, not a medical treatment.
            minara is not intended to diagnose, treat or cure any condition.
            Results vary between individuals. Speak with a healthcare
            professional about your own circumstances.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Close ——— */}
      <section className="bg-text px-6 py-32 text-bg sm:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Twenty minutes,
            <br />
            every day, for a year
          </h2>
          <p className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed opacity-70">
            That is roughly one percent of the panel&rsquo;s rated life. It is
            built for the long version of this, not the trial.
          </p>
          <div className="mt-14 flex justify-center">
            <AddToCart product={product} variant="outline" className="!border-bg !text-bg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
