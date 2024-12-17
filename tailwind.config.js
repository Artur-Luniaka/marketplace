import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          xs: "16px",
          md: "16px",
          xl: "20px",
        },
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
