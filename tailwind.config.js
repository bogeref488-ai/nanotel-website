/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E4ED8",
          deep: "#1E3A8A",
          green: "#16A34A",
          light: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
};
