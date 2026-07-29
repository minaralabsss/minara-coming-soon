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
    title: "Seven days\nto be certain",
    intro:
      "We would rather you were sure than merely committed. Every panel comes with a full seven-day return window from the day it reaches you, exactly as Saudi law provides, and we do not make it difficult.",
    updated: "Last updated July 2026",
    sections: [
      {
        heading: "Your right to return",
        body: [
          "Under the Saudi E-Commerce Law you may cancel and return your order within seven days of receiving it. You do not need to explain why.",
          "If the panel arrived faulty, did not match what we described, or was sent to you in error, the return costs you nothing at all. We arrange collection and refund you in full, including the original delivery charge.",
        ],
      },
      {
        heading: "If you simply changed your mind",
        body: [
          "That is a legitimate reason and we honour it. Return the panel within seven days in its original condition, complete with its packaging and accessories, and we will refund the purchase price.",
          "Return shipping in this case is arranged by you, or by us at a cost quoted before collection.",
        ],
      },
      {
        heading: "How to start a return",
        list: [
          "Email minaralabs@gmail.com with your order number",
          "Tell us briefly what happened. A photograph helps if there is a fault",
          "We reply within 24 to 48 hours with collection details",
          "Once the panel reaches us, your refund is issued to the original payment method",
        ],
        note: "Refunds typically appear within 5 to 14 days depending on your bank.",
      },
      {
        heading: "Keep your invoice",
        body: [
          "Your electronic invoice is your proof of purchase and the basis of both your return rights and your warranty. We recommend keeping it for two years.",
        ],
      },
      {
        heading: "If we cannot agree",
        body: [
          "We would rather resolve things directly, and almost always do. If we cannot, you are entitled to raise the matter with the Saudi Ministry of Commerce through the Balagh Tijari application or by calling 1900.",
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
    title: "سبعة أيام\nلتطمئن",
    intro:
      "نفضّل أن تكون واثقاً لا مجرد ملتزم. كل جهاز يأتي بفترة إرجاع كاملة مدتها سبعة أيام من يوم وصوله إليك، تماماً كما ينص النظام السعودي، ولا نُصعّب الأمر عليك.",
    updated: "آخر تحديث يوليو ٢٠٢٦",
    sections: [
      {
        heading: "حقك في الإرجاع",
        body: [
          "بموجب نظام التجارة الإلكترونية السعودي، يحق لك فسخ العقد وإرجاع طلبك خلال سبعة أيام من استلامه. ولست مضطراً لتوضيح السبب.",
          "وإذا وصلك الجهاز به عيب، أو لم يطابق ما وصفناه، أو أُرسل إليك بالخطأ، فإن الإرجاع لا يكلفك شيئاً على الإطلاق. نتولى نحن ترتيب الاستلام ونعيد لك المبلغ كاملاً، بما في ذلك رسوم التوصيل الأصلية.",
        ],
      },
      {
        heading: "إذا غيّرت رأيك فقط",
        body: [
          "هذا سبب مشروع ونحترمه. أعد الجهاز خلال سبعة أيام بحالته الأصلية، مع تغليفه وملحقاته، ونعيد لك قيمة الشراء.",
          "شحن الإرجاع في هذه الحالة يكون على عاتقك، أو نتولاه نحن بتكلفة نوضحها لك قبل الاستلام.",
        ],
      },
      {
        heading: "كيف تبدأ الإرجاع",
        list: [
          "أرسل بريداً إلى minaralabs@gmail.com مع رقم طلبك",
          "أخبرنا باختصار بما حدث. وصورة تساعدنا إن كان هناك عيب",
          "نرد عليك خلال ٢٤ إلى ٤٨ ساعة بتفاصيل الاستلام",
          "بمجرد وصول الجهاز إلينا، يُصرف المبلغ إلى وسيلة الدفع الأصلية",
        ],
        note: "يظهر المبلغ عادة خلال ٥ إلى ١٤ يوماً حسب بنكك.",
      },
      {
        heading: "احتفظ بفاتورتك",
        body: [
          "فاتورتك الإلكترونية هي إثبات الشراء، وأساس حقك في الإرجاع والضمان معاً. ننصح بالاحتفاظ بها لمدة سنتين.",
        ],
      },
      {
        heading: "إذا لم نتفق",
        body: [
          "نفضّل أن نحل الأمور مباشرة، وهذا ما يحدث في الغالب. وإن تعذّر ذلك، فمن حقك رفع الأمر إلى وزارة التجارة عبر تطبيق «بلاغ تجاري» أو بالاتصال على الرقم ١٩٠٠.",
        ],
      },
    ],
    closing: {
      heading: "ما زلت متردداً؟",
      body: "اسألنا عن أي شيء قبل الشراء. الإجابة الصادقة الآن أثمن عندنا من عملية بيع تندم عليها.",
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
          "لمدة اثني عشر شهراً من التسليم، نغطي أي عطل ناتج عن تصنيع الجهاز نفسه. وإذا ظهر عيب أثناء الاستخدام الطبيعي، نصلح الجهاز أو نستبدله دون أي تكلفة عليك.",
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
          "لا نحيلك إلى نموذج ونتركك. راسلنا واشرح ما يحدث، ونخبرك خلال ٢٤ إلى ٤٨ ساعة بما نقترح فعله.",
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
        note: "إذا رأينا أن العطل خارج نطاق الضمان، نوضح لك السبب كتابةً، ونعرض عليك إصلاحاً بمقابل بدلاً من مجرد الرفض.",
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
