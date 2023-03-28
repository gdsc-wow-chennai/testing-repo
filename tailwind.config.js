/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: "#4285F4",
        brightred: "#DB4437",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
