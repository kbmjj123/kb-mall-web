export const userAccountStore = defineStore('accountStore', 
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