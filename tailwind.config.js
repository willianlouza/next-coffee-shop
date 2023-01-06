/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--montserrat-font)", ...fontFamily.sans],
        serif: ["var(--montserrat-font)", ...fontFamily.serif],
        title: ["var(--righteous-font)", ...fontFamily.serif]
      },
      colors: {
        "brown-400": "#e3ac71",
        "brown-500": "#d0a476",
        "brown-600": "#977759",
        "brown-700": "#81705d",
        "brown-800": "#1c1914",
        "brown-900": "#15110e"
      }
    },
  },
  plugins: [],
}
