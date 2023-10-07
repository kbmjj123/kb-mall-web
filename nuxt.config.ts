// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-jsonld'
  ],
  components: {
    global: true,
    dirs: ['~/components/global']
  },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '我是来自于描述' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    }
  },
  debug: true,
  devtools: { enabled: true }
})
