"use client";

import { t } from "@/content/site";
import type { Locale } from "@/lib/locale";

/**
 * Certification marks, drawn rather than imported as bitmaps.
 *
 * Two deliberate constraints:
 *
 * 1. No FDA logo. The FDA logo is reserved for official FDA communications
 *    and using it commercially implies an endorsement that establishment
 *    registration explicitly is not. FDA status is stated in words only,
 *    in the specifications table and the FAQ.
 *
 * 2. Monochrome. The official CE, FCC and RoHS marks may be reproduced in
 *    a single colour provided the proportions are kept, so drawing them in
 *    the brand's black keeps the strip on-brand instead of importing the
 *    blue and green badges that read as marketplace clutter.
 *
 * The CE mark geometry follows the official construction: two arcs of
 * circles whose centres sit on a shared baseline, with the gap between
 * letters equal to the stroke radius.
 */

function CEMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" className={className} fill="none" aria-hidden="true">
      {/* C: open arc, gap facing right */}
      <path
        d="M27 8.5A14.5 14.5 0 1 0 27 35.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="butt"
      />
      {/* E: arc with two crossbars, per the official construction */}
      <path
        d="M57 8.5A14.5 14.5 0 1 0 57 35.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="butt"
      />
      <rect x="41" y="19" width="19" height="6" fill="currentColor" />
    </svg>
  );
}

function RoHSMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
      <text
        x="32"
        y="29"
        textAnchor="middle"
        fill="currentColor"
        fontSize="17"
        fontWeight="500"
        letterSpacing="0.5"
      >
        RoHS
      </text>
    </svg>
  );
}

function WordMark({ label, className = "" }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 44" className={className} aria-hidden="true">
      <text
        x="32"
        y="29"
        textAnchor="middle"
        fill="currentColor"
        fontSize="17"
        fontWeight="500"
        letterSpacing="1"
      >
        {label}
      </text>
    </svg>
  );
}

export default function ComplianceMarks({ locale }: { locale: Locale }) {
  const c = t(locale).panel;

  const marks = [
    { key: "ce", node: <CEMark className="h-7 w-auto" />, caption: c.markCE },
    { key: "fcc", node: <WordMark label="FCC" className="h-7 w-auto" />, caption: c.markFCC },
    { key: "rohs", node: <RoHSMark className="h-7 w-auto" />, caption: c.markRoHS },
    { key: "iec", node: <WordMark label="IEC" className="h-7 w-auto" />, caption: c.markIEC },
  ];

  return (
    <div className="mt-20 border-t border-divider pt-12">
      <p className="text-xs uppercase tracking-[0.25em] text-text-muted">{c.marksEyebrow}</p>

      <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {marks.map((m) => (
          <li key={m.key} className="flex flex-col items-start gap-4">
            <span className="text-text">{m.node}</span>
            <span className="text-xs font-light leading-relaxed text-text-secondary">
              {m.caption}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl text-xs font-light leading-relaxed text-text-muted">
        {c.marksNote}
      </p>
    </div>
  );
}
