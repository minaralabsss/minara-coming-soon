"use client";

import { motion } from "framer-motion";

export const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export const viewport = { once: true, margin: "-15%" };

/** Headline with \n turned into line breaks. */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={rise} className="text-xs uppercase tracking-[0.25em] text-text-muted">
      {children}
    </motion.p>
  );
}

export function Frame({
  label,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-sm bg-divider ${ratio} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-center text-xs uppercase tracking-[0.25em] text-text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}

export function ProductRender({
  className = "",
  priority = false,
  alt,
}: {
  className?: string;
  priority?: boolean;
  alt: string;
}) {
  // The photograph carries its own studio shadow, so no synthetic wash or
  // contact shadow is added here — those read as a grey smudge under the
  // stand on a white page. Dimensions match the normalised 3:4 asset.
  return (
    <div className="flex justify-center">
      <picture>
        <source srcSet="/product-hero.webp" type="image/webp" />
        <img
          src="/product-hero.png"
          alt={alt}
          width={1200}
          height={1600}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`h-auto w-full object-contain ${className}`}
        />
      </picture>
    </div>
  );
}

/** Photographic figure with a soft frame, used for lifestyle imagery. */
export function Photo({
  src,
  alt,
  ratio = "aspect-[4/5]",
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-sm bg-divider/30 ${ratio} ${className}`}>
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.png`}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
