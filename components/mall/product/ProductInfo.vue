<template>
  <div class="px-3">
    <p class="text-gray-900 font-bold pb-1">西屋（Westinghouse） S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用 幻影灰</p>
    <p class="text-xs text-red-300 pb-1">11.11活动仅需11599元，咨询客服领券可再减；送颈椎按摩器+头部按摩器；12期免息，多仓速发，免费送货上门，3年整机质保+5年电机保，全国联保</p>
    <section class="bg-red-300 text-white px-2 py-1">
      真便宜，购放心
    </section>
    <div class="bg-gray-100 relative p-1">
      <div class="flex items-center my-2">
        <label class="text-sm text-gray-500 w-20">{{ $t('product.mallPrice') }}</label>
        <span class="text-red-600">¥<span class="text-xl">16999.00</span></span>
      </div>
      <Coupon></Coupon>
      <div class="absolute top-3 right-3 flex flex-col justify-center items-center border-l border-gray-300 pl-4">
        <span class="text-gray-400 text-xs">{{ $t("product.totalComment") }}</span>
        <span class="text-blue-400 text-base hover:text-red-400 hover:cursor-pointer">200+</span>
      </div>
    </div>
    <ChooseSku></ChooseSku>
    <AddToCar></AddToCar>
  </div>
</template>

<script setup lang="ts">
import Coupon from './Coupon.vue'
import ChooseSku from './ChooseSku.vue'
import AddToCar from './AddToCar.vue'
</script>