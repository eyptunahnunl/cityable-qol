/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#414141",

        primaryBlue: "#206CC9",
        lineer: "#56BAE1",
        secondary: "#48BBE9",
        grey: "#999999",
      },
      height: {
        vh: "100vh",
      },
      width: {
        vh: "10000vh",
      },
    },
  },
  plugins: [],
};
