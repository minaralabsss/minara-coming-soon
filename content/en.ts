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
      "Precision light technology, designed in Saudi for skin that is looked after rather than fussed over.",
    explore: "Explore",
    policies: "Policies",
    connect: "Connect",
    returns: "Returns",
    warranty: "Warranty",
    rights: "All rights reserved. Designed in Saudi.",
    maroofLabel: "Verified on Maroof",
    crLabel: "Commercial Register",
  },

  modal: {
    eyebrow: "minara labs",
    title: "Light, made\nfor the home",
    body: "Occasional letters on skin, light and what we are building next. Nothing else.",
    continue: "Continue to site",
    origin: "Designed in Saudi",
    close: "Close",
  },

  cart: {
    title: "Cart",
    empty: "Your cart is empty.",
    subtotal: "Subtotal",
    checkout: "Checkout",
    checkoutReady: "Checkout",
    updating: "Updating…",
    note: "Secure card payment. mada and international cards accepted.",
    taxNote: "Delivery details on the next step. Free delivery within Saudi Arabia.",
    remove: "Remove",
    close: "Close cart",
  },

  form: {
    placeholder: "your@email.com",
    submit: "Subscribe",
    helper: "Occasional letters on skin, light and new instruments",
    success: "Welcome to minara labs",
    successBody: "Look out for our next letter",
    sending: "Sending",
  },

  buy: {
    soldOut: "Sold out",
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

  home: {
    eyebrow: "",
    title: "Where the science of light\nmeets skincare.",
    intro:
      "Red and near-infrared light, at the wavelengths studied for collagen and skin renewal. Twenty minutes. At home. On your own schedule.",
    whyEyebrow: "Why it exists",
    whyStatement:
      "Serums work on the surface. Collagen is made underneath it. minara reaches that layer with red light. Its longest wavelength, 1060 nanometres, carries further again, into muscle and deep tissue.",
    faceEyebrow: "Skin",
    faceTitle: "Where the evidence\nis strongest",
    faceBody: [
      "Facial skin is where light therapy has been studied most closely. The cells that produce collagen sit beneath the surface, and at 630 and 660 nanometres red light reaches them directly.",
      "Collagen, elasticity, fine lines, radiance. Gradual and cumulative, which is why the panel was made for a routine rather than an occasion.",
    ],
    faceFrame: "Facial session — in use",
    scienceEyebrow: "The technology",
    scienceTitle: "Light your cells\nalready know how to use",
    scienceBody:
      "Red light is visible. Near-infrared is not, and interacts with tissue at greater depths. Both have been studied for decades for the way they interact with the natural processes that produce collagen and renew skin.",
    stats: [
      { value: "1060", unit: "nanometres", note: "The upper reach of the panel. Six wavelengths from 630 nm up, covering surface skin through to deep tissue" },
      { value: "20", unit: "minutes", note: "A single session, at a distance you choose" },
      { value: "50,000", unit: "hours", note: "Rated life. At four sessions a week, a lifetime of use rather than a few years" },
    ],
    objectEyebrow: "The object",
    objectTitle: "An object first,\nan instrument second",
    objectBody:
      "A device you are meant to use often has to earn its place in the room. minara is drawn as an object first: a clean steel body, no branding across the face, and a display that tells you what you need and nothing more.",
    objectSpecs: [
      ["Emitters", "70 high-efficiency LEDs"],
      ["Rated life", "50,000+ hours"],
      ["Body", "Cold-rolled SPCC steel"],
    ],
    objectFrame: "Emitter array — macro",
    effectEyebrow: "The effect",
    effectTitle: "What a consistent\nroutine supports",
    effects: [
      { index: "01", title: "Collagen", body: "Fibroblasts in the dermis respond to red light by supporting the production of collagen and elastin, the two proteins that keep skin firm." },
      { index: "02", title: "Fine lines and wrinkles", body: "Supporting the density of the layer beneath the surface helps improve the appearance of fine lines and wrinkles over time, most visibly around the eyes, mouth and forehead." },
      { index: "03", title: "Skin texture", body: "Consistent use is associated with smoother-looking skin and a more refined, more even surface." },
      { index: "04", title: "Radiance", body: "A brighter, more refreshed-looking complexion — the change most people notice before any other." },
      { index: "05", title: "Elasticity", body: "Supporting the skin's natural collagen processes helps maintain the appearance of firmer, more elastic skin." },
      { index: "06", title: "Hair and wellness", body: "The same wavelengths are used in hair-care routines and in recovery routines after physical activity. Supporting applications of one technology." },
    ],
  },

  product: {
    eyebrow: "The collection",
    title: "Instruments for\nconsidered skin",
    intro:
      "We build a small number of things, slowly. Each one is specified before it is designed, and released only once it does what the research says it should.",
    available: "Available",
    development: "In development",
    devNote:
      "Announced when they are ready and not before. Subscribe on any page and you will hear about each release first.",
    forthcoming: [
      { name: "The Cap", tagline: "Scalp and hair routine", note: "In development" },
      { name: "The Head Massager", tagline: "Scalp stimulation and calm", note: "In development" },
    ],
    panelTagline: "For the face first, then the body",
    panelSummary:
      "Made first for the face — collagen, fine lines, texture, radiance — then sized for the whole body. Six wavelengths across seventy emitters.",
  },

  panel: {
    tagline: "For the face first, then the body",
    name: "The Panel",
    summary:
      "Six carefully selected wavelengths across seventy emitters. Made first for the face — collagen, fine lines, texture and radiance — and sized to reach the whole body when you want more.",
    quickSpecs: [
      ["Session", "20–30 minutes per zone, at 0–12 in"],
      ["Routine", "Four days a week, minimum"],
      ["Wavelengths", "630 / 660 / 810 / 850 / 940 / 1060 nm"],
      ["Rated life", "50,000+ hours"],
    ],
    shipping:
      "Designed in Saudi. Runs on AC 100–240 V, so it works anywhere without an adapter.",
    returnsLink: "7-day returns",
    warrantyLink: "1-year warranty",
    gallery: [
      "Three-quarter view",
      "Side profile",
      "In use — facial session",
      "Emitter array — macro",
    ],
    faceEyebrow: "For the face",
    faceTitle: "Collagen is made\nbelow the surface",
    faceBody: [
      "Fine lines are a structural change, not a surface one. As collagen and elastin production slows, the layer beneath the surface — the dermis — loses density, and the skin above it creases and holds the crease.",
      "Topicals work above that layer. Red light at 630 and 660 nanometres passes into it, and is absorbed by the fibroblasts that produce collagen in the first place. With more energy available to them, they are supported in producing more.",
      "The change is gradual and cumulative, which is the honest version. Most published protocols run several sessions a week over eight to twelve weeks before a difference is clearly visible, and individual results vary.",
    ],
    wlEyebrow: "Wavelength selection",
    wlTitle: "Six, because six\ncould be justified",
    wavelengths: [
      { nm: "630", band: "Visible red", note: "Surface skin. The band most closely associated with tone, surface texture and collagen activity." },
      { nm: "660", band: "Visible red", note: "Upper dermis, where fibroblasts sit. The most studied wavelength for skin outcomes." },
      { nm: "810", band: "Near-infrared", note: "Mid to deep dermis. Invisible to the eye, and central to the recovery literature." },
      { nm: "850", band: "Near-infrared", note: "Deep dermis. Reaches denser tissue that visible red light does not." },
      { nm: "940", band: "Near-infrared", note: "Subcutaneous tissue. Extends the delivered spectrum with a gentle thermal effect at depth." },
      { nm: "1060", band: "Near-infrared", note: "Muscle and deep tissue. The upper boundary of the panel, broadening coverage rather than concentrating it." },
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
        ["Electromagnetic field", "Low, per manufacturer specification"],
        ["Operating temperature", "−20 °C to 50 °C"],
        ["Relative humidity", "30% to 70%"],
        ["Intended use", "Indoor, dry environments"],
      ]],
    ],
    closeTitle: "Twenty minutes,\nfour days a week",
    closeBody:
      "Over a year that is a fraction of one percent of the panel's rated life. It is built for the long version of this, not the trial.",
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
    title: "How light reaches\nwhat creams cannot",
    intro:
      "Fine lines are a structural change. Understanding why is the fastest route to understanding what red light can and cannot do about them.",
    collagenTitle: "Collagen, and why\nit stops arriving",
    collagenBody: [
      "Collagen is the protein that gives skin its density, and elastin is what lets it return to shape. Both are produced by fibroblasts living in the dermis, the layer beneath the surface you can see.",
      "From the mid-twenties onward, fibroblast output declines gradually. The dermis thins, loses its scaffolding, and the skin above begins to fold along the lines your expressions use most. Those folds stop springing back. That is a wrinkle.",
      "Anything applied to the surface is working several layers above where the change is happening. That is not a criticism of skincare, it is a description of where it can reach.",
    ],
    collagenFrame: "Dermal structure — diagram",
    mechEyebrow: "Mechanism",
    mechTitle: "One mechanism,\nsix depths",
    mechanism: [
      { index: "01", title: "Absorption", body: "All six wavelengths are absorbed within the energy-producing structures of the cell. That part does not change across the spectrum. What changes is how far into tissue each wavelength travels before it gets there." },
      { index: "02", title: "Energy", body: "That absorption is understood to increase the cell's available energy. Fibroblasts are metabolically expensive cells, and collagen synthesis is one of the first things they scale back when energy is short." },
      { index: "03", title: "Synthesis", body: "Visible red at 630 and 660 nanometres reaches the surface and upper dermis, where fibroblasts sit. With more energy available, they are supported in producing collagen and elastin — which is why the skin evidence concentrates in this band." },
      { index: "04", title: "Depth", body: "Near-infrared at 810, 850, 940 and 1060 nanometres is invisible to the eye and interacts with tissue further down: deeper dermis, subcutaneous tissue, and muscle. The same absorption, applied to layers visible red does not reach." },
    ],
    evidenceEyebrow: "The evidence",
    evidenceTitle: "What the controlled\ntrials actually found",
    evidenceIntro:
      "These are independent studies of red light on facial skin, not minara's own. They are cited because the wavelengths and protocols overlap with ours, and because you should be able to check the claims yourself.",
    evidence: [
      {
        headline: "Density beneath the surface rose 47.7% over twelve weeks",
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
    depthAxis: "Approximate interaction depth in human tissue",
    depthNote:
      "Approximate interaction depth varies according to tissue composition, wavelength, and individual factors.",
    skinLayers: [
      { name: "Surface skin", range: "0.05 – 0.1 mm" },
      { name: "Dermis", range: "0.1 – 3 mm" },
      { name: "Subcutaneous tissue", range: "3 – 20 mm" },
      { name: "Muscle and deep tissue", range: "20 mm +" },
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
      ["630 nm", "Surface skin. The band most closely associated with tone, surface texture and collagen activity."],
      ["660 nm", "Upper dermis, where fibroblasts sit. The most studied wavelength for skin outcomes."],
      ["810 nm", "Mid to deep dermis. Invisible near-infrared, where the recovery literature concentrates."],
      ["850 nm", "Deep dermis. Reaches denser tissue that visible red light does not."],
      ["940 nm", "Subcutaneous tissue. Extends the delivered spectrum with a gentle thermal effect at depth."],
      ["1060 nm", "Muscle and deep tissue. The panel's upper boundary, broadening coverage rather than concentrating it."],
    ],
  },

  about: {
    eyebrow: "About",
    title: "Light, taken\nseriously",
    intro:
      "minara labs designs instruments that use red and near-infrared light to support the way skin renews itself. Designed in Saudi, made for the world.",
    missionEyebrow: "Our mission",
    mission:
      "To bring considered light therapy within reach of every home — so that caring for your skin no longer means a clinic appointment, a specialist, or a compromise.",
    missionBody: [
      "For decades, red light therapy lived in dermatology clinics and high-end spas: studied, refined, and out of reach. We exist to change where it lives.",
      "We build instruments precise enough to take the science seriously, and beautiful enough to stay out on your dresser rather than hidden in a drawer. Twenty minutes, in your own home, on your own schedule.",
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
      { q: "What is red light therapy?", a: "Red light therapy uses specific wavelengths of red and near-infrared light, which have been studied for the way they interact with natural cellular processes — among them the processes that produce collagen and renew skin. Red light is visible to the eye. Near-infrared is not, and interacts with tissue at greater depths. Our panel uses six wavelengths, from 630 to 1060 nanometres." },
      { q: "What can I expect for my skin?", a: "With consistent use, some people may notice improvements in the appearance of fine lines, skin texture, elasticity and radiance over time. Change is gradual: most published protocols run eight to twelve weeks before a difference is clearly visible. Individual results vary depending on personal factors and consistency of use." },
      { q: "How often should I use it?", a: "A minimum of four days a week, 20 to 30 minutes per treatment zone, at the distance given in the manual. New users should build up to the full session duration gradually rather than starting at the maximum. Do not exceed the daily threshold stated in the manual." },
      { q: "Can I use it on my scalp and hair?", a: "Yes. Red and near-infrared light are also used in hair-care routines, where they may support a healthy scalp environment and the appearance of fuller, healthier-looking hair. Direct the same session at the scalp. It is a supporting application of the technology, not a treatment for hair loss." },
      { q: "Can I use it for recovery?", a: "Near-infrared light interacts with tissue at greater depths, and is commonly used as part of a wellness routine to support muscle relaxation and general comfort after physical activity. Keep it as part of a routine rather than a remedy." },
      { q: "Can I use it with my skincare products?", a: "minara can be used alongside most skincare products. When introducing a new product, perform a patch test and allow it to dry completely before your session. If you use prescription topicals or anything that may increase light sensitivity, consult your dermatologist or physician first." },
      { q: "Is it safe to use regularly?", a: "Red light therapy is non-invasive and has been widely studied. Follow the recommended distance and session duration, wear the supplied eye protection, and never stare directly into the LEDs. If you are photosensitive, taking medication that increases light sensitivity, pregnant, or managing a medical condition, speak with a healthcare professional first. Stop use if any unusual discomfort occurs." },
      { q: "How many wavelengths does it use?", a: "Six: 630 and 660 nm visible red, and 810, 850, 940 and 1060 nm near-infrared. Red light works at the surface and just beneath it, where the skin findings concentrate. Near-infrared is invisible to the eye and interacts with tissue at greater depths." },
      { q: "What distance should I sit from the panel?", a: "The panel is calibrated for 0 to 12 inches from the skin. At 0 inches the measured irradiance is 220 mW/cm² ±10%. Closer means a stronger dose in less time; further means a gentler one across a wider area." },
      { q: "How long do the LEDs last?", a: "The panel is rated for more than 50,000 hours — a lifetime of ordinary sessions rather than a few years of them." },
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
