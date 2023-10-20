import { useAccountStore } from "~/store/account"

export default defineNuxtRouteMiddleware((to, from) => {
  const accountStore = useAccountStore()
  if(to.meta.needLogin){
    // target path need login state!
    if(accountStore.$state.sessionId){
      navigateTo(to)
    }else{
      // account no login, --> jump to login page
      const target = to.fullPath
      navigateTo(`/login?target=${target}&from=${from.fullPath}`)
    }
  }else{
    navigateTo(to)
  }
})