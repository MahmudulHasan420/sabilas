/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pop': ['Poppins'],
      'rob' : ['Roboto'],    
   
    },
    extend: {
      fontSize: {
        '44': '44px',
      },
      colors: {
        'main': '#D2DCDD',
        'blue': '#33DEE9',
      },
      spacing: {
        '60': '60px',
        '21' : '21px',
        '30%' : '30%'
      },
      maxWidth: {
        'container': '1440px',
      },
    },
  },
  plugins: [],
}

