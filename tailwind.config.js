/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed, sans-serif"],
        bellefair: ["Bellefair, serif"],
        normalBarlow: ["Barlow, sans-serif"],
      },
      colors: {
        black: "#0B0D17",
        light: "#D0D6F9",
        blur: "rgba(255, 255, 255, 0.04)",
        divColor: "#383b4b",
        hoveExplore: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.25)",
      },
      keyframes: {
        slideLeft: {
          from: {
            left: "50%",
          },
          to: {
            left: "121px",
          },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.7s forwards",
      },
      animation: {
        popup: "popup 1s both",
      },
      keyframes: {
        popup: {
          "0%": { width: "150px", height: "150px" },
          "100%": { width: "200px", height: "200px" },
        },
      },
      width: {
        calc: "calc(100% + 1px)",
      },
      height: {
        available: " -webkit-fill-available",
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
