import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "minara labs designs precision light therapy instruments in Saudi Arabia. Our approach to specification, materials and evidence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            About
          </p>
          <h1 className="mt-10 max-w-3xl text-4xl font-light leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            A light company,
            <br />
            designed in Saudi Arabia
          </h1>
          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            We make instruments that use light to support the body&rsquo;s own
            repair. The panel is the first. It will not be the last.
          </p>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light leading-[1.5] tracking-[-0.01em] sm:text-3xl">
            Most devices in this category are assembled to a price, then
            described afterwards. We work the other way around.
          </h2>
          <div className="mt-12 space-y-6 text-base font-light leading-relaxed text-text-secondary">
            <p>
              Every product begins as a written specification: which wavelengths,
              at what irradiance, held for how long, and on what evidence. Only
              once that document is settled does anything get drawn.
            </p>
            <p>
              It is a slower way to build, and it means we will release fewer
              things than the market expects. We would rather publish a short
              catalogue we can defend line by line.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            How we work
          </p>
          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { index: "01", title: "Evidence first", body: "If a claim cannot be traced to peer-reviewed work, it does not appear on this site or on a box." },
              { index: "02", title: "Specified, then designed", body: "Performance requirements are fixed before industrial design begins, never adjusted afterwards to match what was built." },
              { index: "03", title: "Materials that do work", body: "Steel because it conducts heat, not because it photographs well. Every material earns its place functionally." },
              { index: "04", title: "Conservative numbers", body: "Published figures are stated with tolerances rather than as peaks. The number you read is the number you get." },
              { index: "05", title: "Built to be kept", body: "Rated lives measured in decades, not warranty periods. Longevity is a design constraint from the first sketch." },
              { index: "06", title: "Designed in Saudi Arabia", body: "Drawn, specified and refined here, for a market that has been asked to import its wellness technology for too long." },
            ].map((v) => (
              <div key={v.index} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{v.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{v.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            What follows
          </p>
          <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
            A short catalogue,
            <br />
            built slowly
          </h2>
          <p className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed text-text-secondary">
            Two further instruments are in development. Each will be announced
            when it is ready and not before.
          </p>
          <div className="mt-14">
            <a
              href="mailto:minaralabs@gmail.com"
              className="border-b border-text pb-1 text-sm tracking-wide transition-opacity duration-500 hover:opacity-50"
            >
              minaralabs@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
