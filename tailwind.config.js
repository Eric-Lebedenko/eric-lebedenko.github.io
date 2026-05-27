/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        graphite: "#080808",
        steel: "#111111",
        platinum: "#ffffff",
        smoke: "#b8b8b8",
      },
      fontFamily: {
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 28px 80px rgba(0, 0, 0, 0.42)",
      },
    },
  },
  plugins: [],
};
