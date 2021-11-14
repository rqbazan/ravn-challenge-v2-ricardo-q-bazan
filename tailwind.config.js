// @preval
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    /**
     * I've re-exported some keys intentionally in order
     * to use the values from the base code
     */
    extend: {
      screen: defaultTheme.screens,
      fontFamily: {
        sans: ['SF Pro Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'rgba(0, 0, 0, 0.1)',
        text: {
          dark: '#333333',
          light: '#828282',
          emphasis: '#EC5757',
        },
        brand: {
          black: '#121212',
        },
      },
      lineHeight: {
        heading: '20.29px',
        paragraph: '16.71px',
      },
      fontSize: {
        heading: '17px',
        paragraph: '14px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
