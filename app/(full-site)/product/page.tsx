import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ProductSpecs from "@/components/ProductSpecs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Minara Red Light Therapy Panel — Premium Light Technology",
  description:
    "Discover the Minara Red Light Therapy Panel. 350W power, 70 LED wavelengths, engineered for therapeutic precision. Technical specifications and benefits.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight">
                Minara Red Light Therapy Panel
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed">
                350W of therapeutic light engineered with precision. Featuring 70
                advanced LEDs across six clinically-proven wavelengths. Built for
                consistent performance over 50,000+ hours.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-medium text-text mb-1">
                      Multi-Wavelength Coverage
                    </h3>
                    <p className="text-sm text-text-secondary">
                      630nm, 660nm, 810nm, 850nm, 940nm, 1060nm for comprehensive
                      therapeutic benefits
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-medium text-text mb-1">
                      Precision Engineering
                    </h3>
                    <p className="text-sm text-text-secondary">
                      220 mW/cm² irradiance (±10%) measured at 0 inches for consistent results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-medium text-text mb-1">
                      Zero Compromise on Safety
                    </h3>
                    <p className="text-sm text-text-secondary">
                      0 µT EMF emissions. IP20 protection rating. Manufactured with premium SPCC steel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
                >
                  Request Early Access
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <p className="text-text-muted text-center font-light">
                  Minara Red Light Therapy Panel
                  <br />
                  350W | 70 LEDs | 6 Wavelengths
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specs */}
      <ProductSpecs />

      {/* Specifications Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Dimensions & Weight
              </h3>
              <p className="text-lg font-light text-text">318 × 220 × 70 mm</p>
              <p className="text-sm text-text-secondary">4.5 kg with packaging</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Power & Efficiency
              </h3>
              <p className="text-lg font-light text-text">350W LED Power</p>
              <p className="text-sm text-text-secondary">120W ±10% actual power consumption</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Durability
              </h3>
              <p className="text-lg font-light text-text">50,000+ Hours</p>
              <p className="text-sm text-text-secondary">Over 5+ years at 24/7 usage</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Operating Range
              </h3>
              <p className="text-lg font-light text-text">-20°C to 50°C</p>
              <p className="text-sm text-text-secondary">30%-70% RH humidity tolerance</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Lens & Coverage
              </h3>
              <p className="text-lg font-light text-text">30° Lens Angle</p>
              <p className="text-sm text-text-secondary">Optimized therapeutic dispersion</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium">
                Connectivity
              </h3>
              <p className="text-lg font-light text-text">AC100-240V, 50/60Hz</p>
              <p className="text-sm text-text-secondary">Global voltage compatibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-6">
            Experience Precision Light
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            The Minara Red Light Therapy Panel represents a breakthrough in therapeutic
            light technology. Engineered with scientific precision. Built to last.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
          >
            Request Early Access Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
