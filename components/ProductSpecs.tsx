"use client";

import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
}

const specs: Spec[] = [
  { label: "Version", value: "Red Light Panel" },
  { label: "LED Power", value: "350W" },
  { label: "LED Quantity", value: "70 LEDs" },
  { label: "Product Size", value: "L318mm × W220mm × H70mm" },
  { label: "Weight", value: "4.5 kg (with packaging)" },
  { label: "Irradiance", value: "220 mW/cm² (±10%) @ 0 inches" },
  { label: "EMF", value: "0 µT" },
  { label: "Lifespan", value: "50,000+ hours" },
  { label: "Color Options", value: "White / Black" },
  { label: "Wavelengths", value: "630nm, 660nm, 810nm, 850nm, 940nm, 1060nm" },
  { label: "Material", value: "SPCC (Cold-Rolled Coil Steel)" },
  { label: "Lens Angle", value: "30°" },
  { label: "Operating Temperature", value: "-20°C to 50°C" },
  { label: "Humidity Range", value: "30%-70% RH" },
  { label: "Protection Level", value: "IP20" },
  { label: "Input Voltage", value: "AC100-240V, 50/60Hz" },
  { label: "Actual Power", value: "120W (±10%)" },
];

export default function ProductSpecs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-text mb-4">
            Technical Specifications
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Engineered for precision, built for durability. Every specification
            refined for optimal therapeutic efficacy.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-bg-dark border border-border p-6 sm:p-8 rounded-lg hover:border-text-muted transition-colors duration-300"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-text-muted font-medium">
                  {spec.label}
                </p>
                <p className="text-base sm:text-lg text-text font-light leading-tight">
                  {spec.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Assurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-border"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-text-muted mb-2">
                Zero Compromise
              </p>
              <p className="text-lg font-light text-text">
                Advanced EMF management for peace of mind
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-text-muted mb-2">
                Proven Science
              </p>
              <p className="text-lg font-light text-text">
                Multi-wavelength spectrum for comprehensive coverage
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-text-muted mb-2">
                Built to Last
              </p>
              <p className="text-lg font-light text-text">
                50,000+ hours of consistent, reliable performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
