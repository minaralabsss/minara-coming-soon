'use client';

import { useEffect, useState } from 'react';
import ComingSoonGate from '@/components/ComingSoonGate';
import MainPage from '@/components/MainPage';

export default function PageWrapper() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already unlocked access
    const unlocked = localStorage.getItem('minara_waitlist_unlocked');
    setIsUnlocked(!!unlocked);
    setIsLoading(false);
  }, []);

  const handleEmailSubmitted = () => {
    // Set unlock flag in localStorage
    localStorage.setItem('minara_waitlist_unlocked', 'true');
    setIsUnlocked(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  return isUnlocked ? (
    <MainPage />
  ) : (
    <ComingSoonGate onEmailSubmitted={handleEmailSubmitted} />
  );
}
