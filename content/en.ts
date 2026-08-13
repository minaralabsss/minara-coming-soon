import type { SiteContent } from "./types";

export const en: SiteContent = {
  dir: "ltr",

  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/product", label: "Product" },
      { href: "/science", label: "Science" },
      { href: "/about", label: "About" },
      { href: "/support", label: "Support" },
    ],
    cart: "Open cart",
    menu: "Toggle menu",
    switchLabel: "اقرأ بالعربية",
    switchTo: "AR",
    home: "minara labs — home",
  },

  footer: {
    blurb:
      "Precision light technology, designed in Saudi for the way modern skin and modern lives are actually lived.",
    explore: "Explore",
    policies: "Policies",
    connect: "Connect",
    returns: "Returns",
    warranty: "Warranty",
    rights: "All rights reserved. Designed in Saudi.",
    disclaimerShort: "A wellness practice, not a medical treatment.",
    unifiedLabel: "Unified number",
    crLabel: "CR",
  },

  modal: {
    eyebrow: "minara labs — 2026",
    title: "Join the\nFirst Release",
    body: "Be among the first to experience minara. Launch news and product announcements, before anyone else.",
    continue: "Continue to site",
    origin: "Designed in Saudi",
    close: "Close",
  },

  cart: {
    title: "Cart",
    empty: "Your cart is empty.",
    subtotal: "Subtotal",
    checkout: "Complete order",
    checkoutReady: "Checkout",
    updating: "Updating…",
    note: "Card checkout arrives with the first release. Until then an order enquiry reaches us directly.",
    taxNote: "Delivery details on the next step. Free delivery within Saudi Arabia.",
    remove: "Remove",
    close: "Close cart",
  },

  form: {
    placeholder: "your@email.com",
    submit: "Join the Waitlist",
    helper: "You'll be the first to access our red light therapy breakthrough",
    success: "Welcome to minara labs",
    successBody: "Check your email for exclusive updates",
    sending: "Sending",
  },

  buy: {
    addToCart: "Add to cart",
    viewDetails: "View full details",
    fullDetails: "Full details",
    launchOffer: "Opening price",
    launchNote: "Introductory price to mark the opening of our store.",
  },

  checkout: {
    eyebrow: "Checkout",
    title: "Where should\nwe send it?",
    intro:
      "Delivery details first, payment second. Your card is entered on Moyasar's secure page — we never see or store it.",
    saudiOnly: "We currently deliver within Saudi Arabia only.",
    name: "Full name",
    namePh: "First and last name",
    email: "Email",
    phone: "Mobile number",
    phonePh: "05X XXX XXXX",
    province: "Province",
    provincePh: "Select your province",
    city: "City",
    cityPh: "Select your city",
    cityLocked: "Choose a province first",
    shortAddress: "Short address",
    shortAddressPh: "ABCD1234",
    shortAddressHelp:
      "Your National Address short code — four letters then four numbers. Find it in the Absher or Saudi Post app.",
    address: "Delivery address",
    addressPh: "District, street, building and any landmark that helps the courier",
    notes: "Notes for delivery",
    notesPh: "Preferred delivery time, gate code, anything useful",
    optional: "Optional",
    summary: "Your order",
    qty: "Quantity",
    delivery: "Delivery",
    free: "Free",
    total: "Total",
    pay: "Continue to payment",
    working: "Preparing your payment",
    errorGeneric: "Something went wrong. Please try again.",
    errorFields: "Please check the highlighted fields.",
    testMode: "Test mode — no real payment will be taken.",
    back: "Back to the panel",
  },

  order: {
    eyebrow: "Thank you",
    title: "Your order\nis confirmed",
    body: "Payment received. A receipt is on its way to your email, and we have your delivery details.",
    refLabel: "Order reference",
    itemsLabel: "What you ordered",
    galleryLabel: "What is on its way to you",
    next: [
      "You receive tracking details by email once it ships",
    ],
    contact: "Any questions, reply to your receipt or write to us directly.",
    home: "Back to home",
  },

  productNames: {
    panel: "The Panel",
    cap: "The Cap",
    "head-massager": "The Head Massager",
  },

  disclaimer:
    "Red light therapy is a wellness practice, not a medical treatment. minara is not intended to diagnose, treat or cure any condition. Results vary between individuals. Speak with a healthcare professional about your own circumstances.",

  home: {
    eyebrow: "minara labs — first release",
    title: "The face you have.\nSimply better rested.",
    intro:
      "Clinical red light, at the wavelengths shown to stimulate collagen and soften fine lines. Twenty minutes. At home. On your schedule.",
    whyEyebrow: "Why it exists",
    whyStatement:
      "Serums work on the surface. Collagen is made underneath it. minara was built to reach the layer where skin is actually rebuilt.",
    faceEyebrow: "The face",
    faceTitle: "Where the evidence\nis strongest",
    faceBody: [
      "Facial skin is where red light therapy has been studied most closely, and where the findings are most consistent. Fibroblasts sit in the dermis, and at 630 and 660 nanometres light reaches them directly.",
      "What that supports is measurable rather than magical: increased collagen density, improved elasticity, a softening of fine lines around the eyes and mouth, and a more even tone. It is gradual. It is also cumulative, which is why the panel was built to be used every day rather than saved for occasions.",
    ],
    faceFrame: "Facial treatment — in use",
    scienceEyebrow: "The science",
    scienceTitle: "Light your cells\nalready know how to use",
    scienceBody:
      "Red and near-infrared light is absorbed by the structures inside your cells that produce energy. Four decades of peer-reviewed work describe what follows: fibroblasts with more energy available to them build more collagen, and skin repairs itself more readily.",
    stats: [
      { value: "6", unit: "wavelengths", note: "630 to 1060 nanometres, each selected against clinical evidence" },
      { value: "20", unit: "minutes", note: "A single daily session, at a distance you choose" },
      { value: "0", unit: "µT EMF", note: "No measurable electromagnetic emission during operation" },
    ],
    objectEyebrow: "The object",
    objectTitle: "Made to be left out,\nnot put away",
    objectBody:
      "A device you are meant to use daily has to earn its place in the room. minara is drawn as an object first: a clean steel body, no branding across the face, and a display that tells you what you need and nothing more.",
    objectSpecs: [
      ["Emitters", "70 high-efficiency LEDs"],
      ["Rated life", "50,000+ hours"],
      ["Body", "Cold-rolled SPCC steel"],
      ["Input", "AC 100–240V, 50/60Hz"],
    ],
    objectFrame: "Emitter array — macro",
    effectEyebrow: "The effect",
    effectTitle: "What consistent use\nis understood to support",
    effects: [
      { index: "01", title: "Collagen density", body: "Fibroblasts in the dermis respond to red light by producing more collagen and elastin, the two proteins that keep skin firm." },
      { index: "02", title: "Fine lines", body: "Improved dermal density softens the appearance of fine lines, most visibly around the eyes, mouth and forehead." },
      { index: "03", title: "Tone and texture", body: "Associated with a more even complexion, reduced redness and a refinement of surface texture over sustained use." },
      { index: "04", title: "Recovery", body: "Helps the body settle inflammation after exertion, shortening the interval between effort and readiness." },
      { index: "05", title: "Sleep quality", body: "Reinforces the body's daily light cues, supporting deeper and less interrupted rest." },
      { index: "06", title: "Clarity and mood", body: "Linked in research to improved mental clarity and a more even emotional baseline." },
    ],
    ctaEyebrow: "First release — 2026",
    ctaTitle: "A small number\nwill be made first",
    ctaBody:
      "The first release is limited by intent, not scarcity. Those on the list are told first, and are given the time to decide.",
    ctaLink: "View the panel",
  },

  product: {
    eyebrow: "The collection",
    title: "Instruments for\nconsidered skin",
    intro:
      "We build a small number of things, slowly. Each one is specified before it is designed, and released only once it does what the research says it should.",
    available: "Available",
    development: "In development",
    devNote:
      "Announced when they are ready and not before. Join the list on any page and you will hear about each release first.",
    forthcoming: [
      { name: "The Mask", tagline: "Contoured facial treatment", note: "In development" },
      { name: "The Wand", tagline: "Targeted precision treatment", note: "In development" },
    ],
    panelTagline: "For the face first, then the body",
    panelSummary:
      "Made first for the face — collagen, fine lines, tone — then sized for the whole body. Six clinical wavelengths across seventy emitters.",
  },

  panel: {
    tagline: "For the face first, then the body",
    name: "The Panel",
    summary:
      "Six clinically selected wavelengths across seventy emitters. Made first for the face — collagen, fine lines, tone — and sized to treat the whole body when you want more.",
    quickSpecs: [
      ["Treatment", "20 minutes daily, at 0–12 in"],
      ["For", "Collagen support, fine lines, tone, recovery"],
      ["Wavelengths", "630 / 660 / 810 / 850 / 940 / 1060 nm"],
      ["Rated life", "50,000+ hours"],
    ],
    shipping:
      "First release, 2026. Designed in Saudi. Ships worldwide on AC 100–240 V, so no adapter is required.",
    returnsLink: "7-day returns",
    warrantyLink: "1-year warranty",
    gallery: [
      "Three-quarter view",
      "Front elevation",
      "Side profile",
      "Emitter array — macro",
      "Display detail",
      "Rear — thermal path",
      "In use — facial treatment",
      "Packaging",
    ],
    faceEyebrow: "For the face",
    faceTitle: "Collagen is built\nbelow the surface",
    faceBody: [
      "Fine lines are a structural change, not a surface one. As collagen and elastin production slows, the dermis loses density and the skin above it creases and holds the crease.",
      "Topicals work above that layer. Red light at 630 and 660 nanometres passes into it, and is absorbed by the fibroblasts responsible for producing collagen in the first place. Given more available energy, they produce more of it.",
      "The change is gradual and cumulative, which is the honest version. Most published protocols run three to five sessions a week over eight to twelve weeks before the difference is clearly visible.",
    ],
    engEyebrow: "Engineering",
    engTitle: "Four decisions\nthat shaped everything else",
    engineering: [
      { index: "01", title: "Why seventy emitters", body: "Fewer, brighter emitters produce a hot centre and a dim edge. Seventy lower-driven LEDs spread the same delivered energy across the whole treatment area, which keeps the dose even across the face and lets each emitter run well below its thermal limit. Running cool is the single largest factor in how long an LED holds its rated output." },
      { index: "02", title: "Why thirty-degree optics", body: "A bare LED throws light in a wide, uncontrolled cone. Most of it never reaches the skin, and what does arrives at an angle that reduces absorption. A 30° lens holds the beam where it is aimed, so the figure measured at the panel surface is close to the figure delivered to the dermis." },
      { index: "03", title: "Why steel, not moulded plastic", body: "Plastic housings insulate. Heat accumulates behind the array, output drifts downward during a session, and the emitters age faster than their rating suggests. Cold-rolled SPCC steel conducts that heat into the body of the panel and away, which is why the output at minute twenty matches the output at minute one." },
      { index: "04", title: "Why zero EMF", body: "A panel used for twenty minutes a day sits close to the body for thousands of hours across its life. Driver placement and shielding were treated as a design constraint from the beginning rather than a figure to measure afterwards. The result is no detectable electromagnetic emission at treatment distance." },
    ],
    wlEyebrow: "Wavelength selection",
    wlTitle: "Six, because six\ncould be justified",
    wavelengths: [
      { nm: "630", band: "Visible red", note: "The band most closely associated with collagen activity, skin tone and surface texture." },
      { nm: "660", band: "Deep red", note: "Reaches into the dermis where fibroblasts sit, while remaining where cellular absorption peaks." },
      { nm: "810", band: "Near-infrared", note: "The deepest practical penetration for soft tissue. Central to the recovery literature." },
      { nm: "850", band: "Near-infrared", note: "Carries into joints and denser tissue where shorter wavelengths cannot reach." },
      { nm: "940", band: "Far-infrared", note: "Extends the delivered spectrum and contributes gentle thermal effect at depth." },
      { nm: "1060", band: "Far-infrared", note: "The upper boundary of the panel. Broadens coverage rather than concentrating it." },
    ],
    specsEyebrow: "Specifications",
    specs: [
      ["Optical", [
        ["Wavelengths", "630, 660, 810, 850, 940, 1060 nm"],
        ["Emitters", "70 LEDs"],
        ["Lens angle", "30°"],
        ["Irradiance", "220 mW/cm² ±10% at 0 in"],
      ]],
      ["Power", [
        ["LED power", "350 W"],
        ["Actual consumption", "120 W ±10%"],
        ["Input", "AC 100–240 V, 50/60 Hz"],
        ["Rated life", "50,000+ hours"],
      ]],
      ["Physical", [
        ["Dimensions", "318 × 220 × 70 mm"],
        ["Weight", "4.5 kg with packaging"],
        ["Housing", "Cold-rolled SPCC steel"],
        ["Ingress rating", "IP20"],
      ]],
      ["Environment", [
        ["EMF emission", "0 µT"],
        ["Operating temperature", "−20 °C to 50 °C"],
        ["Relative humidity", "30% to 70%"],
        ["Intended use", "Indoor, dry environments"],
      ]],
    ],
    closeTitle: "Twenty minutes,\nevery day, for a year",
    closeBody:
      "That is roughly one percent of the panel's rated life. It is built for the long version of this, not the trial.",
    includedEyebrow: "In the box",
    includedTitle: "Everything you need,\nfrom the first session",
    included: [
      { img: "panel", label: "Panel with stand" },
      { img: "remote", label: "Remote control" },
      { img: "glasses", label: "Eye protection glasses" },
      { img: "cable", label: "Power cable" },
      { img: "hook", label: "Door hook" },
      { img: "sling", label: "Hanging sling" },
      { img: "manual", label: "User manual" },
    ],
    inUseAlt: "A woman using the minara panel for a facial session",
    sideAlt: "The minara panel, side profile",
    emittersAlt: "Close detail of the minara emitter array and optics",
  },

  science: {
    eyebrow: "The science",
    title: "How light rebuilds\nwhat time takes down",
    intro:
      "Fine lines are a structural change. Understanding why is the fastest route to understanding what red light can and cannot do about them.",
    collagenTitle: "Collagen, and why\nit stops arriving",
    collagenBody: [
      "Collagen is the protein that gives skin its density, and elastin is what lets it return to shape. Both are produced by fibroblasts living in the dermis, the layer beneath the surface you can see.",
      "From the mid-twenties onward, fibroblast output falls by roughly one percent a year. The dermis thins, loses its scaffolding, and the skin above begins to fold along the lines your expressions use most. Those folds stop springing back. That is a wrinkle.",
      "Anything applied to the surface is working several layers above where the problem is. That is not a criticism of skincare, it is a description of where it can reach.",
    ],
    collagenFrame: "Dermal structure — diagram",
    mechEyebrow: "Mechanism",
    mechTitle: "Red light reaches\nthe layer that matters",
    mechanism: [
      { index: "01", title: "Absorption", body: "Red light at 630 and 660 nanometres passes through the epidermis and is absorbed by cytochrome c oxidase, an enzyme in the energy-producing structures of the cell." },
      { index: "02", title: "Energy", body: "That absorption increases the cell's available energy. Fibroblasts are metabolically expensive cells, and collagen synthesis is one of the first things they scale back when energy is short." },
      { index: "03", title: "Synthesis", body: "With more energy available, fibroblasts increase production of collagen and elastin. Dermal density rises, and the skin above regains some of its ability to resist and recover from folding." },
    ],
    evidenceEyebrow: "The evidence",
    evidenceTitle: "What the controlled\ntrials actually found",
    evidenceIntro:
      "These are independent studies of red light on facial skin, not minara's own. They are cited because the wavelengths and protocols overlap with ours, and because you should be able to check the claims yourself.",
    evidence: [
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
    ],
    evidenceNote:
      "These trials tested other manufacturers' devices. They are evidence for the mechanism and for the wavelength range minara operates in. They are not measurements of the minara panel, and the figures above should not be read as results you will obtain from it.",
    wlEyebrow: "Why these wavelengths",
    wlTitle: "Depth is the\nwhole argument",
    depthTitle: "How deep each\nwavelength reaches",
    depthRedLabel: "Red light",
    depthNirLabel: "Near-infrared",
    depthAxis: "Approximate penetration depth in human tissue",
    depthNote:
      "Penetration depth varies with tissue type, skin characteristics and treatment conditions.",
    skinLayers: [
      { name: "Epidermis", range: "0.05 – 0.1 mm" },
      { name: "Dermis", range: "0.1 – 3 mm" },
      { name: "Subcutaneous", range: "3 – 20 mm" },
      { name: "Muscle", range: "20 mm +" },
    ],
    depths: [
      { nm: "630", group: "red", layer: "Surface skin", depth: "0.2 – 0.5 mm", reach: 0.17 },
      { nm: "660", group: "red", layer: "Upper dermis", depth: "0.5 – 2 mm", reach: 0.3 },
      { nm: "810", group: "nir", layer: "Mid to deep dermis", depth: "2 – 6 mm", reach: 0.47 },
      { nm: "850", group: "nir", layer: "Deep dermis", depth: "5 – 10 mm", reach: 0.62 },
      { nm: "940", group: "nir", layer: "Subcutaneous tissue", depth: "10 – 20 mm", reach: 0.82 },
      { nm: "1060", group: "nir", layer: "Muscle and deep tissue", depth: "15 – 30 mm +", reach: 1 },
    ],
    wavelengths: [
      ["630 nm", "Surface and upper dermis. The band most closely associated with tone, texture and collagen activity."],
      ["660 nm", "Reaches the fibroblast layer directly. The most studied wavelength for skin outcomes."],
      ["810 nm", "Deep soft tissue. Where the recovery and inflammation literature concentrates."],
      ["850 nm", "Denser tissue and joints, beyond the reach of visible red."],
      ["940 nm", "Extends the delivered spectrum with gentle thermal effect at depth."],
      ["1060 nm", "The panel's upper boundary. Broadens coverage rather than concentrating it."],
    ],
  },

  about: {
    eyebrow: "About",
    title: "Light, taken\nseriously",
    intro:
      "minara labs designs instruments that use clinical light to help skin renew itself. Designed in Saudi, made for the world.",
    missionEyebrow: "Our mission",
    mission:
      "To bring clinical light within reach of every home — so that caring for your skin no longer means a clinic appointment, a specialist, or a compromise.",
    missionBody: [
      "For decades, red light therapy lived in dermatology clinics and high-end spas: proven, effective, and out of reach. We exist to change where it lives.",
      "We build instruments precise enough to take the science seriously, and beautiful enough to stay out on your dresser rather than hidden in a drawer. Twenty minutes a day, in your own home, on your own schedule.",
    ],
    beliefsEyebrow: "What we believe",
    beliefsTitle: "Three things\nwe hold to",
    beliefs: [
      { index: "01", title: "Evidence over promises", body: "Every claim on this site traces back to published, peer-reviewed research. If the science does not support it, we do not say it — and we do not sell it." },
      { index: "02", title: "Beauty and precision together", body: "An instrument you use daily should be a pleasure to own. We design objects worthy of the space they live in, without ever trading looks for performance." },
      { index: "03", title: "Honest by design", body: "Real numbers with real tolerances. Clear pricing. A warranty we honour. If we would not accept it as customers, we do not offer it as a company." },
    ],
    promiseEyebrow: "Designed in Saudi",
    promiseTitle: "From here,\nfor everywhere",
    promiseBody:
      "minara is drawn, specified and refined in Saudi — proof that world-class wellness technology can begin here, not just arrive here. The panel is our first instrument. It will not be our last.",
    nextEyebrow: "What follows",
    nextTitle: "A growing family\nof instruments",
    nextBody:
      "The Cap and The Head Massager are in development now. Each will be announced when it is ready — and not a moment before.",
  },

  support: {
    eyebrow: "Support",
    title: "Support & Contact",
    intro: "Most questions are answered below. For anything else, our team reads every email personally.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is red light therapy and how does it work?", a: "Red light therapy uses specific wavelengths of light to stimulate mitochondrial function and increase cellular energy production. Our panel uses six clinically proven wavelengths, from 630 to 1060 nanometres, to deliver comprehensive benefits." },
      { q: "How long should I use the panel each day?", a: "Twenty minutes a day is the recommended session, depending on distance and your goals. Most people see the best results with consistent daily use. Speak with your healthcare provider for advice specific to you." },
      { q: "Is it safe for daily use?", a: "Yes. Red light therapy is non-invasive and has been studied extensively. Our panel produces zero EMF emissions and is designed for safe continuous operation. Follow the usage guidance and consult a healthcare professional if you are unsure." },
      { q: "What distance should I sit from the panel?", a: "The panel is calibrated for 0 to 12 inches from the skin. At 0 inches you receive 220 mW/cm² ±10% of therapeutic light. Adjust to suit your comfort and your goals." },
      { q: "Can I use it on any part of the body?", a: "Yes. The panel can be used on the face, skin, joints and muscle groups. The six-wavelength spectrum reaches different tissue depths, which makes it suitable for a range of applications." },
      { q: "How many wavelengths does it use?", a: "Six: 630 nm red, 660 nm deep red, 810 and 850 nm near-infrared, and 940 and 1060 nm far-infrared. Together they cover skin through to joint." },
      { q: "How long do the LEDs last?", a: "The panel is rated for more than 50,000 hours. That is over five years of continuous operation, or a lifetime of ordinary daily sessions." },
      { q: "Will it work with international outlets?", a: "Yes. The panel accepts AC 100–240 V at 50/60 Hz, so it works with electrical systems worldwide without an adapter." },
      { q: "What does IP20 protection mean?", a: "IP20 means the panel is protected against solid objects larger than 12.5 mm and requires protection from water. It is intended for indoor use in dry environments." },
      { q: "Can I see the panel before buying?", a: "We are an online studio, so the panel is not on display in a showroom yet. Every order is covered by a seven-day return window, so you can experience it at home with nothing at risk." },
    ],
    contactTitle: "Write to us",
    email: "Email",
    location: "Location",
    locationValue: "Saudi",
    locationNote: "Designed in Saudi",
    response: "Response time",
    responseValue: "24 to 48 hours",
    responseNote: "A person reads every message. No ticket numbers, no bots.",
    lookingFor: "We can help with",
    bullets: [
      "Orders, delivery and returns",
      "Product guidance and technical questions",
      "Distribution and partnership enquiries",
      "Collaboration and media enquiries",
    ],
  },
};
