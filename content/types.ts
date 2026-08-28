export type Stat = { value: string; unit: string; note: string };
export type Numbered = { index: string; title: string; body: string };
export type Row = [string, string];

export type DepthBand = {
  nm: string;
  /** "red" | "nir" — drives the diagram colour ramp. */
  group: "red" | "nir";
  layer: string;
  depth: string;
  /** 0..1 fraction of the diagram height the beam reaches. */
  reach: number;
};

export type IncludedItem = { img: string; label: string };

export type SiteContent = {
  dir: "ltr" | "rtl";
  nav: {
    links: { href: string; label: string }[];
    cart: string;
    menu: string;
    switchLabel: string;
    switchTo: string;
    home: string;
  };
  footer: {
    blurb: string;
    explore: string;
    policies: string;
    connect: string;
    returns: string;
    warranty: string;
    rights: string;
    /** Label for the unified national number (الرقم الموحد). */
    maroofLabel: string;
    /** Label for the commercial registration number (السجل التجاري). */
    unifiedLabel: string;
  };
  modal: {
    eyebrow: string;
    title: string;
    body: string;
    continue: string;
    origin: string;
    close: string;
  };
  cart: {
    title: string;
    empty: string;
    subtotal: string;
    checkout: string;
    checkoutReady: string;
    updating: string;
    note: string;
    taxNote: string;
    remove: string;
    close: string;
  };
  form: {
    placeholder: string;
    submit: string;
    helper: string;
    success: string;
    successBody: string;
    sending: string;
  };
  buy: { addToCart: string; viewDetails: string; fullDetails: string; launchOffer: string; launchNote: string; soldOut: string };
  checkout: {
    eyebrow: string;
    title: string;
    intro: string;
    saudiOnly: string;
    name: string;
    namePh: string;
    email: string;
    phone: string;
    phonePh: string;
    province: string;
    provincePh: string;
    city: string;
    cityPh: string;
    cityLocked: string;
    shortAddress: string;
    shortAddressPh: string;
    shortAddressHelp: string;
    address: string;
    addressPh: string;
    notes: string;
    notesPh: string;
    optional: string;
    summary: string;
    qty: string;
    delivery: string;
    free: string;
    total: string;
    pay: string;
    working: string;
    errorGeneric: string;
    errorFields: string;
    testMode: string;
    back: string;
  };
  order: {
    eyebrow: string;
    title: string;
    body: string;
    refLabel: string;
    itemsLabel: string;
    galleryLabel: string;
    next: string[];
    contact: string;
    home: string;
  };
  /** Product display names, keyed by slug. Add a key per new product. */
  productNames: Record<string, string>;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    whyEyebrow: string;
    whyStatement: string;
    faceEyebrow: string;
    faceTitle: string;
    faceBody: string[];
    faceFrame: string;
    scienceEyebrow: string;
    scienceTitle: string;
    scienceBody: string;
    stats: Stat[];
    objectEyebrow: string;
    objectTitle: string;
    objectBody: string;
    objectSpecs: Row[];
    objectFrame: string;
    effectEyebrow: string;
    effectTitle: string;
    effects: Numbered[];
  };
  product: {
    eyebrow: string;
    title: string;
    intro: string;
    available: string;
    development: string;
    devNote: string;
    forthcoming: { name: string; tagline: string; note: string }[];
    panelTagline: string;
    panelSummary: string;
  };
  panel: {
    tagline: string;
    name: string;
    summary: string;
    quickSpecs: Row[];
    shipping: string;
    returnsLink: string;
    warrantyLink: string;
    gallery: string[];
    faceEyebrow: string;
    faceTitle: string;
    faceBody: string[];
    wlEyebrow: string;
    wlTitle: string;
    wavelengths: { nm: string; band: string; note: string }[];
    specsEyebrow: string;
    specs: [string, Row[]][];
    closeTitle: string;
    closeBody: string;
    includedEyebrow: string;
    includedTitle: string;
    included: IncludedItem[];
    inUseAlt: string;
    sideAlt: string;
    emittersAlt: string;
  };
  science: {
    eyebrow: string;
    title: string;
    intro: string;
    collagenTitle: string;
    collagenBody: string[];
    collagenFrame: string;
    mechEyebrow: string;
    mechTitle: string;
    mechanism: Numbered[];
    evidenceEyebrow: string;
    evidenceTitle: string;
    evidenceIntro: string;
    evidence: {
      headline: string;
      detail: string;
      cite: string;
      href: string;
      ref: string;
    }[];
    evidenceNote: string;
    wlEyebrow: string;
    wlTitle: string;
    wavelengths: Row[];
    depthTitle: string;
    depthRedLabel: string;
    depthNirLabel: string;
    depthAxis: string;
    depthNote: string;
    skinLayers: { name: string; range: string }[];
    depths: DepthBand[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    missionEyebrow: string;
    mission: string;
    missionBody: string[];
    beliefsEyebrow: string;
    beliefsTitle: string;
    beliefs: Numbered[];
    promiseEyebrow: string;
    promiseTitle: string;
    promiseBody: string;
    nextEyebrow: string;
    nextTitle: string;
    nextBody: string;
  };
  support: {
    eyebrow: string;
    title: string;
    intro: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    contactTitle: string;
    email: string;
    location: string;
    locationValue: string;
    locationNote: string;
    response: string;
    responseValue: string;
    responseNote: string;
    lookingFor: string;
    bullets: string[];
  };
};
