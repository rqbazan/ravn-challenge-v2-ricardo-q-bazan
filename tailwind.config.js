const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', ...defaultTheme.fontFamily.sans],
      },
      colors: {
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
    },
  },
}
