const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-dark": "var(--color-text-dark)",
        "text-grade2": "var(--color-text-grade2)",
        "text-grade3": "var(--color-text-grade3)",
        "text-placeholder": "var(--color-text-placeholder)",
        "gray-middle": "var(--color-gray-middle)",
        "gray-low": "var(--color-gray-low)",
        "gray-light": "var(--color-gray-light)",
        "error-main": "var(--color-error-main)",
        "error-light": "var(--color-error-light)",
        "success-main": "var(--color-success-main)",
        "success-light": "var(--color-success-light)",
      },
      boxShadow: {
        "buttonShadow": "5px 5px 0 0 #000000",
        "errorBoxShadow": "5px 5px 0 0 #CC1D1D"
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // addIconSelectors(['mdi', 'mdi-light','solar']),
  ],
};
