/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        pup: {
          "50%": { transform: "scale(0.85)" },
        },
      },
      animation: {
        pup: "pup 300ms ease-in-out 1",
      },
    },
  },
  plugins: [],
};
