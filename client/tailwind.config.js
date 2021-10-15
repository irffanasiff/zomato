module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato: {
          50: '#fef5f6',
          100: '#fcebec',
          200: '#f8cdd0',
          300: '#f3afb4',
          400: '#eb737c',
          500: '#e23744',
          600: '#cb323d',
          700: '#aa2933',
          800: '#882129',
          900: '#6f1b21',
          // red: '#e23744',
          // pink: '#f47c8A',
          // yellow: '#f8d149',
          // blue: '#2781e7',
          // teal: '#009999',
          // coal: '#1c1c1c',
          // grey: '#4f4f4f',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
