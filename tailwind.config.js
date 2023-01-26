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
        appearX: {
          "0%": { transform: " translatex(-100vw)" },
          "50%": { transform: "scale(0.25)" },
        },
        appearY: {
          "0%": { transform: " translatey(-100vw)" },
          "50%": { transform: "scale(0.25)" },
        },
        appearTop: {
          "0%": { transform: " translateY(-5vw)" },
        },
        appearDown: {
          "0%": { transform: " translateY(5vw)" },
        },
      },
      animation: {
        pup: "pup 300ms ease-in-out 1",
        appearX: "appearX 700ms ease-in 1",
        appearY: "appearY 700ms ease-in 1",
        appearTop: "appearTop 300ms ease-in 1",
        appearDown: "appearDown 300ms ease-in 1",
      },
    },
  },
  plugins: [],
};
