import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about minara labs. We're engineering premium red light therapy technology for optimal wellness. Crafted in Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-3xl">
            Precision Light for Living Well
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            minara labs is dedicated to advancing wellness through scientifically-engineered
            red light therapy technology.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
                We believe in the power of precision-engineered light to optimize human
                wellness. By combining decades of peer-reviewed research with meticulous
                engineering, we create products that deliver measurable, science-backed benefits.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-light">
                Every product from minara labs is engineered with one goal: to help people
                live better, feel stronger, and age more gracefully.
              </p>
            </div>

            <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
              <p className="text-text-muted text-center font-light">
                Engineered for Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Precision</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                We obsess over every detail. From wavelength selection to thermal management,
                nothing is left to chance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Science First</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Everything we build is backed by peer-reviewed research. We follow the evidence,
                not trends.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Longevity</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                We build to last. 50,000+ hours of reliability means years of consistent wellness support.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Transparency</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Every specification, every wavelength, every design choice is documented and explained.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Craftsmanship</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Engineered in Saudi Arabia with premium materials and rigorous quality standards.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text">Accessibility</h3>
              <p className="text-base text-text-secondary leading-relaxed font-light">
                Premium wellness technology should be available to everyone who values their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why minara */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-12">
            Why Choose minara
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-3 p-8 border border-border rounded-lg">
                <h3 className="text-lg font-medium text-text">350W Peak Power</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Industry-leading power output with efficient 120W consumption
                </p>
              </div>

              <div className="space-y-3 p-8 border border-border rounded-lg">
                <h3 className="text-lg font-medium text-text">6 Wavelengths</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Comprehensive spectrum from 630nm to 1060nm
                </p>
              </div>

              <div className="space-y-3 p-8 border border-border rounded-lg">
                <h3 className="text-lg font-medium text-text">Zero EMF</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Safe for continuous use without electromagnetic interference
                </p>
              </div>

              <div className="space-y-3 p-8 border border-border rounded-lg">
                <h3 className="text-lg font-medium text-text">50,000+ Hour Lifespan</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Over 5 years of 24/7 operation reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-6">
            Join the minara Movement
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
            Be part of the future of precision wellness technology.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
          >
            Request Early Access
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
