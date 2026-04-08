/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          brand: '#e63946',
          dark:  '#c0392b',
        },
        dark: '#0d0d0d',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato:       ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
