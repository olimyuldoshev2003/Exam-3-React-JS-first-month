/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        sm:{ 'max':'340px'},
  
        md: {'max':'768px'},
  
        lg: {'max':'1024px'},

        xl: {'max':'1280px'},
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

