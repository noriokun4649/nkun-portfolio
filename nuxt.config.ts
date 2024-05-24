// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxtjs/robots", "nuxt-purgecss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      title: "nkun.dev",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "noriokun4649の紹介サイトです" },
      ],
    },
  },
  ui: {
    icons: ['simple-icons']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: false,
  },
  colorMode: {
    dataValue: "theme",
  },
  googleFonts: {
    families: {
      Caveat: true,
    },
  },
})
