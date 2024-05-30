// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/content",
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: true,
      }
  }],
    "@nuxtjs/google-fonts"
  ],
  css: ["~/assets/css/main.css"],
});