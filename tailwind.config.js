/** @type {import('tailwindcss').Config} */
import global_color from './src/assets/global_style/global_color.jsx'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#4DB9B2',
        'lightGreen':'#F8FAFD'
      }
    },
  },
  plugins: [],
}