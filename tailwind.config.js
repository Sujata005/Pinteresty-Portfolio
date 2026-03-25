/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#faf8ff',
          100: '#f5f0ff',
          200: '#e9deff',
          300: '#d4c4ff',
          400: '#c8b6ff',
          500: '#b8a2ff',
          600: '#9f84ff',
          700: '#8066ff',
          800: '#6248d8',
          900: '#3d2878',
        },
        'accent-purple': '#b8a2ff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
