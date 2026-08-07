/** Saudi administrative regions and their main cities, bilingual. */

export type Bilingual = { en: string; ar: string };

export type Province = {
  code: string;
  name: Bilingual;
  cities: Bilingual[];
};

export const PROVINCES: Province[] = [
  {
    code: "riyadh",
    name: { en: "Riyadh", ar: "الرياض" },
    cities: [
      { en: "Riyadh", ar: "الرياض" },
      { en: "Diriyah", ar: "الدرعية" },
      { en: "Al Kharj", ar: "الخرج" },
      { en: "Al Majma'ah", ar: "المجمعة" },
      { en: "Al Zulfi", ar: "الزلفي" },
      { en: "Wadi Al Dawasir", ar: "وادي الدواسر" },
      { en: "Al Quway'iyah", ar: "القويعية" },
      { en: "Afif", ar: "عفيف" },
      { en: "Al Dawadmi", ar: "الدوادمي" },
      { en: "Shaqra", ar: "شقراء" },
    ],
  },
  {
    code: "makkah",
    name: { en: "Makkah", ar: "مكة المكرمة" },
    cities: [
      { en: "Jeddah", ar: "جدة" },
      { en: "Makkah", ar: "مكة المكرمة" },
      { en: "Taif", ar: "الطائف" },
      { en: "Rabigh", ar: "رابغ" },
      { en: "Al Qunfudhah", ar: "القنفذة" },
      { en: "Al Lith", ar: "الليث" },
      { en: "Khulais", ar: "خليص" },
      { en: "Al Jumum", ar: "الجموم" },
    ],
  },
  {
    code: "eastern",
    name: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    cities: [
      { en: "Dammam", ar: "الدمام" },
      { en: "Khobar", ar: "الخبر" },
      { en: "Dhahran", ar: "الظهران" },
      { en: "Qatif", ar: "القطيف" },
      { en: "Jubail", ar: "الجبيل" },
      { en: "Al Ahsa (Hofuf)", ar: "الأحساء (الهفوف)" },
      { en: "Ras Tanura", ar: "رأس تنورة" },
      { en: "Abqaiq", ar: "بقيق" },
      { en: "Safwa", ar: "صفوى" },
      { en: "Saihat", ar: "سيهات" },
      { en: "Hafr Al Batin", ar: "حفر الباطن" },
      { en: "Khafji", ar: "الخفجي" },
      { en: "Nairyah", ar: "النعيرية" },
    ],
  },
  {
    code: "madinah",
    name: { en: "Madinah", ar: "المدينة المنورة" },
    cities: [
      { en: "Madinah", ar: "المدينة المنورة" },
      { en: "Yanbu", ar: "ينبع" },
      { en: "Al Ula", ar: "العلا" },
      { en: "Badr", ar: "بدر" },
      { en: "Khaybar", ar: "خيبر" },
      { en: "Mahd Al Dhahab", ar: "مهد الذهب" },
    ],
  },
  {
    code: "qassim",
    name: { en: "Qassim", ar: "القصيم" },
    cities: [
      { en: "Buraidah", ar: "بريدة" },
      { en: "Unaizah", ar: "عنيزة" },
      { en: "Al Rass", ar: "الرس" },
      { en: "Al Mithnab", ar: "المذنب" },
      { en: "Al Bukayriyah", ar: "البكيرية" },
      { en: "Riyadh Al Khabra", ar: "رياض الخبراء" },
    ],
  },
  {
    code: "asir",
    name: { en: "Asir", ar: "عسير" },
    cities: [
      { en: "Abha", ar: "أبها" },
      { en: "Khamis Mushait", ar: "خميس مشيط" },
      { en: "Bisha", ar: "بيشة" },
      { en: "Al Namas", ar: "النماص" },
      { en: "Mahayil Asir", ar: "محايل عسير" },
      { en: "Sarat Abidah", ar: "سراة عبيدة" },
      { en: "Rijal Almaa", ar: "رجال ألمع" },
    ],
  },
  {
    code: "tabuk",
    name: { en: "Tabuk", ar: "تبوك" },
    cities: [
      { en: "Tabuk", ar: "تبوك" },
      { en: "Duba", ar: "ضباء" },
      { en: "Umluj", ar: "أملج" },
      { en: "Haql", ar: "حقل" },
      { en: "Al Wajh", ar: "الوجه" },
      { en: "Tayma", ar: "تيماء" },
    ],
  },
  {
    code: "hail",
    name: { en: "Hail", ar: "حائل" },
    cities: [
      { en: "Hail", ar: "حائل" },
      { en: "Baqaa", ar: "بقعاء" },
      { en: "Al Ghazalah", ar: "الغزالة" },
      { en: "Al Shinan", ar: "الشنان" },
    ],
  },
  {
    code: "northern",
    name: { en: "Northern Borders", ar: "الحدود الشمالية" },
    cities: [
      { en: "Arar", ar: "عرعر" },
      { en: "Rafha", ar: "رفحاء" },
      { en: "Turaif", ar: "طريف" },
    ],
  },
  {
    code: "jazan",
    name: { en: "Jazan", ar: "جازان" },
    cities: [
      { en: "Jazan", ar: "جازان" },
      { en: "Sabya", ar: "صبيا" },
      { en: "Abu Arish", ar: "أبو عريش" },
      { en: "Samtah", ar: "صامطة" },
      { en: "Farasan", ar: "فرسان" },
      { en: "Al Darb", ar: "الدرب" },
    ],
  },
  {
    code: "najran",
    name: { en: "Najran", ar: "نجران" },
    cities: [
      { en: "Najran", ar: "نجران" },
      { en: "Sharurah", ar: "شرورة" },
      { en: "Habuna", ar: "حبونا" },
      { en: "Badr Al Janub", ar: "بدر الجنوب" },
    ],
  },
  {
    code: "bahah",
    name: { en: "Al Bahah", ar: "الباحة" },
    cities: [
      { en: "Al Bahah", ar: "الباحة" },
      { en: "Baljurashi", ar: "بلجرشي" },
      { en: "Al Mandaq", ar: "المندق" },
      { en: "Qilwah", ar: "قلوة" },
    ],
  },
  {
    code: "jawf",
    name: { en: "Al Jawf", ar: "الجوف" },
    cities: [
      { en: "Sakaka", ar: "سكاكا" },
      { en: "Qurayyat", ar: "القريات" },
      { en: "Dumat Al Jandal", ar: "دومة الجندل" },
    ],
  },
];

export const OTHER_CITY: Bilingual = { en: "Other", ar: "أخرى" };

export function findProvince(code: string): Province | undefined {
  return PROVINCES.find((p) => p.code === code);
}

/** Is this city valid for the given province? */
export function cityBelongsTo(provinceCode: string, city: string): boolean {
  const province = findProvince(provinceCode);
  if (!province) return false;
  if (city === OTHER_CITY.en || city === OTHER_CITY.ar) return true;
  return province.cities.some((c) => c.en === city || c.ar === city);
}

/**
 * Saudi National Address short code: four letters then four digits,
 * e.g. RQAA2929. Returned uppercased, or null when it does not match.
 */
export function normaliseShortAddress(raw: string): string | null {
  const v = raw.replace(/[\s-]/g, "").toUpperCase();
  return /^[A-Z]{4}\d{4}$/.test(v) ? v : null;
}
