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
        background: "#1c1917", // stone-900
        surface: "#292524", // stone-800
        accent: {
          DEFAULT: "#ea580c", // orange-600
          hover: "#c2410c", // orange-700
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
