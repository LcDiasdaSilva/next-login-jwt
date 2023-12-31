// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "pt-br",
      },
    },
  },
  css: ["~/assets/styles/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  googleFonts: {
    families: {
      Sora: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE,
    },
  },


});
