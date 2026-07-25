"use client";

import { useEffect, useState } from "react";
import ComingSoonGate from "@/components/ComingSoonGate";
import MainPage from "@/components/MainPage";

export default function PageWrapper() {
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
      <MainPage />
      {hasMounted && !isUnlocked && (
        <ComingSoonGate onEmailSubmitted={handleEmailSubmitted} />
      )}
    </>
  );
}
