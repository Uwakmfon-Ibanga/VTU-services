/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-sky': '#F6F9FF',
        'custom-blue': '#1891F3',
        'custom-navy': '#011730',
      },
      // container: {
      //   center: true,
      //   padding:
      //   {
      //     DEFAULT: { px: '2', py: '400px' },
      //     sm: { px: '8' },
      //     // lg: { px: '8rem', py: '12rem', }, 
      //     // xl: { px: '10rem', py: '14rem', }, 
      //     // '2xl': { px: '12rem', py: '16rem', },
      //   },
      //   gap: {
      //     DEFAULT: '700',
      //     xl: '150px'
      //   },
      //   display: 'flex'
      // },
      plugins: [],
    }
  }
}
