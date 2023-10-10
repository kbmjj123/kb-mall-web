<template>
  <div class="bg-gray-200 dark:bg-slate-700 flex justify-center relative">
    <section class="flex justify-between app-width">
      <!-- location block -->
      <div class=""></div>
      <!-- mall functions -->
      <div class="text-gray-400 text-xs px-1 py-2">
        <NuxtLink class="cursor-pointer pr-2 hover:underline" to="/login">你好，请登录</NuxtLink>
        <NuxtLink class="cursor-pointer hover:underline text-red-400" to="/register">免费注册</NuxtLink>
        <span class="px-3">|</span>
        <NuxtLink class="cursor-pointer hover:underline" to="/order/list">我的订单</NuxtLink>
        <span class="px-3">|</span>
        <NuxtLink class="cursor-pointer hover:underline" to="/merchant/settled">商家服务</NuxtLink>
        <span class="px-3">|</span>
        <NuxtLink class="cursor-pointer hover:underline">手机商城</NuxtLink>
      </div>
    </section>
    <BrightnessSwitcher></BrightnessSwitcher>
  </div>
</template>

<script lang="ts" setup>
import BrightnessSwitcher from '~/components/BrightnessSwitcher.vue'
</script>