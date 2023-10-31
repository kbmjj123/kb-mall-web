<template>
  <div v-if="smallImgArray && smallImgArray.length > 0">
    <ul class="flex flex-row">
      <li class="border w-8 h-8 mr-1 border-gray-300 hover:border-red-300" 
        @click="onToggleSelected(index)"
        v-for="(item, index) in smallImgArray" :key="index">
        <LazyNuxtImg class="hover:cursor-pointer"
          :src="item" :alt="item"
        ></LazyNuxtImg>
      </li>
    </ul>
    
    <div v-if="showBigImg && currentIndex > -1" class="relative mt-2">
      <LazyNuxtImg :src="bigImgArray[currentIndex]" class="hover:cursor-zoom-out" @click="narrowImg" :alt="bigImgArray[currentIndex]"></LazyNuxtImg>
      <span class="text-white bg-gray-400 rounded-sm opacity-80 absolute left-1 top-1 px-2 py-1 text-xs hover:cursor-pointer hover:bg-gray-500">
        <Icon name="carbon:rotate-counterclockwise"></Icon>
        {{ $t('product.turnLeft') }}
      </span>
      <span class="text-white bg-gray-400 rounded-sm opacity-80 absolute left-20 top-1 px-2 py-1 text-xs hover:cursor-pointer hover:bg-gray-500">
        <Icon name="carbon:rotate-clockwise-alt"></Icon>
        {{ $t('product.turnRight') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const showBigImg = ref(false)
const currentIndex = ref(-1)
interface Props{
  smallImgArray: string[],
  bigImgArray: string[]
}
defineProps<Props>()
const onToggleSelected = (index: number) => {
  currentIndex.value = index
  showBigImg.value = true
}
const narrowImg = () => {
  currentIndex.value = -1
  showBigImg.value = false
}
</script>