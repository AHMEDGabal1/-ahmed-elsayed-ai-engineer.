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
        background: "#0f172a", // slate-900
        surface: "#1e293b", // slate-800
        accent: {
          DEFAULT: "#3b82f6", // blue-500
          hover: "#2563eb", // blue-600
        }
      },
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", "system-ui", "sans-serif"],
        display: ["Inter", "var(--font-display)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
