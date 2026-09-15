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
    title: "Seven days,\nunopened",
    intro:
      "Saudi e-commerce law gives you seven days to change your mind, and we honour that in full. One condition, and we state it plainly: the panel must come back to us exactly as it left, sealed and completely unused.",
    updated: "Last updated September 2026",
    sections: [
      {
        heading: "What unopened means",
        body: [
          "The box must be sealed, with its original tape intact and unbroken. The panel must never have been powered on, and no accessory may have been removed from its wrapping.",
          "We are specific about this because a light therapy device is a personal item. Once a panel has been used against skin, we cannot responsibly sell it to somebody else, so we do not resell it at all.",
        ],
      },
      {
        heading: "Changed your mind",
        body: [
          "Write to us within seven days of delivery and we will arrange the return. You owe us no explanation.",
          "Return shipping is paid by you, as the regulations allow. Everything else comes back, and we do not charge a restocking fee.",
        ],
      },
      {
        heading: "If something is not right",
        body: [
          "This is different, and it is not limited to seven days. If your panel arrives faulty, damaged, or not as described, open it, test it, and tell us.",
          "We arrange the collection, we cover the shipping, and every riyal comes back to you. Your warranty covers faults that appear later. This is not generosity, it is simply how it should be.",
        ],
      },
      {
        heading: "How to return",
        list: [
          "Write to minaralabs@gmail.com with your order number, within seven days of delivery",
          "Confirm the box is sealed and the seal is unbroken. A photo helps",
          "Within 48 hours, we reply with collection details",
          "The moment your panel reaches us and we confirm it is sealed, your refund is on its way",
        ],
        note: "Refunds arrive within 5 to 14 days, depending on your bank.",
      },
      {
        heading: "Keep your invoice",
        body: [
          "Your electronic invoice is the key to both your return and your warranty. Keep it somewhere safe; we recommend two years.",
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
    title: "سبعة أيام،\nدون فتح",
    intro:
      "يمنحك نظام التجارة الإلكترونية في السعودية سبعة أيام لتغيير رأيك، ونحن نلتزم بذلك كاملاً. بشرط واحد نذكره بوضوح: أن يعود الجهاز كما خرج تماماً، مغلقاً بشريطه الأصلي ودون أي استخدام.",
    updated: "آخر تحديث سبتمبر 2026",
    sections: [
      {
        heading: "ما معنى غير مفتوح",
        body: [
          "أن يكون الصندوق مغلقاً بشريطه الأصلي سليماً دون قطع. وألا يكون الجهاز قد شُغِّل ولو مرة، وألا يكون أي ملحق قد أُخرج من غلافه.",
          "نحن محددون في هذه النقطة لأن جهاز العلاج بالضوء غرض شخصي. وبعد استخدامه على البشرة لا يمكننا بيعه لشخص آخر بضمير مرتاح، ولذلك لا نعيد بيعه إطلاقاً.",
        ],
      },
      {
        heading: "عند تغيير الرأي",
        body: [
          "تكفي مراسلتنا خلال سبعة أيام من الاستلام وسنرتب الإرجاع. ولا حاجة لأي تفسير.",
          "تكاليف شحن الإرجاع على العميل، وهو ما تتيحه الأنظمة. وما عدا ذلك يعود كاملاً، ولا نفرض أي رسوم إعادة تخزين.",
        ],
      },
      {
        heading: "إن لم يكن شيء ما على ما يرام",
        body: [
          "هذه حالة مختلفة، وغير مقيدة بسبعة أيام. فإذا وصل الجهاز بعيب أو تالفاً أو مخالفاً للوصف، فيمكن فتحه وتجربته وإبلاغنا.",
          "نرتب نحن الاستلام، ونتحمل الشحن، ويعود كل ريال. والضمان يغطي الأعطال التي تظهر لاحقاً. هذا ليس كرماً منا، بل ما ينبغي أن يكون.",
        ],
      },
      {
        heading: "طريقة الإرجاع",
        list: [
          "مراسلتنا على minaralabs@gmail.com مع رقم الطلب، خلال سبعة أيام من الاستلام",
          "التأكد من أن الصندوق مغلق وشريطه سليم، وصورة تساعد في ذلك",
          "خلال 48 ساعة، نرد بتفاصيل الاستلام",
          "ولحظة وصول الجهاز إلينا والتأكد من أنه مغلق، يكون المبلغ في طريقه إليك",
        ],
        note: "يصل المبلغ خلال 5 إلى 14 يوماً حسب البنك.",
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
      body: "يسعدنا الرد على أي سؤال قبل الشراء. الإجابة الصادقة الآن أثمن عندنا من عملية بيع مؤسفة.",
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
          "Connection to a supply outside AC 100 to 240 V, 50/60 Hz",
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
    updated: "آخر تحديث يوليو 2026",
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
          "لا نحيل أحداً إلى نموذج ونتركه. مراسلتنا بشرح ما يحدث تكفي، ونرد خلال 24 إلى 48 ساعة بما نقترح فعله.",
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
          "الاستخدام خارج النطاق المحدد من −20 إلى 50 درجة مئوية، أو رطوبة من 30٪ إلى 70٪",
          "التوصيل بمصدر كهرباء خارج نطاق 100 إلى 240 فولت، 50/60 هرتز",
          "الإصلاح أو التعديل أو فتح الهيكل من قِبل أي جهة غيرنا",
          "علامات الاستخدام الشكلية التي لا تؤثر على الأداء",
        ],
        note: "إذا رأينا أن العطل خارج نطاق الضمان، نوضح السبب كتابةً، ونعرض إصلاحاً بمقابل بدلاً من مجرد الرفض.",
      },
      {
        heading: "ما بعد الضمان",
        body: [
          "الجهاز مصنّف لأكثر من 50,000 ساعة تشغيل. واثنا عشر شهراً من جلسات يومية مدتها عشرون دقيقة تستهلك نحو واحد بالمئة من ذلك.",
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
