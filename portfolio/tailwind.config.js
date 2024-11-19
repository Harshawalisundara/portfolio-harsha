/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend:{
        fontFamily:{
          'sans':['inter' , 'sans-serif']
        }
      }
    },
  },
  plugins: [tailwindScrollbar],
}