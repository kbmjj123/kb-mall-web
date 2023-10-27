<template>
  <section class="flex flex-row pt-1 border-t border-dashed mt-2">
    <label class="w-28 text-sm text-gray-400">{{ $t('product.chooseSku') }}</label>
    <ul class="flex flex-row flex-wrap text-xs text-gray-500">
      <li v-for="(item, index) in skuList" :key="index" @click="onChooseSkuItem(item)"
        :class="{ 'border-red-500': item.checked }"
        class="flex flex-row items-center bg-white border border-gray-200 p-1 mb-1 mr-1 hover:bg-slate-400 hover:text-white hover:cursor-pointer">
        <NuxtImg :src="item.skuLogo" class="w-10 h-10" v-if="item.skuLogo"></NuxtImg>
        <span class="ml-1">{{ item.skuName }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  const skuList = ref([
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    },
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    },
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    },
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    },
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    },
    {
      skuId: 123,
      skuName: '银色面板',
      skuLogo: 'https://img13.360buyimg.com/n9/s40x40_jfs/t1/50854/2/18139/467292/62761c74E288b91d4/da31142aa0bf8f20.jpg',
      checked: false
    }
  ])
  const onChooseSkuItem = (item: any) => {
    if(!item.checked){
      item.checked = true
    }
  }
</script>