/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./app/**/*.jsx", "./components/**/*.jsx",
    "./node_modules/flowbite/**/*.js"],
  theme: {
   colors: {
          "dark-gold": "#8E793E",
          "light-gold": "#AD974F",
          "intellectual-grey": "#231F20",
          "light-grey": "#EAEAEA",
          "white": "#FFFFFF",
        },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
    require('flowbite/plugin')
  ],
};
