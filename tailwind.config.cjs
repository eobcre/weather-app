/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255, 255, 255, 0.14)',
      },
      boxShadow: {
        xl: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
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
