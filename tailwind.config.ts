import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "728px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
