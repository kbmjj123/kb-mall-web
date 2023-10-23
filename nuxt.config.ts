// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'dayjs-nuxt',
    '@nuxt/image',
    'nuxt-jsonld'
  ],
  components: {
    global: true,
    dirs: ['~/components/global']
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
  devtools: { enabled: true },
  // as below are setting for modules
  colorMode: {
    classPrefix: '',
    classSuffix: ''
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  imports: {
    dirs: ['store']
  },
  build: {
    // this issue appear at: https://github.com/prazdevs/pinia-plugin-persistedstate/issues/236
    transpile: ['pinia-plugin-persistedstate'],
  },
  runtimeConfig: {
    public: {
      apiHost: process.env.NUXT_PUBLIC_API_PRODUCT
    }
  }
})