<template>
  <div class="">
    <ul class="flex flex-row border-b border-red-500">
      <li v-for="(item, index) in liMenuList" :key="index" 
        :class="[item.active ? 'text-white': '', item.active ? 'bg-red-500' : '', item.active? 'hover:text-white': '']"
        class="text-sm text-gray-500 py-2 px-4 mr-1 hover:cursor-pointer hover:text-red-500">{{ item.title }}</li>
    </ul>
    <!-- <component :is="currentComponent"></component> -->
    <ProductIntroduce :html="descHtml"></ProductIntroduce>
    <ProductEvaluation></ProductEvaluation>
  </div>
</template>
<script setup lang="ts">
import ProductIntroduce from './ProductIntroduce.vue'
import ProductEvaluation from './ProductEvaluation.vue'
const { t } = useI18n()
const liMenuList = ref([
  {
    title: t('product.productDesc'),
    active: true,
    component: ProductIntroduce
  },
  {
    title: t('product.evaluationTitle'),
    active: false,
    component: ProductEvaluation
  }
])
// const currentComponent = ref(ProductIntroduce)
const descHtml = ref('<div id="J-detail-content" style="font-family: pingfangSC;font-size: 14px;color: #757575;"><p><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/187035/10/31674/71970/63cd06fcF2f85f2bf/5d0ef517b85915e2.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/60734/12/24481/63465/6423eb6aF504e47a8/649a82557dcef4b0.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/182056/8/34295/157528/642d414eFad8e230d/9c696a3911e5f986.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/193255/27/33462/35287/642d414eF68d3e931/5007271e8f14f796.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/208334/26/16916/80807/642d414eF13d05f82/86ba75bf1a66835f.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/141533/4/36068/108882/642d414eFb9f344c7/20f80bf7450b98ab.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/180337/11/34042/117423/642d414fF2ab6413f/2c5c3681520647d8.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/216929/28/27576/106166/642d414fF6415b01e/3cc2d3f0b6d81640.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/69736/14/23412/83061/642d415eF5825936d/fbbbb5459b3b5e7a.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/163274/39/32586/135639/642d415eFfef39879/85f00014d119d043.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/140026/5/35592/93276/642d415eF15a41258/7aed3df5eb35204c.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/169131/22/36690/90500/642d415fFa3d3d1cb/37d9d03051dc0899.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/131963/16/35156/132217/642d415fF3fb0cbc0/8da362b9b53ac663.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/128795/40/31843/87866/642d415fF6e24f677/52176e9ee4902ce4.jpg"><img style="width: auto; height: auto; max-width: 100%;" class="" src="//img10.360buyimg.com/imgzone/jfs/t1/73039/36/25986/58268/642d416cF1123b857/2cbecbe32d6449fa.jpg"></p><p><br></p><br></div>')
</script>