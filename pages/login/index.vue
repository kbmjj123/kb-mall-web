<template>
  <CommonHeader :title="$t('account.welcomeLogin')"></CommonHeader>
  <div
    class="flex flex-row-reverse bg-center bg-contain bg-no-repeat items-center h-[70vh] bg-[#E93853] login__block">
    <div class="bg-white w-80 mr-[10%]">
      <div class="tabs text-center border-b p-2">
        <a class="tab text-xl text-red-600 font-bold">{{ $t("account.loginTitle") }}</a>
      </div>
      <KbInput class="mt-8 mx-2" icon="ri:account-circle-fill" color="#666" :placeholder="$t('account.accountLabel')"></KbInput>
      <KbInput class="mt-4 mx-2" icon="ic:baseline-key" color="#666" :placeholder="$t('account.passwordLabel')"></KbInput>
      <div class="text-right mt-3 text-gray-500 mx-2">
        <NuxtLink class="text-xs cursor-pointer hover:underline hover:text-indigo-700" to="/find-pwd">{{ $t("account.forgetPassword") }}</NuxtLink>
      </div>
      <div class="text-white bg-red-500 mx-2 my-2 text-center p-2 cursor-pointer hover:bg-red-700">{{ $t("account.login") }}</div>
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
definePageMeta({
  layout: "account",
})
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
</script>

<style lang="less" scoped>
.login__block {
  background-image: url("~/assets/img/bg-login.png");
}
</style>
