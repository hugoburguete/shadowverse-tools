const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    colors: {
      indigo: colors.indigo,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      vulcan: {
        300: '#9FA5C6',
        800: '#282C43',
        900: '#151723',
      },
    },
    extend: {},
  },
  plugins: [],
};
