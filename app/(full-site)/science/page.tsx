import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Science",
  description:
    "How red light stimulates collagen production and softens fine lines. The peer-reviewed evidence behind minara's wavelength selection.",
};

function Frame({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-sm bg-divider ${ratio}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-center text-xs uppercase tracking-[0.25em] text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            The science
          </p>
          <h1 className="mt-10 max-w-3xl text-4xl font-light leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            How light rebuilds
            <br />
            what time takes down
          </h1>
          <p className="mt-10 max-w-xl text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            Fine lines are a structural change. Understanding why is the fastest
            route to understanding what red light can and cannot do about them.
          </p>
        </div>
      </section>

      {/* Collagen */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Collagen, and why
              <br />
              it stops arriving
            </h2>
            <div className="mt-10 space-y-6 text-base font-light leading-relaxed text-text-secondary">
              <p>
                Collagen is the protein that gives skin its density, and elastin
                is what lets it return to shape. Both are produced by fibroblasts
                living in the dermis, the layer beneath the surface you can see.
              </p>
              <p>
                From the mid-twenties onward, fibroblast output falls by roughly
                one percent a year. The dermis thins, loses its scaffolding, and
                the skin above begins to fold along the lines your expressions
                use most. Those folds stop springing back. That is a wrinkle.
              </p>
              <p>
                Anything applied to the surface is working several layers above
                where the problem is. That is not a criticism of skincare, it is
                a description of where it can reach.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Frame label="Dermal structure — diagram" ratio="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Mechanism
            </p>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Red light reaches
              <br />
              the layer that matters
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-3">
            {[
              {
                index: "01",
                title: "Absorption",
                body: "Red light at 630 and 660 nanometres passes through the epidermis and is absorbed by cytochrome c oxidase, an enzyme in the energy-producing structures of the cell.",
              },
              {
                index: "02",
                title: "Energy",
                body: "That absorption increases the cell's available energy. Fibroblasts are metabolically expensive cells, and collagen synthesis is one of the first things they scale back when energy is short.",
              },
              {
                index: "03",
                title: "Synthesis",
                body: "With more energy available, fibroblasts increase production of collagen and elastin. Dermal density rises, and the skin above regains some of its ability to resist and recover from folding.",
              },
            ].map((s) => (
              <div key={s.index} className="border-t border-divider pt-8">
                <p className="text-xs tracking-[0.2em] text-text-muted">{s.index}</p>
                <h3 className="mt-6 text-xl font-light tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-text-secondary">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence — published trials, cited */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              The evidence
            </p>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              What the controlled
              <br />
              trials actually found
            </h2>
            <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">
              These are independent studies of red light on facial skin, not
              minara&rsquo;s own. They are cited because the wavelengths and
              protocols overlap with ours, and because you should be able to
              check the claims yourself.
            </p>
          </div>

          <div className="mt-20 space-y-px border-t border-divider">
            {[
              {
                headline: "Dermal density rose 47.7% over twelve weeks",
                detail:
                  "Twenty women used a 630 nm device delivering 15.6 J/cm² for twelve minutes, twice weekly. Ultrasound measured dermal density rising 26.4% at 28 days, 41% at 56 days and 47.7% at 84 days. Crow's feet depth fell 38.3% and surface roughness 23.8% over the same period. Measurements taken 14 and 28 days after treatment stopped showed the gains held.",
                cite: "Couturaud V, Le Fur M, Pelletier M, Granotier F. Reverse skin aging signs by red light photobiomodulation. Skin Research and Technology, 2023.",
                href: "https://onlinelibrary.wiley.com/doi/full/10.1111/srt.13391",
                ref: "doi:10.1111/srt.13391",
              },
              {
                headline: "Collagen density confirmed by ultrasound, not by opinion",
                detail:
                  "A randomised controlled trial of 136 volunteers across four groups, treated twice weekly for 30 sessions. Outcomes were measured by blinded evaluation of clinical photography, ultrasonographic collagen density and computerised digital profilometry. Treated groups showed significant improvement in complexion, skin roughness and intradermal collagen density against controls.",
                cite: "Wunsch A, Matuschka K. A controlled trial to determine the efficacy of red and near-infrared light treatment. Photomedicine and Laser Surgery, 2014;32(2):93–100.",
                href: "https://pubmed.ncbi.nlm.nih.gov/24286286/",
                ref: "PMID 24286286",
              },
              {
                headline: "86.2% improved against a sham device they could not tell apart",
                detail:
                  "A multi-centre, randomised, double-blind, sham-controlled trial of a home-use 630 nm and 850 nm device over sixteen weeks. Neither participants nor the independent raters scoring the photographs knew which device was active. Independent raters recorded improvement in 86.2% of the treated group, against the sham control.",
                cite: "Park J, et al. Clinical study to evaluate the efficacy and safety of a home-used LED and IRED mask for crow's feet: a multi-center, randomized, double-blind, sham-controlled study. 2025.",
                href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11835066/",
                ref: "PMC11835066",
              },
              {
                headline: "31% more type-1 procollagen at 660 nanometres",
                detail:
                  "Pulsed 660 nm light applied to tissue-engineered human skin raised type-1 procollagen production by 31%, with the laboratory finding carried through to a single-blinded split-face clinical study where each participant served as their own control.",
                cite: "Barolet D, Roberge CJ, Auger FA, Boucher A, Germain L. Regulation of skin collagen metabolism in vitro using a pulsed 660 nm LED light source. Journal of Investigative Dermatology, 2009;129(12):2751–2759.",
                href: "https://pubmed.ncbi.nlm.nih.gov/19587687/",
                ref: "J Invest Dermatol 2009",
              },
            ].map((e, i) => (
              <div
                key={e.headline}
                className="grid grid-cols-1 gap-6 border-b border-divider py-12 lg:grid-cols-12 lg:gap-12"
              >
                <p className="text-xs tracking-[0.2em] text-text-muted lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-light leading-snug tracking-[-0.01em] lg:col-span-5 lg:pr-8">
                  {e.headline}
                </h3>
                <div className="lg:col-span-6">
                  <p className="text-sm font-light leading-relaxed text-text-secondary">
                    {e.detail}
                  </p>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block text-xs font-light leading-relaxed text-text-muted underline-offset-4 transition-colors duration-300 hover:text-text hover:underline"
                  >
                    {e.cite} <span className="whitespace-nowrap">[{e.ref}]</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-3xl text-xs font-light leading-relaxed text-text-muted">
            These trials trialled other manufacturers&rsquo; devices. They are
            evidence for the mechanism and for the wavelength range minara
            operates in. They are not measurements of the minara panel, and the
            figures above should not be read as results you will obtain from it.
          </p>
        </div>
      </section>

      {/* minara's own documented outcomes */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Our own results
            </p>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Documented over
              <br />
              twelve weeks
            </h2>
            <p className="mt-10 text-base font-light leading-relaxed text-text-secondary">
              Photographed under fixed lighting, at a fixed distance, without
              retouching. Published here once our own participants complete the
              full protocol. We would rather show you nothing than show you
              somebody else&rsquo;s face.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Week 0 — baseline", "Week 4", "Week 8", "Week 12"].map((l) => (
              <Frame key={l} label={l} ratio="aspect-[3/4]" />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
            Results vary between individuals. Published protocols generally run
            two to five sessions per week across eight to twelve weeks before a
            visible difference is recorded.
          </p>
        </div>
      </section>

      {/* Wavelengths */}
      <section className="border-t border-divider px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Why these wavelengths
            </p>
            <h2 className="mt-10 text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl">
              Depth is the
              <br />
              whole argument
            </h2>
          </div>

          <div className="mt-16 border-t border-divider">
            {[
              ["630 nm", "Surface and upper dermis. The band most closely associated with tone, texture and collagen activity."],
              ["660 nm", "Reaches the fibroblast layer directly. The most studied wavelength for skin outcomes."],
              ["810 nm", "Deep soft tissue. Where the recovery and inflammation literature concentrates."],
              ["850 nm", "Denser tissue and joints, beyond the reach of visible red."],
              ["940 nm", "Extends the delivered spectrum with gentle thermal effect at depth."],
              ["1060 nm", "The panel's upper boundary. Broadens coverage rather than concentrating it."],
            ].map(([nm, note]) => (
              <div key={nm} className="grid grid-cols-1 gap-3 border-b border-divider py-8 sm:grid-cols-12 sm:gap-8">
                <p className="text-2xl font-light tracking-[-0.02em] sm:col-span-3 sm:text-3xl">{nm}</p>
                <p className="text-sm font-light leading-relaxed text-text-secondary sm:col-span-9">{note}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
            Red light therapy is a wellness practice, not a medical treatment.
            minara is not intended to diagnose, treat or cure any condition.
            Speak with a healthcare professional about your own circumstances.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
