import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black and white minimal palette
        bg: "#FFFFFF", // Pure white background
        "bg-dark": "#FFFFFF", // Pure white for contrast
        text: "#000000", // Pure black
        "text-secondary": "#666666", // Medium gray
        "text-muted": "#999999", // Light gray
        accent: "#000000", // Black accent
        "accent-light": "#333333", // Dark gray on hover
        border: "#000000", // Black border
        divider: "#F0F0F0", // Very light gray divider
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
        // Minimal geometric display font
        display: ['"IBM Plex Sans"', "sans-serif"],
      },
      fontSize: {
        // Premium typography hierarchy
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        sm: ["14px", { lineHeight: "20px", letterSpacing: "0.3px" }],
        base: ["16px", { lineHeight: "26px", letterSpacing: "0.2px" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "0.1px" }],
        xl: ["20px", { lineHeight: "30px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
        "6xl": ["56px", { lineHeight: "64px" }],
        "7xl": ["64px", { lineHeight: "72px" }],
      },
      spacing: {
        0: "0",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
        12: "48px",
        14: "56px",
        16: "64px",
        18: "72px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        48: "192px",
        56: "224px",
        64: "256px",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        smoothOut: "cubic-bezier(0, 0, 0.2, 1)",
        smoothIn: "cubic-bezier(0.4, 0, 1, 1)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.6s ease-out",
        slideDown: "slideDown 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
