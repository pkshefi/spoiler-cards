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
        widest: "0.125em"
      },
      fontSize: {
        'xsm': '0.625em'
      },
      fontFamily: {
        'heading': ['"Roboto"', 'ui-sans-serif'],
        'body': ['Roboto', 'ui-sans-serif']
      }
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
