export const useAccountStore = defineStore('accountStore', 
() => {
  const sessionId = ref('')
  return {
    sessionId
  }
}, {
  persist: {
    storage: persistedState.cookies
  }
})