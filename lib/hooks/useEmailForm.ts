import { useState } from "react";
import { validateEmail } from "@/lib/utils";

export interface UseEmailFormState {
  email: string;
  error: string;
  isSubmitted: boolean;
  isLoading: boolean;
}

export interface UseEmailFormActions {
  setEmail: (email: string) => void;
  setError: (error: string) => void;
  clearError: () => void;
  setIsSubmitted: (submitted: boolean) => void;
  setIsLoading: (loading: boolean) => void;
  reset: () => void;
}

/**
 * Custom hook for managing email form state and validation
 */
export const useEmailForm = (): [UseEmailFormState, UseEmailFormActions] => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const clearError = () => setError("");

  const reset = () => {
    setEmail("");
    setError("");
    setIsSubmitted(false);
    setIsLoading(false);
  };

  const state: UseEmailFormState = {
    email,
    error,
    isSubmitted,
    isLoading,
  };

  const actions: UseEmailFormActions = {
    setEmail,
    setError,
    clearError,
    setIsSubmitted,
    setIsLoading,
    reset,
  };

  return [state, actions];
};

/**
 * Validate email and return error message
 */
export const validateEmailInput = (
  email: string
): { isValid: boolean; error: string } => {
  if (!email.trim()) {
    return {
      isValid: false,
      error: "Please enter your email address",
    };
  }

  if (!validateEmail(email)) {
    return {
      isValid: false,
      error: "Please enter a valid email address",
    };
  }

  return {
    isValid: true,
    error: "",
  };
};
