"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-6 px-4 sm:gap-8 lg:gap-10"
    >
      {/* Label */}
      <motion.div variants={itemVariants}>
        <span className="text-xs tracking-widest uppercase text-text-secondary font-medium">
          Minara Labs
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 variants={itemVariants} className="text-center">
        <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-text">
          The future of
        </span>
        <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-text">
          beauty technology.
        </span>
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-center text-text-secondary max-w-md leading-relaxed"
      >
        Thoughtfully engineered wellness devices designed to elevate everyday
        rituals.
      </motion.p>

      {/* Secondary Text */}
      <motion.p
        variants={itemVariants}
        className="text-sm text-center text-text-secondary max-w-sm leading-relaxed"
      >
        Our first collection is currently being prepared. Launching soon.
      </motion.p>
    </motion.div>
  );
}
