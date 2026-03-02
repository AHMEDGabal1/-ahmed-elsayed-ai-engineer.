import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B0F19",
        accent: {
          blue: "#3B82F6",
          purple: "#8B5CF6",
          cyan: "#22D3EE"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.75)"
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.18) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(139,92,246,0.18) 0, transparent 55%), radial-gradient(circle at 0% 100%, rgba(34,211,238,0.15) 0, transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
