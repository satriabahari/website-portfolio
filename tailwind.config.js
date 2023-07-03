/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#292929",
        secondary: "#083747",
        neutral: "#444",
        background: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
