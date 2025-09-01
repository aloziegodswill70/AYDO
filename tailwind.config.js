// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38bdf8", // Tailwind sky-400
          dark: "#0284c7",    // Tailwind sky-600
          light: "#bae6fd",   // Tailwind sky-200
        },
        gray: {
          light: "#f3f4f6",   // Tailwind gray-100
          DEFAULT: "#6b7280", // Tailwind gray-500
          dark: "#374151",    // Tailwind gray-800
        },
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
