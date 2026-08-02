"use client";

import type { Locale } from "@/lib/locale";
import { t } from "@/content/site";

/**
 * Penetration-depth diagram, drawn as SVG so it themes with the brand
 * and reads correctly in both languages. Mirrors for RTL.
 */
export default function DepthDiagram({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.science;
  const rtl = locale === "ar";

  // Geometry
  const W = 1000;
  const H = 560;
  const chartTop = 150;
  const chartH = 300;
  const chartLeft = 150;
  const chartRight = W - 40;
  const chartW = chartRight - chartLeft;

  const bands = c.depths;
  const colW = chartW / bands.length;

  // Skin layer bands as fractions of chart height
  const layerStops = [0.06, 0.36, 0.74, 1];

  return (
    <figure className="not-prose w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={c.depthAxis}
      >
        <defs>
          {/* Red beam */}
          <linearGradient id="beamRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8323c" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#e8323c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e8323c" stopOpacity="0" />
          </linearGradient>
          {/* Near-infrared beam, deliberately darker */}
          <linearGradient id="beamNir" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7d1220" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#7d1220" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7d1220" stopOpacity="0" />
          </linearGradient>
          {/* Tissue tones, muted to sit inside the brand palette */}
          <linearGradient id="tissue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0e3dc" />
            <stop offset="36%" stopColor="#e6cdc6" />
            <stop offset="74%" stopColor="#f2e6d8" />
            <stop offset="100%" stopColor="#d9bcb6" />
          </linearGradient>
        </defs>

        <g transform={rtl ? `translate(${W},0) scale(-1,1)` : undefined}>
          {/* Tissue block */}
          <rect
            x={chartLeft}
            y={chartTop}
            width={chartW}
            height={chartH}
            fill="url(#tissue)"
            rx="2"
          />

          {/* Layer dividers */}
          {layerStops.slice(0, -1).map((f, i) => (
            <line
              key={i}
              x1={chartLeft}
              x2={chartRight}
              y1={chartTop + chartH * f}
              y2={chartTop + chartH * f}
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.85"
            />
          ))}

          {/* Beams */}
          {bands.map((b, i) => {
            const cx = chartLeft + colW * (i + 0.5);
            const beamW = Math.min(26, colW * 0.34);
            const depth = chartH * b.reach;
            return (
              <g key={b.nm}>
                <rect
                  x={cx - beamW / 2}
                  y={chartTop - 42}
                  width={beamW}
                  height={depth + 42}
                  fill={b.group === "red" ? "url(#beamRed)" : "url(#beamNir)"}
                  rx={beamW / 2}
                />
              </g>
            );
          })}
        </g>

        {/* --- Text layer, never mirrored --- */}

        {/* Group headers */}
        <g>
          <line
            x1={rtl ? W - (chartLeft + colW * 2 - 10) : chartLeft + 10}
            x2={rtl ? W - (chartLeft + 10) : chartLeft + colW * 2 - 10}
            y1="74"
            y2="74"
            stroke="#e8323c"
            strokeWidth="1"
          />
          <text
            x={rtl ? W - (chartLeft + colW) : chartLeft + colW}
            y="62"
            textAnchor="middle"
            fill="#e8323c"
            fontSize="19"
            letterSpacing={rtl ? "0" : "0.08em"}
          >
            {c.depthRedLabel}
          </text>

          <line
            x1={rtl ? W - (chartRight - 10) : chartLeft + colW * 2 + 10}
            x2={rtl ? W - (chartLeft + colW * 2 + 10) : chartRight - 10}
            y1="74"
            y2="74"
            stroke="#7d1220"
            strokeWidth="1"
          />
          <text
            x={rtl ? W - (chartLeft + colW * 4) : chartLeft + colW * 4}
            y="62"
            textAnchor="middle"
            fill="#7d1220"
            fontSize="19"
            letterSpacing={rtl ? "0" : "0.08em"}
          >
            {c.depthNirLabel}
          </text>
        </g>

        {/* Per-wavelength headers */}
        {bands.map((b, i) => {
          const cxRaw = chartLeft + colW * (i + 0.5);
          const cx = rtl ? W - cxRaw : cxRaw;
          return (
            <g key={b.nm}>
              <text
                x={cx}
                y="112"
                textAnchor="middle"
                fill={b.group === "red" ? "#e8323c" : "#7d1220"}
                fontSize="24"
                fontWeight="500"
              >
                {b.nm}
                <tspan fontSize="15"> nm</tspan>
              </text>
              <text
                x={cx}
                y="134"
                textAnchor="middle"
                fill="currentColor"
                opacity="0.6"
                fontSize="13"
              >
                {b.layer}
              </text>
            </g>
          );
        })}

        {/* Skin layer labels */}
        {c.skinLayers.map((l, i) => {
          const prev = i === 0 ? 0 : layerStops[i - 1];
          const mid = chartTop + chartH * ((prev + layerStops[i]) / 2);
          const x = rtl ? W - (chartLeft - 16) : chartLeft - 16;
          return (
            <g key={l.name}>
              <text
                x={x}
                y={mid - 4}
                textAnchor={rtl ? "start" : "end"}
                fill="currentColor"
                fontSize="14"
                fontWeight="500"
              >
                {l.name}
              </text>
              <text
                x={x}
                y={mid + 14}
                textAnchor={rtl ? "start" : "end"}
                fill="currentColor"
                opacity="0.5"
                fontSize="12"
              >
                {l.range}
              </text>
            </g>
          );
        })}

        {/* Depth axis */}
        <line
          x1={chartLeft}
          x2={chartRight}
          y1={chartTop + chartH + 40}
          y2={chartTop + chartH + 40}
          stroke="currentColor"
          opacity="0.18"
        />
        <text
          x={W / 2}
          y={chartTop + chartH + 32}
          textAnchor="middle"
          fill="currentColor"
          opacity="0.55"
          fontSize="13"
          letterSpacing={rtl ? "0" : "0.12em"}
        >
          {c.depthAxis}
        </text>

        {bands.map((b, i) => {
          const cxRaw = chartLeft + colW * (i + 0.5);
          const cx = rtl ? W - cxRaw : cxRaw;
          return (
            <text
              key={b.nm}
              x={cx}
              y={chartTop + chartH + 64}
              textAnchor="middle"
              fill="currentColor"
              opacity="0.75"
              fontSize="14"
            >
              {b.depth}
            </text>
          );
        })}
      </svg>

      <figcaption className="mt-6 text-xs font-light leading-relaxed text-text-muted">
        {c.depthNote}
      </figcaption>
    </figure>
  );
}
