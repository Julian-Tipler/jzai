/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1fb6ff",
      },
      height: {
        128: "36rem",
      },
      width: {
        128: "24rem",
      },
    },
  },
  plugins: [],
};
