/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        darkBlue:{
          100: 'rgba(36, 48, 94, 1)',
          200: 'rgba(26, 28, 44, 1)'
        },
        lightBlue: "rgba(168, 208, 230, 1)",
        salmonOrange: "#FF7766",
        lightYellow: "#F8E9A1",
        cardColor: "rgba(256, 256, 256, 0.1)",
      },
      boxShadow: {
        '3xl': '0px 0px 45px rgba(0, 0, 0, 0.25)',
      }
    }, 
  },
  plugins: [],
}
