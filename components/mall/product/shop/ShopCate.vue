<template>
  <div class="border border-solid border-gray-200 bg-white">
    <section class="text-sm text-gray-700 font-bold bg-gray-200 p-2">{{ $t('product.shopCate') }}</section>
    <ul class="text-xs">
      <li v-for="(pItem, pIndex) in cateList" :key="pIndex">
        <div :class="{'border-b': pItem.expand}"
        class="text-sm bg-gray-200 border-t border-gray-300 px-2 py-1 flex items-center">
          <Icon class="mr-1 hover:cursor-pointer hover:text-red-500" @click="toggleParentNode(pItem, pIndex)" :name="pItem.expand ? 'mdi:chevron-up-circle-outline': 'mdi:chevron-down-circle-outline'"></Icon>
          <NuxtLink class="hover:cursor-pointer hover:text-red-500">{{ pItem.name }}</NuxtLink>
        </div>
        <ul v-if="pItem.expand">
          <li v-for="(cItem, cIndex) in pItem.children" :key="cIndex" class="py-1 pl-6">
            <NuxtLink class="hover:cursor-pointer hover:text-red-500">{{ cItem.name }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const cateList = ref([
  {
    id: "123",
    name: "2023超级新品",
    expand: false,
    children: [
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" }
    ]
  },{
    id: "123",
    name: "2023超级新品",
    expand: false,
    children: [
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" }
    ]
  },{
    id: "123",
    name: "2023超级新品",
    expand: false,
    children: [
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" }
    ]
  },{
    id: "123",
    name: "2023超级新品",
    expand: false,
    children: [
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" },
      { id: "234", name: "超薄今昔小魔盒" }
    ]
  }
])
const toggleParentNode = (pItem: any, pIndex: number) => {
  pItem.expand = !pItem.expand
}
</script>