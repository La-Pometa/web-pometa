const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
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
        light: {
          50: '#fdfdfd',
          100: '#fcfcfc',
          200: '#fafafa',
          300: '#f8f9fa',
          400: '#f6f6f6',
          500: '#f2f2f2',
          600: '#f1f3f5',
          700: '#e9ecef',
          800: '#dee2e6',
          900: '#dde1e3',
        },
        dark: {
          50: '#4a4a4a',
          100: '#3c3c3c',
          200: '#323232',
          300: '#2d2d2d',
          400: '#222222',
          500: '#1f1f1f',
          600: '#1c1c1e',
          700: '#1b1b1b',
          800: '#181818',
          900: '#0f0f0f',
        },
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
