/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      primary: "#FE9800",
      hoverColor: "#3E0ABD",
      'gray' : "#21212152",
      'darkgray' : "#21212184"
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "600px",
      // => @media (min-width: 600px) { ... }

      lg: "900px",
      // => @media (min-width: 900px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      backgroundImage: {
        'enquriy': "url('../public/images/bg.jpg')",
      },
      fontFamily : {
        'gordita':['Gordita'],
        'workSans':['WorkSans'],
        'gordita-bold':['Gordita-Bold'],
        'inter':['Inter']
      }
    },
  },
  plugins: [],
};
