/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0190FF",
      },
      height: {
        128: "40rem",
      },
      width: {
        128: "26rem",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
