/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        drkColor: "rgb(8,12,20)",
        mainColor: "rgb(249,144,37)",
        secondaryColor: "rgb(3,112,135)",
      },
      boxShadow: {
        custom: "rgb(38, 57, 77) 0px 6px 30px -10px;",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
