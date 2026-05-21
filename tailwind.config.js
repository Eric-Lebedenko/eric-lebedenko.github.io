/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07101f",
        graphite: "#12151b",
        steel: "#1d2430",
        platinum: "#f5f2ea",
        smoke: "#b7b4aa",
        bronze: "#b88a44",
        gold: "#d7b46a",
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
