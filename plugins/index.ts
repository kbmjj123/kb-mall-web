import message from './message'
export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      kbmessage: message
    }
  }
})