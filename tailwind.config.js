/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        wqhd: "2450px",
      },
    },
    fontFamily: {
      header: ["caveat"],
    },
  },
  plugins: [require("daisyui")],
}
