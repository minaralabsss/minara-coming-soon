import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technology — Minara Labs Red Light Innovation",
  description:
    "Discover the advanced engineering behind Minara's red light therapy panels. Multi-wavelength technology, precision optics, and thermal management.",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-3xl">
            Engineering Precision Light
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            The Minara Red Light Therapy Panel represents years of research into
            optimal wavelength selection, optical design, and thermal management.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-text">
                Multi-Wavelength System
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
                Our panel combines six scientifically-selected wavelengths to deliver
                comprehensive therapeutic coverage:
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-text-muted font-medium">
                    630nm (Red)
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Optimal for skin penetration and surface-level cellular stimulation
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-text-muted font-medium">
                    660nm (Deep Red)
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Enhanced penetration for deeper tissue support
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-text-muted font-medium">
                    810nm (Near-Infrared)
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Maximum tissue penetration and mitochondrial optimization
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-text-muted font-medium">
                    850nm (NIR)
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Deep tissue and joint support
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-text-muted font-medium">
                    940nm & 1060nm (Far-Infrared)
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    Thermal benefits and extended spectrum coverage
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
              <p className="text-text-muted text-center font-light">
                6 Scientifically Selected Wavelengths
                <br />
                630nm → 1060nm Spectrum
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Features */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-12 lg:mb-16">
            Advanced Engineering
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
            The Future of Light Technology
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
            Every component engineered for precision. Every wavelength selected for efficacy.
            Every detail optimized for your wellness.
          </p>
          <a
            href="/contact"
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
