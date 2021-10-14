module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato: {
          red: '#e23744',
          pink: '#f47c8A',
          yellow: '#f8d149',
          blue: '#2781e7',
          teal: '#009999',
          coal: '#1c1c1c',
          grey: '#4f4f4f',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
