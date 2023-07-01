import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      ice: "#f0f0ff",
      kuro: "#0c0c0f",
      gray: colors.gray,
      purple: colors.purple,
      slate: colors.slate,
      sky: colors.sky,
    }
  },
  plugins: [],
}

