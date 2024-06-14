/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        sky : "#00BEFD",
        back : "#00011D",
        blue : "#176FF2",
      },
      borderColor: ['focus'],
      outline: ['focus'],    
    },

  },
  
  plugins: [
    require('@tailwindcss/postcss7-compat'),

  ],
}

