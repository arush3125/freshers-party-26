/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        neon: {
          pink: "oklch(0.72 0.28 0.5)",
          cyan: "oklch(0.86 0.16 200)",
          purple: "oklch(0.68 0.24 305)",
          blue: "oklch(0.66 0.22 265)",
        },
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(120deg, oklch(0.66 0.22 265), oklch(0.68 0.24 305), oklch(0.72 0.28 0.5))",
      },
      boxShadow: {
        "glow-purple": "0 0 40px oklch(0.68 0.24 305 / 45%)",
        "glow-pink": "0 0 40px oklch(0.72 0.28 0.5 / 45%)",
        "glow-cyan": "0 0 40px oklch(0.86 0.16 200 / 40%)",
      },
      keyframes: {
        "drift-a": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(80px, 60px, 0) scale(1.15)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.1)" },
          "50%": { transform: "translate3d(-90px, -50px, 0) scale(1)" },
        },
        "drift-c": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(60px, -70px, 0) scale(1.2)" },
        },
        "float-up": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-110vh)", opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 24px oklch(0.68 0.24 305 / 45%)" },
          "50%": { boxShadow: "0 0 46px oklch(0.72 0.28 0.5 / 65%)" },
        },
      },
      animation: {
        "drift-a": "drift-a 18s ease-in-out infinite",
        "drift-b": "drift-b 22s ease-in-out infinite",
        "drift-c": "drift-c 26s ease-in-out infinite",
        "float-up": "float-up linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
