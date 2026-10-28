"use client";

import { t } from "@/content/site";
import type { Locale } from "@/lib/locale";

/**
 * Certification marks, drawn rather than imported as bitmaps.
 *
 * Three deliberate constraints:
 *
 * 1. No FDA logo. The FDA logo itself is reserved for official FDA
 *    communications, so the FDA mark here is set typographically like FCC
 *    and IEC. The wording stays factual: "registered" and "listed" are
 *    what is true, and the page never says or implies "approved".
 *
 * 2. Monochrome. The official CE, FCC and RoHS marks may be reproduced in
 *    a single colour provided the proportions are kept, so drawing them in
 *    the brand's black keeps the strip on-brand instead of importing the
 *    blue and green badges that read as marketplace clutter.
 *
 * 3. One optical size. This is what was wrong before. Every mark shared a
 *    64x44 viewBox at h-9, but the CE arcs filled that box while the word
 *    marks were 17px text floating inside it, so CE rendered close to three
 *    times the height of FDA and FCC and dominated the row. Now the word
 *    marks are real text at a set size and the CE mark is cropped to its
 *    own geometry and sized to match that text's cap height, so the row
 *    reads as one family.
 */

/** Cap height shared by every mark in the row. */
const MARK_TEXT = "text-[26px] leading-none font-medium tracking-[0.02em]";
/** Tuned so the CE glyphs land on the same cap height as MARK_TEXT. */
const CE_HEIGHT = "h-[19px]";

/**
 * CE geometry follows the official construction: two arcs of equal circles
 * whose centres sit on a shared baseline, the E closed by a crossbar. The
 * viewBox is cropped to the ink so the height class is the real glyph
 * height rather than the height of surrounding air.
 */
function CEMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="4 5 58 34" className={className} fill="none" aria-hidden="true">
      <path d="M27 8.5A14.5 14.5 0 1 0 27 35.5" stroke="currentColor" strokeWidth="6" strokeLinecap="butt" />
      <path d="M57 8.5A14.5 14.5 0 1 0 57 35.5" stroke="currentColor" strokeWidth="6" strokeLinecap="butt" />
      <rect x="41" y="19" width="19" height="6" fill="currentColor" />
    </svg>
  );
}

export default function ComplianceMarks({ locale }: { locale: Locale }) {
  const c = t(locale).panel;

  // FDA leads the row: it is the strongest credential in the category.
  const marks = [
    { key: "fda", node: <span className={MARK_TEXT}>FDA</span>, caption: c.markFDA },
    { key: "ce", node: <CEMark className={`${CE_HEIGHT} w-auto`} />, caption: c.markCE },
    { key: "fcc", node: <span className={MARK_TEXT}>FCC</span>, caption: c.markFCC },
    { key: "rohs", node: <span className={MARK_TEXT}>RoHS</span>, caption: c.markRoHS },
    { key: "iec", node: <span className={MARK_TEXT}>IEC</span>, caption: c.markIEC },
  ];

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.marksEyebrow}</p>

      <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-5">
        {marks.map((m) => (
          <li key={m.key} className="flex flex-col items-start">
            {/* Fixed-height box so every mark sits on the same baseline
                regardless of whether it is text or drawn geometry. */}
            <span className="flex h-7 items-end text-text">{m.node}</span>
            <span className="mt-5 text-sm font-light leading-relaxed text-text-secondary">
              {m.caption}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-14 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
        {c.marksNote}
      </p>
    </div>
  );
}
