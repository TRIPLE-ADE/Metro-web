/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body:['Poppins']
      },
      colors: {
        primary: {
          light: '#C5F8C7',
          dark: '#4CAF50',
          deep: '#609B6C',
        },
      },
    },
  },
  plugins: [],
}