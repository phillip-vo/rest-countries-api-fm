/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-dm": "hsl(209, 23%, 22%)",
        "very-dark-blue-dm": "hsl(207, 26%, 17%)",
        "very-dark-blue-lm": "hsl(200, 15%, 8%)",
        "dark-gray-lm": "hsl(0, 0%, 52%)",
        "very-light-gray-lm": "hsl(0, 0%, 98%)",
      },
      opacity: {
        10: "0.0325",
      },
      boxShadow: {
        outline: "0 0 5px 2px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        "2xl": "1440px",
      },
      padding: {
        "2xl": "20rem",
      },
    },
  },
  plugins: [],
};
