"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { validateEmail } from "@/lib/utils";

interface EmailFormProps {
  onSuccess?: () => void;
}

export default function EmailForm({ onSuccess }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
        body: JSON.stringify({ email }),
=======
        body: JSON.stringify({
          email,
        }),
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
      });

      const data = await response.json();

<<<<<<< HEAD
      if (!response.ok) {
        setError(data.message || "Failed to subscribe. Please try again.");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
=======
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Subscription failed.");
      }

>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
      setIsSubmitted(true);
      setEmail("");

      if (onSuccess) {
        onSuccess();
      }

<<<<<<< HEAD
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Something went wrong. Please try again later.");
=======
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        >
          <Check className="w-8 h-8 text-accent" strokeWidth={1.5} />
        </motion.div>
<<<<<<< HEAD
        <motion.div
=======

        <motion.p
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
<<<<<<< HEAD
          <p className="text-lg font-light text-text mb-1">
            Welcome to Minara Labs
          </p>
          <p className="text-sm text-text-secondary">
            Check your email for exclusive updates
          </p>
        </motion.div>
=======
          Thank you for subscribing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-secondary"
        >
          We'll be in touch soon.
        </motion.p>
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="your@email.com"
            disabled={isLoading}
            className="w-full px-6 py-4 text-base border border-border bg-bg-dark text-text placeholder-text-muted rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Email address"
          />
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2 text-accent text-sm"
=======
            className="text-sm text-accent"
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
          >
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </motion.div>
        )}

        <motion.button
<<<<<<< HEAD
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          type="submit"
          disabled={isLoading}
          className="px-6 py-4 bg-accent text-bg text-base font-medium rounded hover:bg-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          aria-label="Join waitlist"
=======
          type="submit"
          disabled={isLoading}
          whileHover={{ backgroundColor: "#7a0000" }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-accent text-white text-base font-medium rounded-none transition-colors duration-200 disabled:opacity-50"
>>>>>>> 066f2c5d82ef45c16bf58a8020afb0292f655eca
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
              Subscribing...
            </span>
          ) : (
            "Join the Waitlist"
          )}
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xs text-center text-text-muted leading-relaxed"
        >
          You'll be the first to access our red light therapy breakthrough
        </motion.p>
      </div>
    </form>
  );
}
