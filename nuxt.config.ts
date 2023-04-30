// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Verifarmazon Flix+",
      meta: [
        { name: "description", content: "Open Movie Data base UI made for testing/evaluative purposes" }
      ]
    },
  },
  css: ["@/assets/css/global.css"],
  runtimeConfig: { omdbKey: process.env.OMDB_API_KEY }
})
