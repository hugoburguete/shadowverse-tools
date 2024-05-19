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
      danger: colors.red,
      success: colors.green,
      vulcan: {
        300: '#9FA5C6',
        800: '#282C43',
        900: '#151723',
      },
    },
    extend: {
      animation: {
        'stretch-compress': 'stretch-compress 1.4s ease-in-out infinite',
        spin: 'spin 1.4s linear infinite',
      },
      keyframes: {
        'stretch-compress': {
          '0%': {
            strokeDasharray: '1px, 200px',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: '100px, 200px',
            strokeDashoffset: '-15px',
          },
          '100%': {
            strokeDasharray: '100px, 200px',
            strokeDashoffset: '-125px',
          },
        },
      },
    },
  },
  plugins: [],
};
