<template>
  <ul class="flex flex-row items-center text-sm text-gray-500 py-3">
    <li v-for="(item, index) in breadCrumbList" :key="index">
      <NuxtLink class="hover:text-red-400 hover:cursor-pointer" :to="item.link">
        {{ item.title }}
      </NuxtLink>
      <span class="px-2" v-if="index < breadCrumbList?.length - 1">></span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface ItemProps{
  id: string,
  title: string,
  link?: string
}
defineProps({
  breadCrumbList: {
    type: Array<ItemProps>,
    required: true
  }
})
</script>
