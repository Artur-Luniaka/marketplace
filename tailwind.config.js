import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        "screen-60": "60vw", // Создаём класс w-screen-70
      },
      animation: {
        sweep: "sweep 2s linear infinite",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(20%)" },
        },
      },
      container: {
        center: true,
        screens: {
          xs: "100%",
          md: "768px",
          xl: "1280px",
        },
        padding: "16px",
      },
    },
    screens: {
      xs: "320px",
      md: "768px",
      xl: "1280px",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
