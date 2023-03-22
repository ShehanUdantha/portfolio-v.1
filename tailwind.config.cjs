/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-15%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
