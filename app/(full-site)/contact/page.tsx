import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Minara Labs — Premium Light Technology",
  description: "Get in touch with the Minara Labs team. Early access, inquiries, and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-2xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            Interested in early access? Have questions about the Minara Red Light
            Therapy Panel? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-3">
                  Email
                </h3>
                <a
                  href="mailto:hello@minaralabs.shop"
                  className="text-lg text-text hover:text-accent transition-colors duration-300"
                >
                  hello@minaralabs.shop
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-3">
                  Location
                </h3>
                <p className="text-lg text-text">Saudi Arabia</p>
                <p className="text-sm text-text-secondary mt-1">
                  Engineered and crafted locally
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-3">
                  Response Time
                </h3>
                <p className="text-lg text-text">24-48 Hours</p>
                <p className="text-sm text-text-secondary mt-1">
                  We personally review every inquiry
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-4">
                  What We're Looking For
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Early access requests and product feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Distribution and partnership inquiries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Technical specifications and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Collaboration and media inquiries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-bg p-8 sm:p-10 border border-border rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border bg-bg-dark text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border bg-bg-dark text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-border bg-bg-dark text-text rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                >
                  <option value="">Select a topic</option>
                  <option value="early-access">Early Access Request</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">Support & Technical</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border bg-bg-dark text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
              >
                Send Message
              </button>

              <p className="text-xs text-text-muted text-center">
                We'll get back to you within 24-48 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
