// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    'nuxt-jsonld'
  ],
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
  // 预加载统一的main.css样式文件
  css: [
    '@/styles/main.css'
  ],
  debug: true,
  devtools: { enabled: true }
})
