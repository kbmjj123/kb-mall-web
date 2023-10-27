<template>
  <div class="goods-image w-[400px] h-[400px] relative z-[1]">
    <div
      class="large absolute top-0 left-[412px] w-[400px] h-[400px] bg-no-repeat bg-[#f8f8f8] "
      style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-size: 800px 800px;"
      v-show="isShow"
      :style="[
        { backgroundImage: `url(${images[currIndex]})` },
        bgPosition,
      ]"></div>
    <div class="w-[400px] h-[400px] relative cursor-move" ref="target">
      <NuxtImg class="w-full h-full" :src="images[currIndex]" alt="" />
      <div class="layer w-[200px] h-[200px] absolute left-0 top-0 bg" style="background: rgba(0, 0, 0, 0.2);" v-show="isShow" :style="[position]"></div>
    </div>
    <ul class="small flex">
      <li
        v-for="(img, i) in images"
        :key="i"
        class="w-[68px] h-[68px] cursor-pointer hover:border-2 hover:border-gray-100 mt-1 mr-1"
        :class="{ active: i === currIndex }">
        <img @mouseenter="currIndex = i" :src="img" alt="" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})
const currIndex = ref(0)
// 被监听的区域
const target = ref(null)
// 控制遮罩层和预览图的显示和隐藏
const isShow = ref(false)
// 遮罩层位置坐标
const position = reactive({
  left: 0,
  top: 0,
})
// 右侧预览大图的坐标
const bgPosition = reactive({
  backgroundPositionX: 0,
  backgroundPositionY: 0,
})
const { elementX, elementY, isOutside } = useMouseInElement(target)
watch([elementX, elementY, isOutside], () => {
  // console.info(elementX, elementY, isOutside)
  // 通过标志位控制显示和隐藏
  isShow.value = !isOutside.value
  // 如果鼠标在图片外面就不在计算
  if (isOutside.value) return
  // X方向坐标范围控制
  if (elementX.value < 100) {
    // 左侧
    position.left = 0
  } else if (elementX.value > 300) {
    // 右侧
    position.left = 200
  } else {
    // 中间
    position.left = elementX.value - 100
  }
  // Y方向坐标范围控制
  if (elementY.value < 100) {
    // 左侧
    position.top = 0
  } else if (elementY.value > 300) {
    // 右侧
    position.top = 200
  } else {
    // 中间
    position.top = elementY.value - 100
  }
  // 计算预览大图的移动的距离
  bgPosition.backgroundPositionX = -position.left * 2 + "px"
  bgPosition.backgroundPositionY = -position.top * 2 + "px"
  // 计算遮罩层的位置
  position.left = position.left + "px"
  position.top = position.top + "px"
})
</script>
