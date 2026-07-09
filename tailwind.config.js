module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#050810",
        surface: "#0D1117",
        blue: { DEFAULT: "#2563EB", light: "#3B82F6", dark: "#1D4ED8" },
        violet: "#7C3AED",
        gold: "#A16207"
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-20px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } }
      }
    }
  },
  plugins: []
}