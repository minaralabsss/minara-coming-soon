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
  // The panel is white on a white page, so it needs a backdrop to read
  // as an object. A soft radial wash plus a contact shadow does it
  // without introducing a hard-edged box.
  return (
    <div className="relative isolate flex justify-center">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[86%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(120,102,94,0.16), rgba(120,102,94,0.05) 62%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[6%] left-1/2 -z-10 h-6 w-[46%] -translate-x-1/2 rounded-[50%] blur-xl"
        style={{ background: "rgba(90,74,68,0.22)" }}
      />
      <picture>
        <source srcSet="/product-hero.webp" type="image/webp" />
        <img
          src="/product-hero.png"
          alt={alt}
          width={2568}
          height={2450}
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
