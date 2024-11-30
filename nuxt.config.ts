// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: { port: 3005 }, // Note: when changing: dont forget to also change the port in the launch.json to make debugging work!
  future: { compatibilityVersion: 4 },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  sourcemap: {
    server: true,
    client: true,
  },

  // For more infos, see: https://i18n.nuxtjs.org/docs/getting-started/usage
  i18n: {
    vueI18n: "./i18n/config.ts",
    strategy: "prefix_except_default",
    lazy: true,
    defaultLocale: "de", // default locale of the project for Nuxt pages and routings
    langDir: ".", // use i18n dir as root
    locales: [
      {
        code: "en",
        language: "en-GB",
        file: "en.ts",
      },
      {
        code: "de",
        language: "de-DE",
        file: "de.ts",
      },
    ],
  },
});
