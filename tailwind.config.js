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
        "primary-light": "var(--color-primary-light)",
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)",
        "secondary-low": "var(--color-secondary-low)",
        "error-main": "var(--color-error-main)",
        "error-light": "var(--color-error-light)",
        "success-main": "var(--color-success-main)",
        "success-light": "var(--color-success-light)",
      },
      boxShadow: {
        "buttonShadow": "7px 7px 0 0 #000000",
        "lightShadow": "2px 2px 0 0 #000000",
        "loadingCardShadow": "5px 5px 0 0 #bdbdbd",
        "errorBoxShadow": "5px 5px 0 0 #CC1D1D"
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // addIconSelectors(['mdi', 'mdi-light','solar']),
  ],
};
