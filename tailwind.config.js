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
        secondary: "#0A79E2",
        neutral: "#444",
        background: "#F9FAFB",
        darkprimary: "#0A79E2",
        darksecondary: "#0902DB",
        darkneutral: "#888",
        darkbackground: "#090D2B",
      },
    },
  },
  plugins: [],
};
