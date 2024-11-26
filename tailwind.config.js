/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'],
        raleway: ['Raleway', 'sans-serif']
      },
    },

  },
  plugins: [
    daisyui,
  ],
}

