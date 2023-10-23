import { useAccountStore } from "~/store/account"
import { RouteLocationNormalized } from "#vue-router" 

const addPageTitle = (to: RouteLocationNormalized) => {
  const { t } = useI18n()
  to.meta.title = to.meta.title ? `${t('app.name')}-${to.meta.title}` : t('app.name')
}

export default defineNuxtRouteMiddleware((to, from) => {
  // append every page title in html title node!
  addPageTitle(to)
  
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