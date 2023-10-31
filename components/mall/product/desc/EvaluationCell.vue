<template>
  <section class="flex flex-row p-2 items-start border-b border-gray-100">
    <div class="flex flex-row items-center mr-20">
      <LazyNuxtImg :src="item.userLogo" :alt="item.userNick" class="rounded-full m-2"></LazyNuxtImg>
      <span class="text-xs text-gray-400">{{ item.userNick }}</span>
    </div>
    <div>
      <Rate></Rate>
      <p class="text-sm text-stone-800 mt-2 mb-2">{{ item.evaluationContent }}</p>
      <PicBrowse :small-img-array="item.evaluationPicList" :big-img-array="item.evaluationPicList"></PicBrowse>
      <p class="text-xs mt-2 text-stone-400">
        <span>{{ item.skuArray.join(' ') }}</span>
        <span class="ml-32">{{ item.createTime }}</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props{
  userLogo: string,
  userNick: string,
  score: number,
  evaluationContent: string,
  evaluationPicList: string[],
  skuArray: string[],
  createTime: string
}
defineProps<{
  item: Props
}>()
</script>