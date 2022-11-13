/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      backgroundImage: {
        webTop: "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
