export type Locale = "en" | "ar";

export type PolicySection = {
  heading: string;
  body?: string[];
  list?: string[];
  note?: string;
};

export type Policy = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
  closing?: { heading: string; body: string; contact: string };
};

/* ------------------------------------------------------------------ */
/*  RETURNS                                                            */
/* ------------------------------------------------------------------ */

export const returns: Record<Locale, Policy> = {
  en: {
    eyebrow: "Returns",
    title: "Seven days\nto fall in love",
    intro:
      "Choosing minara should feel effortless. Live with the panel for a full week — in your light, your bathroom, your morning ritual. If it is not everything you hoped, we take it back. Simply, and without questions.",
    updated: "Last updated July 2026",
    sections: [
      {
        heading: "A week that belongs to you",
        body: [
          "From the day your panel arrives, you have seven days to decide. Use it. Feel it. Let it earn its place.",
          "If you choose to return it, you owe us no explanation. Changing your mind is reason enough.",
        ],
      },
      {
        heading: "If something is not right",
        body: [
          "Should your panel arrive with a fault, or differ from what we promised, the return costs you nothing at all. We arrange the collection, and every riyal comes back to you — the delivery included.",
          "This is not generosity. It is simply how it should be.",
        ],
      },
      {
        heading: "Returning is effortless",
        list: [
          "Write to minaralabs@gmail.com with your order number",
          "Tell us briefly what happened — a photo helps if something is wrong",
          "Within 48 hours, we reply with collection details",
          "The moment your panel reaches us, your refund is on its way",
        ],
        note: "Refunds arrive within 5 to 14 days, depending on your bank. Please return the panel in its original condition, with its packaging and accessories.",
      },
      {
        heading: "Keep your invoice",
        body: [
          "Your electronic invoice is the key to both your return and your warranty. Keep it somewhere safe — we recommend two years.",
        ],
      },
    ],
    closing: {
      heading: "Still deciding?",
      body: "Ask us anything before you buy. An honest answer now is worth more to us than a sale you regret.",
      contact: "minaralabs@gmail.com",
    },
  },

  ar: {
    eyebrow: "الإرجاع",
    title: "سبعة أيام\nمعه",
    intro:
      "اختيار منارا ينبغي أن يكون بلا تردد. أسبوع كامل مع الجهاز — في إضاءتك، وغرفتك، وطقس صباحك. وإن لم يكن كل ما توقعته، نستعيده. ببساطة، وبلا أسئلة.",
    updated: "آخر تحديث يوليو ٢٠٢٦",
    sections: [
      {
        heading: "أسبوع ملكك وحدك",
        body: [
          "من يوم وصول الجهاز، أمامك سبعة أيام للقرار. استخدام، وتجربة، ووقت كافٍ ليستحق مكانه.",
          "وإن كان القرار هو الإرجاع، فلا حاجة لأي تفسير. تغيير الرأي سببٌ كافٍ.",
        ],
      },
      {
        heading: "إن لم يكن شيء ما على ما يرام",
        body: [
          "إذا وصل الجهاز بعيب، أو مختلفاً عمّا وعدنا به، فالإرجاع لا يكلف شيئاً على الإطلاق. نرتب نحن الاستلام، ويعود كل ريال — حتى رسوم التوصيل.",
          "هذا ليس كرماً منا. هذا ببساطة ما ينبغي أن يكون.",
        ],
      },
      {
        heading: "الإرجاع بلا عناء",
        list: [
          "مراسلتنا على minaralabs@gmail.com مع رقم الطلب",
          "شرح مختصر لما حدث — وصورة تساعد إن كان هناك خلل",
          "خلال ٤٨ ساعة، نرد عليك بتفاصيل الاستلام",
          "ولحظة وصول الجهاز إلينا، يكون المبلغ في طريقه إليك",
        ],
        note: "يصل المبلغ خلال ٥ إلى ١٤ يوماً حسب البنك. ونرجو إعادة الجهاز بحالته الأصلية مع تغليفه وملحقاته.",
      },
      {
        heading: "الاحتفاظ بالفاتورة",
        body: [
          "الفاتورة الإلكترونية هي مفتاح الإرجاع والضمان معاً. ويُنصح بحفظها في مكان آمن لمدة سنتين.",
        ],
      },
    ],
    closing: {
      heading: "ما زال هناك تردد؟",
      body: "لا تتردد في سؤالنا عن أي شيء قبل الشراء. الإجابة الصادقة الآن أثمن عندنا من عملية بيع مؤسفة.",
      contact: "minaralabs@gmail.com",
    },
  },
};

/* ------------------------------------------------------------------ */
/*  WARRANTY                                                           */
/* ------------------------------------------------------------------ */

