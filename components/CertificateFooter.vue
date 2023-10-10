<template>
  <div class="relative  h-20 inset-x-0">
    <!-- <div class="absolute h-20 z-0 inset-x-0"></div> -->
    <div class="relative pt-6">
      <ul class="grid grid-cols-4 items-center text-current app-width mx-auto">
        <li 
        v-for="(item, index) in footerMenuList" :key="index">
          <NuxtLink class="px-6 text-base md:text-lg font-bold hover:text-indigo-700 hover:underline" :to="item.link">{{ item.title }}</NuxtLink>
          <ul class="mt-2">
            <li v-for="(cItem, cIndex) in item.children" :key="cIndex">
              <NuxtLink class="px-6 text-xs font-semibold hover:text-indigo-500 hover:underline"
              :to="cItem.link" target="_blank">{{ cItem.title }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <Copyright></Copyright>
  </div>
</template>

<script lang="ts" setup>
import Copyright from './Copyright.vue';
const footerMenuList = ref([
  {
    title: '分组标题',
    link: '#',
    children: [
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
    ]
  },
  {
    title: '分组标题',
    link: '#',
    children: [
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
    ]
  },
  {
    title: '分组标题',
    link: '#',
    children: [
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
    ]
  },
  {
    title: '分组标题',
    link: '#',
    children: [
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
      {
        title: '子标题一',
        link: '#'
      },
    ]
  },
])
</script>
