module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#272727',
          900: '#303030',
          light: 'rgba(255, 255, 255, 0.4)'
        },
        yellow: {
          200: '#F7C23E'
        }
      },
      letterSpacing: {
        widest: "0.125rem"
      },
      fontSize: {
        'xsm': '0.625rem',
        'xs': '0.75rem',
        'l': '2rem',
        'ml': '0.875rem'
      },
      fontFamily: {
        'heading': ['"Roboto"', 'ui-sans-serif'],
        'body': ['Roboto', 'ui-sans-serif']
      },
      //Spacing
      spacing: {
        1000: '64rem',
        500: '36rem',
        400: '22rem'

      },
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
  mode: 'jit'
}