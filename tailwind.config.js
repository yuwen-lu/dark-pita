// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': ['10px', '12px']
      },
      colors: {
        background: '#333333',
        dark: '#2C2C2C',
        money: '#FABC05'
      },
      fontFamily: {
        cabin: ['Cabin']
      },
      zIndex: {
        '999': '999',
        overlay: '99999',
        extension: '999999',
        infinite: '9999999'
      },
      transitionProperty: {
        left: 'left'
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
