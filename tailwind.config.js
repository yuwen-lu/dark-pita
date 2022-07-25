// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        money: '#FABC05'
      },
      fontFamily: {
        menlo: ['Menlo'],
        cabin: ['Cabin']
      },
      zIndex: {
        '999': '999',
        'infinite': '100003'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
