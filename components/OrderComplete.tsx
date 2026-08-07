"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Lines } from "./ui";
import { localeHref, type Locale } from "@/lib/locale";
import { t } from "@/content/site";

function Reference({ label }: { label: string }) {
  const params = useSearchParams();
  const ref = params.get("ref");
  if (!ref) return null;
  return (
    <div className="mt-12 inline-block border border-divider px-8 py-5">
      <p className="text-xs uppercase tracking-[0.2em] text-text-muted">{label}</p>
      <p dir="ltr" className="mt-2 text-lg font-light tracking-wide">
        {ref}
      </p>
    </div>
  );
}

export default function OrderComplete({ locale = "en" }: { locale?: Locale }) {
  const s = t(locale);
  const c = s.order;

  return (
    <div
      dir={s.dir}
      lang={locale}
      className={`min-h-screen bg-bg text-text ${locale === "ar" ? "font-arabic" : ""}`}
    >
      <Navigation />

      <section className="px-6 pb-24 pt-24 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
            {c.eyebrow}
          </p>
          <h1 className="mt-8 text-4xl font-light leading-[1.12] tracking-[-0.03em] sm:text-5xl">
            <Lines text={c.title} />
          </h1>
          <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-text-secondary sm:text-lg">
            {c.body}
          </p>

          <Suspense fallback={null}>
            <Reference label={c.refLabel} />
          </Suspense>

          <ul className="mt-16 space-y-4 border-t border-divider pt-10">
            {c.next.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-base font-light leading-relaxed text-text-secondary"
              >
                <span aria-hidden="true" className="mt-3 h-px w-4 flex-shrink-0 bg-text-muted" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm font-light leading-relaxed text-text-secondary">
            {c.contact}{" "}
            <a
              href="mailto:minaralabs@gmail.com"
              dir="ltr"
              className="border-b border-divider pb-0.5 transition-colors duration-300 hover:border-text hover:text-text"
            >
              minaralabs@gmail.com
            </a>
          </p>

          <div className="mt-14">
            <Link
              href={localeHref("/", locale)}
              className="border-b border-divider pb-1 text-xs uppercase tracking-[0.2em] text-text-muted transition-colors duration-500 hover:border-text hover:text-text"
            >
              {c.home}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
