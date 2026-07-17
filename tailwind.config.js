/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f5",
          100: "#d6dde6",
          200: "#aebbcc",
          300: "#8598b3",
          400: "#5c7699",
          500: "#3d5a80",
          600: "#2c4361",
          700: "#1f3049",
          800: "#152134",
          900: "#0d1520",
        },
        gold: {
          50: "#fbf6ea",
          100: "#f4e7c5",
          200: "#e9cf8b",
          300: "#ddb75c",
          400: "#c99f3f",
          500: "#b8935a",
          600: "#9c7a3f",
          700: "#7a5f31",
          800: "#584523",
          900: "#382c16",
        },
        cream: "#F8F6F1",
        ink: "#1B2430",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
