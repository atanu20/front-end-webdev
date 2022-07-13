/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        move: 'move 10s linear 1s infinite alternate-reverse ',
        blob: 'blob 7s infinite',
      },

      keyframes: {
        move: {
          '0%': {
            right: '-70px',
            top: '300px',
            backgroundColor: 'red',
          },
          '25%': {
            right: '-70px',
            top: '-70px',
            backgroundColor: 'pink',
          },
          '50%': {
            right: '500px',
            top: '-70px',
            backgroundColor: 'yellow',
          },
          '75%': {
            right: '500px',
            top: '300px',
            backgroundColor: 'blue',
          },

          '100%': {
            right: '-70px',
            top: '300px',
            backgroundColor: 'green',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      spacing: {
        big: '40rem',
      },
      colors: {
        brightGreen: '#50D38D',
        darkBlue: '#1C1340',
        lightGreen: 'rgb(88, 232, 141,0.5)',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1400px',
    },
    fontFamily: {
      chivo: ['Roboto', 'sans-serif'],
    },
  },

  plugins: [],
};
