<template>
  <div class="bg-white dark:bg-slate-800 shadow-sm">
    <div class="flex justify-between mx-auto app-width px-2 py-5">
      <div class="flex flex-1 justify-center">
        <Icon name="emojione-v1:alien" size="4em"></Icon>
      </div>
      <div class="flex-[5]">
        <section class="flex mx-10">
          <div class="flex flex-1 border-2 border-red-500">
            <input placeholder="神舟笔记本" class="flex-1 border-none outline-none text-xs px-3">
            <span class="px-5 py-1 bg-red-500"><Icon name="uil:search" color="white"></Icon></span>
          </div>
          <NuxtLink target="_blank" to="/car"
          class="flex items-center ml-4 px-5 bg-white border-[#eee] dark:bg-slate-800 border text-red-500 hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900">
            <div class="mr-4 relative">
              <Icon name="uil:shopping-cart"></Icon>
              <span class="absolute text-white rounded-xl px-1 py bg-red-500 text-xs -right-[0.5rem]">2</span>
            </div>
            <span class="text-xs">购物车</span>
          </NuxtLink>

        </section>
        <ul class="flex flex-nowrap mt-2 mx-10">
          <li v-for="(item, index) in hotKeyList" :key="index" class="text-xs text-gray-400 mr-2 hover:text-red-500 hover:underline">
            <NuxtLink :class="item.activityClass" to="/product/list" target="_blank">{{ item.key }}</NuxtLink>
          </li>
        </ul>
        <ul class="flex flex-nowrap mt-6">
          <li v-for="(item, index) in channelList" :key="index" class="inline-block px-5 hover:cursor-pointer dark:text-slate-50">
            <NuxtLink class="hover:text-red-500">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const hotKeyList = ref([
  {
    key: '必胜客开业',
    activityClass: 'text-red-500'
  },
  {
    key: '手机精选'
  },
  {
    key: '努比亚'
  },
  {
    key: '必胜客开业',
    activityClass: 'text-red-500'
  },
  {
    key: '手机精选'
  },
  {
    key: '努比亚'
  },
  {
    key: '必胜客开业',
    activityClass: 'text-red-500'
  },
  {
    key: '手机精选'
  },
  {
    key: '努比亚'
  }
])
const channelList = ref([
  {
    title: '超市',
    link: '/'
  },
  {
    title: '秒杀',
    link: '/'
  },
  {
    title: '家电',
    link: '/'
  },
  {
    title: '电脑数码',
    link: '/'
  },
  {
    title: '生鲜',
    link: '/'
  },
  {
    title: '便宜包邮',
    link: '/'
  }
])
</script>
