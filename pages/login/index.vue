<template>
  <CommonHeader :title="$t('account.welcomeLogin')"></CommonHeader>
  <div
    class="flex flex-row-reverse bg-center bg-contain bg-no-repeat items-center h-[70vh] bg-[#E93853] login__block">
    <div class="bg-white w-80 mr-[10%]">
      <div class="tabs text-center border-b p-2">
        <a class="tab text-xl text-red-600 font-bold">{{ $t("account.loginTitle") }}</a>
      </div>
      <KbInput v-model="account" class="mt-8 mx-2" icon="ri:account-circle-fill" color="#666" :placeholder="$t('account.accountLabel')"></KbInput>
      <KbInput v-model="password" class="mt-4 mx-2" icon="ic:baseline-key" color="#666" :placeholder="$t('account.passwordLabel')"></KbInput>
      <div class="text-right mt-3 text-gray-500 mx-2">
        <NuxtLink class="text-xs cursor-pointer hover:underline hover:text-indigo-700" to="/find-pwd">{{ $t("account.forgetPassword") }}</NuxtLink>
      </div>
      <div class="text-white bg-red-500 mx-2 my-2 text-center p-2 cursor-pointer hover:bg-red-700" @click="loginAction">{{ $t("account.login") }}</div>
      <div class="bg-gray-100 p-2 flex relative items-center">
        <Icon v-for="(item, index) in socialList" :key="index" :name="item.icon" size="1.5em" class="cursor-pointer mr-2 relative after:border-r after:absolute after:border-current"></Icon>
        <NuxtLink class="absolute right-2 text-sm text-red-500 cursor-pointer hover:underline" to="/register">
          {{ $t('account.registerRightNow') }}
          <Icon name="uil:arrow-circle-right"></Icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
definePageMeta({
  layout: "account",
  title: t('account.welcomeLogin')
})
const account = ref('')
const password = ref('')
let target: string, from: string = ''
const socialList = ref([
  {
    icon: 'uil:github',
    name: 'github'
  },
  {
    icon: 'uil:twitter',
    name: 'twitter'
  },
  {
    icon: 'uil:google',
    name: 'google'
  },
  {
    icon: 'uil:facebook',
    name: 'facebook'
  }
])
const isInputCorrect = (): boolean => {
  if(!account.value){
    alert(t('tip.inputAccount'))
    return false
  }
  if(!password.value){
    alert(t('tip.inputPassword'))
    return false
  }
  return true
}
const loginAction = async () => {
  if(isInputCorrect()){
    const userStore = useUserStore()
    const { data, pending, error, refresh } = await userStore.normalLogin(account.value, password.value)
  }
}
onMounted(() => {
  const route = useRoute()
  if(route.query){
    target = route.query.target?.toString()!
    from = route.query.from?.toString()!
  }
})
const onLoginSuccess = () => {
  if(target){
    return navigateTo(target, {
      replace: true
    })
  }else{
    return navigateTo('/', { replace: true })
  }
}

</script>

<style lang="less" scoped>
.login__block {
  background-image: url("~/assets/img/bg-login.png");
}
</style>
