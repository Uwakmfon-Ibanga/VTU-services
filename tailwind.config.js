/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html', './*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-navy': '#011730',
        'custom-blue': '#1891F3',
        'custom-sky': '#ffc107',
      },
    },
  },
  plugins: [],
}

