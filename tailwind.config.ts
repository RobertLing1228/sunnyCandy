import { transform } from "typescript";
// const prefixer  = require('@vueform/vueform/tailwind-prefixer')
import obj_prefixer from '@vueform/vueform/tailwind-prefixer'
const prefixer = obj_prefixer

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./vueform.config.ts", // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
  ],
  theme: {
    extend: {
      form: (theme: any) => ({
        primary: '#f97316',

      }),
    },
  },
  plugins: [require('@vueform/vueform/tailwind'),],
}

