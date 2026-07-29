"use client";

import { useEffect, useState } from "react";
import ComingSoonGate from "@/components/ComingSoonGate";
import MainPage from "@/components/MainPage";
import type { Locale } from "@/lib/locale";

export default function PageWrapper({ locale = "en" }: { locale?: Locale }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsUnlocked(!!localStorage.getItem("minara_waitlist_unlocked"));
    setHasMounted(true);
  }, []);

  const handleEmailSubmitted = () => {
    localStorage.setItem("minara_waitlist_unlocked", "true");
    setIsUnlocked(true);
  };

  return (
    <>
      <MainPage locale={locale} />
      {hasMounted && !isUnlocked && (
        <ComingSoonGate onEmailSubmitted={handleEmailSubmitted} />
      )}
    </>
  );
}
