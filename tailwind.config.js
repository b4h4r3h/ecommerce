const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-dark": "var(--color-text-dark)",
        "gray-middle": "var(--color-gray-middle)",
        "gray-low": "var(--color-gray-low)",
        "gray-light": "var(--color-gray-light)",
      },
      boxShadow: {
        "buttonShadow": "5px 5px 0 0 #000000"
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // addIconSelectors(['mdi', 'mdi-light','solar']),
  ],
};
