<template>
  <NuxtLink ref="productNode" class="hover:text-red-500" to="/product/detail/a8e71e4ed2a844a89111affec178fd9f" target="_blank">
    <div class="flex justify-center items-center p-8">
      <NuxtImg :src="item.productIcon" :class="[hoverFlag ? 'scale-[1.2]' : '', 'transition-all']"></NuxtImg>
    </div>
    <div class="text-xs mx-3 line-clamp-2">{{ item.productName }}</div>
    <div class="mx-3 mt-1 mb-2 font-medium">¥{{ item.price }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props{
  productId: string,
  productName: string,
  productIcon?: string,
  price: number,
  hoverFlag?: boolean
}
defineProps<{
  item: Props
}>()
const productNode = ref(null)
const hoverFlag = ref(false)
onMounted(() => {
  useHover(productNode.value, hoverFlag)
})
</script>
