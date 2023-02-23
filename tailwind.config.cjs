/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/src/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'task-white': '#F2E8E8',
      'task-white-disabled': '#BFB8B8',
      'task-blue': '#2526F7',
      'task-blue-disabled': '#121278'
    },
    fontFamily: {
      'OffBit': ['OffBit']
    },
    fontSize: {
      sm: '0.707rem',
      base: '1rem',
      xl: '1,414rem',
      '2xl': '1.999rem',
      '3xl': '2.827rem',
      '4xl': '3.998rem',
      '5xl': '5.653rem'
    },
    extend: {},
  },
  plugins: [],
}
