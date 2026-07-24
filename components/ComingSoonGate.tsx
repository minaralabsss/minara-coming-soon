"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import EmailForm from "./EmailForm";

export default function ComingSoonGate() {
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

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl flex flex-col items-center gap-12 sm:gap-14 lg:gap-16"
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Logo size="lg" />
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text leading-tight">
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
          <EmailForm />
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
            Crafted in Saudi Arabia
          </p>
          <p className="text-xs text-text-muted leading-relaxed max-w-sm">
            Engineered with precision. Designed for longevity. Built to last.
          </p>
        </motion.div>
      </motion.div>

      {/* Background decorative element */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-[0.02] rounded-full blur-3xl" />
      </div>
    </div>
  );
}
