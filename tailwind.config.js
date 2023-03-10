/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/,
    },
    {
      pattern: /^to-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^top-/,
    },
    {
      pattern: /^left-/,
    },
    {
      pattern: /^text-/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["'Poppins', sans-serif"],
        sans: ["'Abril Fatface', sans-serif"],
        SecondarySans: ["'Antic Didone', serif"],
        SliderTitle: ["'Aboreto', cursive;"],
      },
      colors: {
        dark: "#000",
        darkSecondary: "#000012",
        light: "#bbb",
        orangeDark: "#bc6327",
        blueLight: "#3f76c6",
        HooverBlueLight: "#5b82b8",
        gitHub: "#25282d",
      },
      backgroundColor: {
        dark: "#121214",
        darkSecondary: "#000012",
        light: "#bbb",
      },
      backgroundImage: {
        AuthLogin: "url('/images/aura1.jpg')",
      },
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
