import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Journal — Minara Labs",
  description:
    "Read articles about red light therapy, wellness science, and the latest in therapeutic light technology.",
};

export default function JournalPage() {
  const articles = [
    {
      title: "The Mitochondrial Revolution: Understanding Cellular Energy",
      category: "Science",
      date: "Coming Soon",
      excerpt:
        "Explore how red light therapy optimizes mitochondrial function and increases ATP production at the cellular level.",
    },
    {
      title: "Red Light Therapy for Recovery: What the Research Shows",
      category: "Research",
      date: "Coming Soon",
      excerpt:
        "A deep dive into peer-reviewed studies on red light therapy for muscle recovery and athletic performance.",
    },
    {
      title: "Beyond the Glow: The Complete Spectrum of Wellness Benefits",
      category: "Wellness",
      date: "Coming Soon",
      excerpt:
        "Discover how multi-wavelength red light therapy addresses skin health, recovery, and systemic wellness.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-2xl">
            The Minara Journal
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            Insights on red light therapy, wellness science, and the future of therapeutic light technology.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className="space-y-4 p-8 border border-border rounded-lg hover:border-text-muted transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-muted">{article.date}</span>
                </div>

                <h3 className="text-lg font-medium text-text leading-tight">
                  {article.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {article.excerpt}
                </p>

                <button className="text-sm text-accent hover:text-accent-light transition-colors duration-300 font-medium">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
            Subscribe to our journal for the latest articles on red light therapy and wellness science.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
          >
            Join Our List
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
