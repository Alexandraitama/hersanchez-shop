// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]

})
