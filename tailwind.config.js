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
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["'Poppins', sans-serif"],
        sans: ["'Abril Fatface', sans-serif"],
        SecondarySans: ["'Antic Didone', serif"],
      },
      colors: {
        dark: "#000",
        darkSecondary: "#000012",
        light: "#bbb",
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
