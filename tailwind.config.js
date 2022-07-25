// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#333333'
      },
      fontFamily: {
        menlo: ['Menlo'],
        cabin: ['Cabin']
      },
      zIndex: {
        '999': '999',
        'infinite': 'infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
