/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#b8d8ff",
          300: "#86bbff",
          400: "#4e96ff",
          500: "#2f74ff",
          600: "#1f56db",
          700: "#1a43b0",
          800: "#173a8f",
          900: "#142f73",
        },
        ink: {
          50: "#f7f9fc",
          100: "#edf2f7",
          200: "#d7e0ea",
          300: "#b4c2d6",
          400: "#7f94b3",
          500: "#556b8a",
          600: "#3d516b",
          700: "#2c3d54",
          800: "#1f2e40",
          900: "#162231",
        },
        accent: {
          500: "#14b8a6", // teal
          600: "#0d9488",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16,24,40,.08)",
        lift: "0 18px 50px rgba(16,24,40,.14)",
      },
    },
  },
  plugins: [],
};