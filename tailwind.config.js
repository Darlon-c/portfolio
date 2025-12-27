/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./*.html",
    "./pages/*.html",
    "./**/*.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cinza-escuro': '#242020',
        'cinza-estranho': '#bfb2b2',
        'azul-carvao': '#3A7CA5'
      }
    },
  },
  plugins: [],
}