/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./*.html",
    "./pages/*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cinza-escuro': '#242020',
        'cinza-estranho': '#bfb2b2'
      }
    },
  },
  plugins: [],
}