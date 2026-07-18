/**
 * Brand and company constants
 */
export const COMPANY_NAME = "Minara Labs";
export const COMPANY_DOMAIN = "minaralabs.shop";
export const COMPANY_URL = `https://${COMPANY_DOMAIN}`;

/**
 * Brand messaging
 */
export const BRAND_TAGLINE = "The future of beauty technology.";
export const BRAND_DESCRIPTION =
  "Thoughtfully engineered wellness devices designed to elevate everyday rituals.";
export const LAUNCH_MESSAGE = "Our first collection is currently being prepared. Launching soon.";

/**
 * Color palette
 */
export const COLORS = {
  white: "#FFFFFF",
  text: "#111111",
  secondary: "#666666",
  accent: "#8B0000",
} as const;

/**
 * Animation timing
 */
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  slower: 1,
} as const;

/**
 * Breakpoints (must match tailwind config)
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

/**
 * Z-index scale
 */
export const Z_INDEX = {
  dropdown: 1000,
  modal: 1100,
  notification: 1200,
} as const;

/**
 * Email validation
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
