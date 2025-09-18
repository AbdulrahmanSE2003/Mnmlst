/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // يلقط أي component جوا src
  ],
  darkMode: "class", // ✅ تفعيل الـ dark mode بالـ class
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#A70606",   // اللون الأساسي الأحمر
          brown: "#754F44", // بني
          gray: "#A9A9A9",  // رمادي
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // خط افتراضي
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
