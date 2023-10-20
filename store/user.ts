type UserInfo = {
  userId: string,
}

export const useUserStore = defineStore('userStore', 
() => {
  const userInfo: Ref<UserInfo> = ref<UserInfo>({userId: ''})
  const userId = computed(() => userInfo.value.userId)

  const normalLogin = async (account: string, password: string) => {
    const api = useApi()
    return api.account.normalLogin(account, password)
  }
  return {
    userInfo,
    userId,
    normalLogin
  }
}, {
  persist: {
    storage: persistedState.localStorage
  }
})