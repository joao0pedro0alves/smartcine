/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        serif: 'Philosopher, serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)',
        'shadow-gradient': 'linear-gradient(190deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.9) 100%);',
        'primary-gradient': 'linear-gradient(190deg, rgba(21,101,192,0.1) 0%, rgba(21,101,192,0.9) 100%);',
        'secondary-gradient': 'linear-gradient(190deg, rgba(196,22,28,0) 0%, rgba(196,22,28,0.9) 100%);',
        'colored-gradient': 'linear-gradient(190deg, rgba(196,22,28,0.8) 0%, rgba(21,101,192,0.5) 100%);',
      },

      colors: {

        yellow: {
          200: "#FFE234",
          500: "#F3C200"
        },

        blue: {
          500: '#1565C0'
        },

        gray: {
          100: '#E1E1E6',
          200: '#F9FAFC',
          300: '#8D8D99',
          600: '#323238',
          700: '#333333',
          800: '#18181B',
          900: '#121214',
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
