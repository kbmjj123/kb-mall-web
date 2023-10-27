<template>
  <div>
    <!-- 分类面包屑 -->
    <BreadCrumbs :bread-crumb-list="breadCrumbList"></BreadCrumbs>
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
const route = useRoute()
const api = useApi()
const id: string = typeof route.params.id === 'string' ? route.params.id : route.params.id[0]
const { data, pending } = await api.product.getProductDetail(id)
console.info(data)
useHead({
  title: data.value?.title
})
const breadCrumbList = ref([
  {
    id: 123,
    title: '家用电器'
  },
  {
    id: 123,
    title: '个护健康'
  },
  {
    id: 345,
    title: '按摩椅'
  },
  {
    id: 345,
    title: '西屋'
  }
])
</script>
