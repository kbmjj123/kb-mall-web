<template>
  <div class="relative">
    <CategoryBanner></CategoryBanner>
    <SecondKillSpecial></SecondKillSpecial>
    <PopularRecommend></PopularRecommend>
    <FixRightNav></FixRightNav>
  </div>
</template>

<script lang="ts" setup>
import CategoryBanner from '~/components/mall/CategoryBanner.vue'
import SecondKillSpecial from '~/components/mall/SecondKillSpecial.vue'
import PopularRecommend from '~/components/mall/PopularRecommend.vue'
import FixRightNav from '~/components/mall/FixRightNav.vue'
const api = useApi()
const result = await api.product.getProductList(1)
console.info(result)
</script>
