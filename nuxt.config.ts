// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-purgecss",
    "nuxt-microcms-module",
  ],
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
    icons: ["simple-icons"],
  },
  purgecss: {
    whitelist: ["data-theme", "img"],
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
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: process.env.NODE_ENV === "production" ? "server" : "all",
  },
  image: {
    imgix: {
      baseURL: "",
    },
  },
})
