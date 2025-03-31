import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4CAF50",      // Primary Green
        primaryDark: '#3D914E',  // Primary Dark Green 
        secondary: "#FF9800",    // Secondary Orange
        neutral: "#FFFFFF",      // Neutral White
        softGray: "#F5F5F5",     // Soft Gray
        darkGray: "#2F3E46",     // Dark Gray
        accent: "#FFEB3B",      // Accent Yellow
      },
      backgroundImage: {
        banner: "url('/1.jpg')",
        AboutUsBanner: "url('/about.jpg')",
        ContactUsBanner: "url('/contact.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
