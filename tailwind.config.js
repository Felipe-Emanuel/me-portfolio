/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Abril Fatface', cursive"],
      },
      backgroundImage: {
        AuthLogin: "url('/images/aura1.jpg')",
      },
      keyframes: {
        pup: {
          "50%": { transform: "scale(0.85)" },
        },
        pupLeft: {
          "50%": { transform: " translateX(.5rem)" },
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
        appearCardTop: {
          "0%": { transform: " translateY(-50vw)" },
        },
        appearCardDown: {
          "0%": { transform: " translateY(50vw)" },
        },
        appearCardLeft: {
          "0%": { transform: " translateX(-50vw)" },
        },
        appearCardRight: {
          "0%": { transform: " translateX(50vw)" },
        },
      },
      animation: {
        pup: "pup 300ms ease-in-out 1",
        pupLeft: "pupLeft 300ms ease-in-out infinite",
        appearX: "appearX 700ms ease-in 1",
        appearY: "appearY 700ms ease-in 1",
        appearTop: "appearTop 300ms ease-in 1",
        appearCardTop: "appearCardTop 300ms ease-in 1",
        appearCardDown: "appearCardDown 300ms ease-in 1",
        appearCardLeft: "appearCardLeft 300ms ease-in 1",
        appearCardRight: "appearCardRight 300ms ease-in 1",
        appearDown: "appearDown 300ms ease-in 1",
      },
    },
  },
  plugins: [],
};