export const warranty: Record<Locale, Policy> = {
  en: {
    eyebrow: "Warranty",
    title: "Covered for\na full year",
    intro:
      "Every minara panel carries a twelve-month warranty against manufacturing defects, starting the day it arrives. If something was wrong with how it was made, that is ours to put right.",
    updated: "Last updated July 2026",
    sections: [
      {
        heading: "What the warranty covers",
        body: [
          "For twelve months from delivery, we cover any fault arising from the manufacture of the panel itself. If a defect appears in normal use, we repair or replace the unit at no cost to you.",
        ],
        list: [
          "LED emitters that fail or dim prematurely",
          "Faults in the driver, wiring or internal electronics",
          "Display or control faults",
          "Defects in the housing, assembly or finish",
          "Any failure to perform to the specifications published on this site",
        ],
      },
      {
        heading: "How we handle a claim",
        body: [
          "We do not send you away with a form. Email us, describe what is happening, and we will tell you within 24 to 48 hours what we propose to do.",
          "Where a repair is possible we repair. Where it is not, we replace. Collection and return shipping on a valid warranty claim are ours to pay.",
        ],
      },
      {
        heading: "What it does not cover",
        body: [
          "The warranty covers how the panel was built, not what happens to it afterwards. It does not extend to:",
        ],
        list: [
          "Accidental damage, drops or impact",
          "Liquid exposure. The panel is rated IP20 and is intended for indoor, dry environments",
          "Use outside the stated range of −20 °C to 50 °C, or 30% to 70% relative humidity",
          "Connection to a supply outside AC 100–240 V, 50/60 Hz",
          "Repairs, modifications or opening of the housing by anyone other than us",
          "Normal cosmetic wear that does not affect performance",
        ],
        note: "If we believe a fault falls outside the warranty, we will explain why, in writing, and offer you a paid repair rather than simply declining.",
      },
      {
        heading: "Beyond the warranty",
        body: [
          "The panel is rated for more than 50,000 hours. Twelve months of daily twenty-minute sessions uses roughly one percent of that.",
          "The warranty is twelve months because that is when manufacturing faults appear. The panel is built to last considerably longer, and we will continue to support it with parts and service well after the warranty ends.",
        ],
      },
      {
        heading: "Your statutory rights",
        body: [
          "This warranty is offered in addition to your rights under Saudi consumer protection law and the E-Commerce Law. Nothing here reduces them.",
        ],
      },
    ],
    closing: {
      heading: "Something wrong?",
      body: "Tell us early. Most issues are simpler to fix than people expect, and we would rather hear about a small problem than a large one.",
      contact: "minaralabs@gmail.com",
    },
  },

  ar: {
    eyebrow: "الضمان",
    title: "مضمون\nلسنة كاملة",
    intro:
      "كل جهاز من منارا يحمل ضماناً لمدة اثني عشر شهراً ضد عيوب التصنيع، يبدأ من يوم وصوله إليك. وإذا كان الخلل في طريقة تصنيعه، فهذه مسؤوليتنا نحن.",
    updated: "آخر تحديث يوليو ٢٠٢٦",
    sections: [
      {
        heading: "ما يغطيه الضمان",
        body: [
          "لمدة اثني عشر شهراً من التسليم، نغطي أي عطل ناتج عن تصنيع الجهاز نفسه. وإذا ظهر عيب أثناء الاستخدام الطبيعي، نصلح الجهاز أو نستبدله دون أي تكلفة.",
        ],
        list: [
          "لمبات LED تتعطل أو يخفت ضوؤها قبل أوانه",
          "أعطال في المحوّل أو الأسلاك أو الإلكترونيات الداخلية",
          "أعطال الشاشة أو أزرار التحكم",
          "عيوب في الهيكل أو التجميع أو التشطيب",
          "أي قصور عن المواصفات المنشورة في هذا الموقع",
        ],
      },
      {
        heading: "كيف نتعامل مع طلب الضمان",
        body: [
          "لا نحيل أحداً إلى نموذج ونتركه. مراسلتنا بشرح ما يحدث تكفي، ونرد خلال ٢٤ إلى ٤٨ ساعة بما نقترح فعله.",
          "إن كان الإصلاح ممكناً نُصلح، وإن لم يكن نستبدل. وشحن الاستلام والإرجاع في طلب الضمان الصحيح على حسابنا نحن.",
        ],
      },
      {
        heading: "ما لا يغطيه الضمان",
        body: [
          "الضمان يغطي طريقة تصنيع الجهاز، لا ما يحدث له بعد ذلك. ولا يشمل:",
        ],
        list: [
          "الضرر العَرَضي أو السقوط أو الصدمات",
          "التعرض للسوائل. الجهاز مصنّف IP20 ومخصص للأماكن الداخلية الجافة",
          "الاستخدام خارج النطاق المحدد من −٢٠ إلى ٥٠ درجة مئوية، أو رطوبة من ٣٠٪ إلى ٧٠٪",
          "التوصيل بمصدر كهرباء خارج نطاق ١٠٠ إلى ٢٤٠ فولت، ٥٠/٦٠ هرتز",
          "الإصلاح أو التعديل أو فتح الهيكل من قِبل أي جهة غيرنا",
          "علامات الاستخدام الشكلية التي لا تؤثر على الأداء",
        ],
        note: "إذا رأينا أن العطل خارج نطاق الضمان، نوضح السبب كتابةً، ونعرض إصلاحاً بمقابل بدلاً من مجرد الرفض.",
      },
      {
        heading: "ما بعد الضمان",
        body: [
          "الجهاز مصنّف لأكثر من ٥٠٬٠٠٠ ساعة تشغيل. واثنا عشر شهراً من جلسات يومية مدتها عشرون دقيقة تستهلك نحو واحد بالمئة من ذلك.",
          "مدة الضمان سنة لأن عيوب التصنيع تظهر في هذه الفترة. أما الجهاز فمبني ليعمل أطول من ذلك بكثير، وسنواصل دعمه بقطع الغيار والصيانة بعد انتهاء الضمان.",
        ],
      },
      {
        heading: "حقوقك النظامية",
        body: [
          "هذا الضمان يُقدَّم إضافةً إلى حقوقك بموجب نظام حماية المستهلك ونظام التجارة الإلكترونية في المملكة. ولا شيء هنا ينتقص منها.",
        ],
      },
    ],
    closing: {
      heading: "فيه شي غير طبيعي؟",
      body: "أخبرنا مبكراً. أغلب المشاكل أسهل في الحل مما يتوقع الناس، ونفضّل أن نسمع عن مشكلة صغيرة بدل كبيرة.",
      contact: "minaralabs@gmail.com",
    },
  },
};
