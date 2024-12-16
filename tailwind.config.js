import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Отступы по умолчанию
          xxs: "0.5rem", // Отступы для экранов >= 320px
          xs: "1rem", // Отступы для экранов >= 480px
          sm: "2rem", // Отступы для экранов >= 640px
          md: "4rem", // Отступы для экранов >= 768px
          lg: "6rem", // Отступы для экранов >= 1024px
          xl: "8rem", // Отступы для экранов >= 1280px
        },
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
