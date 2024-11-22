/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
  plugins: [],
}

