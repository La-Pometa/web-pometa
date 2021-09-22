module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sset: ['sset', 'Arial'],
      butler: ['Butler', 'Helvetica'],
    },
    extend: {
      colors: {
        primary: '#bfd5c2',
        'main-dark': '#3c3c3b',
      },
      height: {
        100: '32rem',
        120: '36rem',
        screen2: 'calc(100vh - 60px)',
      },
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
