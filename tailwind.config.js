/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "spin-2": "spin-2 100s linear infinite",
        "show": "show 0.1s linear ",
        "slide": "slide 0.1s linear ",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translate(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "spin-2": {
          to: { transform: "rotate(360deg)" }
        },
        "show": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" }
        },
        "slide": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" }
        },
      }

    },
    duration: {
      '2000': 2000,
    },
    container: {
      screens: {
        sm: '475px',
        md: '690px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1320px',
      }
    },
    fontFamily: {
      "bebas": ['Bebas Neue', 'sans-serif'],
      "roboto": ["Roboto Mono", "monospace"],
      "exp": ["Expletus Sans", 'sans-serif'],
      "pattaya": ["Pattaya", 'sans-serif'],
      "mulish": ["Mulish", 'sans-serif'],
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate"),
    require('tailwindcss-animated')
  ],
}

