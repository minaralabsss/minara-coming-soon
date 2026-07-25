'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import EmailForm from "./EmailForm";

interface ComingSoonGateProps {
  onEmailSubmitted?: () => void;
}

export default function ComingSoonGate({ onEmailSubmitted }: ComingSoonGateProps) {
  const [isOpen, setIsOpen] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text transition-colors z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 5L5 15M5 5L15 15" />
              </svg>
            </button>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center gap-12 sm:gap-14 lg:gap-16 p-8 sm:p-12"
            >
              {/* Logo */}
              <motion.div variants={itemVariants}>
                <Logo size="lg" />
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl font-light text-text leading-tight">
                  Precision Light
                  <br />
                  for Living Well
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-center text-text-secondary max-w-md leading-relaxed font-light"
              >
                Introducing advanced red light therapy technology, engineered with
                scientific precision to optimize your wellness.
              </motion.p>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-sm text-center text-text-muted max-w-sm leading-relaxed uppercase tracking-wider"
              >
                Launching in {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </motion.p>

              {/* Email Form */}
              <motion.div variants={itemVariants} className="w-full flex justify-center">
                <EmailForm onSuccess={() => {
                  setIsOpen(false);
                  onEmailSubmitted?.();
                }} />
              </motion.div>

              {/* Footer Text */}
              <motion.p
                variants={itemVariants}
                className="text-xs text-center text-text-muted max-w-sm"
              >
                Be among the first to experience the future of precision wellness
                technology.
              </motion.p>

              {/* Divider Line */}
              <motion.div
                variants={itemVariants}
                className="w-12 h-px bg-border"
              />

              {/* Trust Statement */}
              <motion.div
                variants={itemVariants}
                className="text-center space-y-3"
              >
                <p className="text-xs uppercase tracking-wider text-text-muted">
                  Designed in Saudi Arabia
                </p>
                <p className="text-xs text-text-muted leading-relaxed max-w-sm">
                  Engineered with precision. Designed for longevity. Built to last.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
