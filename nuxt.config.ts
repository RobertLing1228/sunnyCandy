// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: ['@pinia/nuxt', '@nuxtjs/eslint-module', '@nuxt/image', '@vueform/nuxt',],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      //utf-8 for global use
      charset: "utf-8",
      //Setup device as desktop view
      viewport: "width=device-width, initial-scale=1",
    },
  },
  image: {
    // provider: 'netlify',
    // netlify: {
    //   baseURl: process.env.IMAGES_URL
    // },
  },
  plugins: [
    '~/plugin/gsap.ts',
    '~/plugin/vueform.js',
  ],
})
