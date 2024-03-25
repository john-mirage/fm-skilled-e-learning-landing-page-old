/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      "hover-device": { "raw": "(hover: hover)" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        "sm": "1.5rem"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-blue": "#13183F",
        "blue": "#4851FF",
        "gray": "#83869A",
        "pink": "#F74780",
        "orange": "#FF6F48",
        "light-pink": "#F02AA6",
        "light-gray": "#F0F1FF",
        "very-light-pink": "#FFA7C3"
      },
      boxShadow: {
        "illustration": "0px 34px 54px 0px rgba(6, 22, 141, 0.16)",
        "card": "0px 25px 50px 0px rgba(6, 22, 141, 0.04)",
      }
    },
  },
  plugins: [],
}

