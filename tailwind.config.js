/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#ffeeb3',
          200: '#ffe380',
          300: '#ffd84d',
          400: '#ffcd1a',
          500: '#FFD200',
          600: '#e6bd00',
          700: '#b39400',
          800: '#806a00',
          900: '#4d4000',
        },

      },
    },
  },
  plugins: [],
}