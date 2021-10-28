const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    safelist: [
      'grid',
      'md:grid-cols-2',
      'w-full',
      'h-full',
      'md:row-span-2',
      'justify-items-center',
      'items-center',
      'gap-3',
      'object-cover',
      'dark:block',
      'dark:hidden',
      'mmd:aspect-w-1',
      'mmd:aspect-h-1',
      'mmd:min-h-screen',
      'mmd:row-start-1',
      'mmd:row-start-2',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      m2xl: { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      mxl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mlg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mmd: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      msm: { max: '639px' },
      ...defaultTheme.screens,
    },
    fontFamily: {
      sset: ['Sukhumvit Set', 'Arial'],
      butler: ['Butler', 'Helvetica', 'Arial'],
    },
    extend: {
      colors: {
        primary: '#bfd5c2',
        secondary: '#8d9d8f',
        'main-dark': '#3c3c3b',
      },
      height: {
        100: '32rem',
        110: '34rem',
        120: '36rem',
        screen2: 'calc(100vh - 60px)',
      },
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
