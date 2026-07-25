'use client';

import { Logo } from "@/components";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Logo size="lg" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Engineered Light for Enhanced Living
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Advanced red light therapy technology, scientifically engineered to optimize your wellness and support your body's natural healing processes.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-accent-light transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-4 py-20 bg-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">
            Professional-Grade Light Therapy
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-full aspect-square bg-white border-2 border-black rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-black rounded-full mb-4 flex items-center justify-center">
                    <span className="text-white text-sm">Product Image</span>
                  </div>
                  <p className="text-text-muted">350W Red Light Therapy Device</p>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-3xl font-light mb-6">Precision Wavelengths</h3>
              <p className="text-lg text-text-secondary mb-8">
                Our device delivers therapeutic light across 6 scientifically-validated wavelengths (630nm to 1060nm), each optimized for specific wellness benefits.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Zero Electromagnetic Fields (EMF)</p>
                    <p className="text-text-muted">Safe for continuous use</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">50,000+ Hour Lifespan</p>
                    <p className="text-text-muted">Designed for longevity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">220 mW/cm² Power Density</p>
                    <p className="text-text-muted">Professional-grade intensity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">
            Comprehensive Wellness Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">→</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Cellular Energy</h3>
              <p className="text-text-muted">
                Stimulates mitochondrial function and ATP production for enhanced cellular energy.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">◯</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Recovery & Healing</h3>
              <p className="text-text-muted">
                Supports natural healing processes and reduces recovery time post-exercise.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✦</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Skin & Anti-Aging</h3>
              <p className="text-text-muted">
                Promotes collagen production and improves skin tone and elasticity naturally.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Performance</h3>
              <p className="text-text-muted">
                Enhances athletic performance, endurance, and muscle development naturally.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">◆</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Sleep Quality</h3>
              <p className="text-text-muted">
                Optimizes circadian rhythm for improved sleep and natural rest cycles.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">☀</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Mood & Vitality</h3>
              <p className="text-text-muted">
                Supports mood regulation and overall vitality through light therapy benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-light mb-6">
          Join the Precision Wellness Revolution
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of therapeutic light technology. Available now for early adopters.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Pre-Order Now
        </button>
      </section>

      <Footer />
    </div>
  );
}
