const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    colors: {
      primary: '#FF6464',
      secondary: '#00A8CC',
      dark: '#21243D',
      light: '#8695A4',
      white: '#fff',
      blue: {
        light: '#EDF7FA'
      },
      red: {
        500: '#cc5050'
      },
      gray: colors.gray,
      indigo: colors.indigo
    },
    fontFamily: {
      body: ['"Heebo"', 'sans-serif']
    },
    boxShadow: {
      DEFAULT: '0 4px 10px 0 rgba(187, 225, 250, .25)'
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#21243D',
            a: {
              color: '#FF6464',
              textDecoration: 'underline'
            },
            h1: {
              textDecoration: 'underline'
            },
            h2: {
              textDecoration: 'underline'
            },
            img: {
              maxWidth: '100%',
              width: '100%'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '856px'
          },
          '@screen xl': {
            maxWidth: '1036px'
          },
          '@screen 2xl': {
            maxWidth: '1210px'
          }
        }
      })
    }
  ]
}
