/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      flex: {
        100: "1 0 0"
      },
      height: { 35: "35rem" },
      width: { 33: "33.875rem"},
      colors: {
        border: "hsl(var(--border))",
        skin: {
          base: "var(--color-brand-base)",
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          gray: "var(--color-brand-gray)",
        }
      },
      borderRadius: {
        md: "var(--border-radius)"
      },
      padding: {
        pb: "var(--padding-button)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}