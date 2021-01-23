module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      rose: {
        light: '#E0D0CA',
        DEFAULT: '#AE6F84',
        dark: '#956867'
      },
      green: {
        light: '#CCD1B8',
        DEFAULT: '#3A6639',
        dark: '#1F381F'
      },
      beige: {
        DEFAULT: '#FFFAF3'
      },
    },
    letterSpacing: {
      wide: '.025em',
      wider: '.3em',
      widest: '.5em',
     },
    //  maxHeight: {
    //   '1/2': '50vw',
    //   '3/4': '75vw',
    //  },
    extend: {
      margin: {
        '-half-screen': '50vw',
        '-half-width': '50%',
      },
      maxWidth: {
        '1/4': '25vw',
        '3/10': '30vw',
        '2/5': '40vw',
        '1/2': '50vw',
        '3/4': '75vw',
       },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
};
