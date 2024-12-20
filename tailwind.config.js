import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
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
