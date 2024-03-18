const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      vulcan: '#151723',
    },
    extend: {},
  },
  plugins: [],
};
