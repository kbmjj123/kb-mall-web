/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
  // plugins: [require('daisyui')]
}