import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Science & Technology — Minara Labs",
  description:
    "Explore the peer-reviewed science and advanced engineering behind Minara's red light therapy panels. Wavelengths, technology, and proven wellness benefits.",
};

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-3xl">
            Science & Technology
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            Red light therapy backed by 40+ years of peer-reviewed research. Advanced engineering optimized for therapeutic efficacy.
          </p>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-12">
            Cellular Energy at the Mitochondrial Level
          </h2>

          <div className="space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-text">Cytochrome C Oxidase Activation</h3>
                <p className="text-base text-text-secondary leading-relaxed font-light">
                  Red and near-infrared wavelengths (630-810nm) penetrate tissue to reach
                  mitochondria. They stimulate Cytochrome C Oxidase, a crucial enzyme in
                  ATP production, enhancing cellular energy output.
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <p className="text-text-muted text-center font-light text-sm px-4">
                  Mitochondrial Optimization Process
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center order-2 lg:order-1">
                <p className="text-text-muted text-center font-light text-sm px-4">
                  Cellular ATP Production
                </p>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-lg font-medium text-text">ATP Production Increase</h3>
                <p className="text-base text-text-secondary leading-relaxed font-light">
                  Studies show red light therapy can increase ATP production by up to 40%.
                  More cellular energy means better recovery, reduced inflammation, and
                  improved overall wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-12">
            Areas of Active Research
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Skin Health",
                description:
                  "Collagen production, elasticity, and wound healing improvement",
              },
              {
                title: "Recovery & Performance",
                description: "Muscle recovery, reduced soreness, athletic performance",
              },
              {
                title: "Mitochondrial Function",
                description:
                  "Energy production, oxidative stress reduction, cellular health",
              },
              {
                title: "Inflammation",
                description:
                  "Reduced systemic inflammation, joint health, mobility support",
              },
              {
                title: "Neurological Health",
                description: "Cognitive function, neuroprotection, brain health",
              },
              {
                title: "Sleep & Circadian Rhythm",
                description:
                  "Sleep quality improvement, circadian rhythm regulation",
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg hover:border-text-muted transition-colors duration-300"
              >
                <h3 className="text-base font-medium text-text mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavelength Science */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-12">
            Why Our Wavelength Selection Matters
          </h2>

          <div className="space-y-8">
            <p className="text-lg text-text-secondary leading-relaxed font-light max-w-3xl">
              Every wavelength in the Minara panel was selected based on clinical evidence.
              This multi-wavelength approach provides comprehensive benefits across the
              visible and near-infrared spectrum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 bg-bg border border-border rounded-lg">
                <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-2">
                  Visible Red
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  630nm & 660nm wavelengths peak at skin penetration and stimulate
                  cytochrome c oxidase optimally
                </p>
              </div>

              <div className="p-6 bg-bg border border-border rounded-lg">
                <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-2">
                  Near-Infrared
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  810nm & 850nm penetrate deeper into tissue and bones, maximizing
                  mitochondrial stimulation
                </p>
              </div>

              <div className="p-6 bg-bg border border-border rounded-lg">
                <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-2">
                  Far-Infrared
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  940nm & 1060nm provide thermal benefits and extended spectrum coverage
                </p>
              </div>

              <div className="p-6 bg-bg border border-border rounded-lg">
                <p className="text-xs uppercase tracking-wider text-text-muted font-medium mb-2">
                  The Synergy
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Together, these wavelengths create a comprehensive therapeutic experience
                  unmatched by single-wavelength devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Engineering */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-12 lg:mb-16">
            Advanced Engineering & Design
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">Precision Optics</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                30° lens angle optimized for therapeutic coverage without excessive
                divergence. Each LED precisely positioned for uniform irradiance.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">70 High-Efficiency LEDs</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Premium LEDs selected for consistency, longevity, and spectral purity.
                Distributed across all wavelengths for comprehensive coverage.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">Thermal Management</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                SPCC steel construction for superior heat dissipation. Operates reliably
                in -20°C to 50°C environments. 50,000+ hour lifespan.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">Zero EMF Emissions</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Engineered specifically to eliminate EMF. No electromagnetic field
                interference. Safe for continuous use.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">Power Efficiency</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                350W LED power with only 120W ±10% actual consumption. Advanced power
                management for 24/7 operational reliability.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-border rounded-lg">
              <h3 className="text-lg font-medium text-text">Global Compatibility</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                AC100-240V, 50/60Hz input. IP20 protection rating. Works seamlessly
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-6">
            Science-Backed Engineering
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
            Minara is built on 40+ years of peer-reviewed red light therapy research.
            Every specification engineered for proven benefits.
          </p>
          <a
            href="/support"
            className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
