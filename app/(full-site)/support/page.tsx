import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support & FAQ — Minara Labs",
  description: "Find answers to common questions about the Minara Red Light Therapy Panel.",
};

export default function SupportPage() {
  const faqs = [
    {
      question: "What is red light therapy and how does it work?",
      answer:
        "Red light therapy uses specific wavelengths of light to stimulate mitochondrial function and increase ATP (cellular energy) production. Our panel uses six clinically-proven wavelengths (630nm to 1060nm) to deliver comprehensive benefits.",
    },
    {
      question: "How long should I use the Minara panel each day?",
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
        "The Minara panel is calibrated for optimal results at 0-12 inches from your skin. At 0 inches, you receive 220 mW/cm² (±10%) of therapeutic light. Adjust based on your comfort level and specific wellness goals.",
    },
    {
      question: "Can I use it on any body part?",
      answer:
        "Yes. The Minara panel can be used on face, skin, joints, and muscle groups. The multi-wavelength spectrum (630nm-1060nm) penetrates various tissue depths, making it suitable for different applications.",
    },
    {
      question: "How many wavelengths does the Minara panel use?",
      answer:
        "Six clinically-proven wavelengths: 630nm (red), 660nm (deep red), 810nm (NIR), 850nm (NIR), 940nm (far-infrared), and 1060nm (far-infrared). This spectrum provides comprehensive coverage for optimal therapeutic benefits.",
    },
    {
      question: "What is the lifespan of the LEDs?",
      answer:
        "The Minara panel is rated for 50,000+ hours of operation. That's over 5 years of 24/7 continuous use. Premium SPCC steel construction ensures superior thermal management and longevity.",
    },
    {
      question: "Is it compatible with international outlets?",
      answer:
        "Yes. The Minara panel accepts AC100-240V input at 50/60Hz, making it compatible with electrical systems worldwide.",
    },
    {
      question: "What does IP20 protection mean?",
      answer:
        "IP20 means the panel is protected from solid objects larger than 12.5mm and requires protection from water spray. It's suitable for indoor wellness use in dry environments.",
    },
    {
      question: "Can I see the Minara panel before purchasing?",
      answer:
        "The Minara panel is currently in a pre-launch phase. Join our early access waitlist to be among the first to experience it and receive special founder pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight max-w-2xl">
            Support & FAQ
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            Find answers to common questions about the Minara Red Light Therapy Panel.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg-dark border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-text mb-6">
            Have More Questions?
          </h2>
          <p className="text-lg text-text-secondary mb-8 font-light leading-relaxed">
            Our team is here to help. Reach out with any questions about the Minara
            Red Light Therapy Panel.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-bg font-medium hover:bg-accent-light transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
