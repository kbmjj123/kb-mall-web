/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/assets/img/bg-login.png')"
      }
    },
  },
  plugins: [require('daisyui')]
}