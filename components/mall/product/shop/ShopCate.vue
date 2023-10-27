<template>
  <div class="border border-solid border-gray-200 bg-white">
    <section class="text-sm text-gray-700 font-bold bg-gray-200 p-2">{{ $t('product.searchInShop') }}</section>
    <div class="p-2 text-xs flex flex-row items-center">
      <label>关键词</label>
      <input class="border border-gray-200 ml-1 text-xs p-1" placeholder="请输入关键词">
    </div>
    <div class="p-2 text-xs flex flex-row">
      <label>价格</label>
      <div class="flex-1">
        <input class="border border-gray-200 ml-1 text-xs p-1 w-16">
        到
        <input class="border border-gray-200 ml-1 text-xs p-1 w-16">
        <NuxtLink class="mt-1 inline-block border border-gray-200 py-1 px-3 hover:bg-red-500 hover:cursor-pointer hover:text-white">{{ $t('product.search') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>