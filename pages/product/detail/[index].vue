<template>
  <div>
    商品详情
    <!-- 分类面包屑 -->
    <BreadCrumbs></BreadCrumbs>
    <!-- 商品信息区域(左中右)：商品图区域(左)、商品信息(中)、推荐商品(右) -->
    <PicSkuRecommend></PicSkuRecommend>
    <!-- 商品店铺+详情区域(左右)：商品店铺(左)、详情区域(右) -->
    <ShopAndDesc></ShopAndDesc>
    <!-- 其他悬浮相关元素 -->
  </div>
</template>

<script lang="ts" setup>
import PicSkuRecommend from '~/components/mall/product/PicSkuRecommend.vue'
import ShopAndDesc from '~/components/mall/product/ShopAndDesc.vue'
</script>

<style lang="" scoped>

</style>