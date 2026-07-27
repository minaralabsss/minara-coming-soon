import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support & Contact",
  description: "Get support, ask questions, or contact the minara labs team about red light therapy.",
};

export default function SupportPage() {
  const faqs = [
    {
      question: "What is red light therapy and how does it work?",
      answer:
        "Red light therapy uses specific wavelengths of light to stimulate mitochondrial function and increase ATP (cellular energy) production. Our panel uses six clinically-proven wavelengths (630nm to 1060nm) to deliver comprehensive benefits.",
    },
    {
      question: "How long should I use the minara panel each day?",
      answer:
        "Recommended usage is 15-30 minutes per day, depending on distance and personal wellness goals. Most users see optimal results with consistent daily use. Consult with your healthcare provider for personalized recommendations.",
    },
    {
      question: "Is red light therapy safe for daily use?",
      answer:
        "Yes. Red light therapy is non-invasive and has been studied extensively. Our panel produces zero EMF emissions and is designed for safe continuous operation. Always follow usage guidelines and consult with a healthcare professional.",
    },
    {
      question: "What distance should I be from the panel?",
      answer:
        "The minara panel is calibrated for optimal results at 0-12 inches from your skin. At 0 inches, you receive 220 mW/cm² (±10%) of therapeutic light. Adjust based on your comfort level and specific wellness goals.",
    },
    {
      question: "Can I use it on any body part?",
      answer:
        "Yes. The minara panel can be used on face, skin, joints, and muscle groups. The multi-wavelength spectrum (630nm-1060nm) penetrates various tissue depths, making it suitable for different applications.",
    },
    {
      question: "How many wavelengths does the minara panel use?",
      answer:
        "Six clinically-proven wavelengths: 630nm (red), 660nm (deep red), 810nm (NIR), 850nm (NIR), 940nm (far-infrared), and 1060nm (far-infrared). This spectrum provides comprehensive coverage for optimal therapeutic benefits.",
    },
    {
      question: "What is the lifespan of the LEDs?",
      answer:
        "The minara panel is rated for 50,000+ hours of operation. That's over 5 years of 24/7 continuous use. Premium SPCC steel construction ensures superior thermal management and longevity.",
    },
    {
      question: "Is it compatible with international outlets?",
      answer:
        "Yes. The minara panel accepts AC100-240V input at 50/60Hz, making it compatible with electrical systems worldwide.",
    },
    {
      question: "What does IP20 protection mean?",
      answer:
        "IP20 means the panel is protected from solid objects larger than 12.5mm and requires protection from water spray. It's suitable for indoor wellness use in dry environments.",
    },
    {
      question: "Can I see the minara panel before purchasing?",
      answer:
        "The minara panel is currently in a pre-launch phase. Join our early access waitlist to be among the first to experience it and receive special founder pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-2xl">
            Support & Contact
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            Find answers to your questions or reach out to our team directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-border rounded-lg p-6 sm:p-8 cursor-pointer hover:border-text-muted transition-colors duration-300"
              >
                <summary className="flex items-start justify-between gap-4 font-medium text-text">
                  <span className="text-base sm:text-lg leading-relaxed text-left">
                    {faq.question}
                  </span>
                  <span className="text-accent flex-shrink-0 text-xl group-open:rotate-180 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base text-text-secondary leading-relaxed font-light">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-3">
                  Email
                </h3>
                <a
                  href="mailto:minaralabs@gmail.com"
                  className="text-lg text-text hover:text-accent transition-colors duration-300"
                >
                  minaralabs@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-text-muted font-medium mb-3">
                  Location
                </h3>
                <p className="text-lg text-text">Saudi Arabia</p>
                <p className="text-sm text-text-secondary mt-1">
                  Designed in Saudi Arabia
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
            <form className="space-y-6 bg-bg-dark p-8 sm:p-10 border border-border rounded-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border bg-bg text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-border bg-bg text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-border bg-bg text-text rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-border bg-bg text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
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
