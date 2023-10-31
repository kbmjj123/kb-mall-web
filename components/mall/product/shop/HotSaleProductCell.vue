<template>
  <NuxtLink ref="productNode" v-if="item" class="hover:cursor-pointer">
    <div class="relative m-2">
      <LazyNuxtImg :src="item.productIcon" :alt="item.productName" class="w-full"></LazyNuxtImg>
      <div v-if="hoverFlag" class="text-xs text-white bg-gray-700 line-clamp-2 px-2 absolute left-0 right-0 bottom-0">{{ item.productName }}</div>
    </div>
    <p class="text-red-500 text-right">{{ $t('product.priceTarget') }}{{ item.price.toFixed(2) }}</p>
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