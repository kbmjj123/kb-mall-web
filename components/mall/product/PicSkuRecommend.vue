<template>
  <div class="grid grid-cols-[2fr_5fr_2fr] bg-white">
    <PictureBrowse :images="['https://img13.360buyimg.com/n1/jfs/t1/237646/8/529/139477/6538e2bfFbe2f628e/ad1f12c94015f049.jpg', 'https://img13.360buyimg.com/n1/jfs/t1/172363/40/40202/166262/6507b948F4e439f33/850505dfb7c033b7.jpg']"></PictureBrowse>
    <ProductInfo></ProductInfo>
    <RecommendProduct></RecommendProduct>
  </div>
</template>

<script lang="ts" setup>
import PictureBrowse from './PictureBrowse.vue';
import ProductInfo from './ProductInfo.vue';
import RecommendProduct from './RecommendProduct.vue';
</script>
