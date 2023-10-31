<template>
  <div class="border border-solid border-gray-200 bg-white">
    <section class="text-sm text-gray-700 font-bold bg-gray-200 p-2">华菱空调旗舰店</section>
    <div class="text-xs px-3 pt-2">
      <span class="text-gray-500">{{ $t('product.evaluationTitle') }}</span>
      <span class="text-red-500 ml-2">4.4 高</span>
    </div>
    <div class="text-xs px-3 pt-2">
      <span class="text-gray-500">{{ $t('product.logisticsScore') }}</span>
      <span class="text-red-500 ml-2">4.4 高</span>
    </div>
    <div class="text-xs px-3 p-2">
      <span class="text-gray-500">{{ $t('product.afterService') }}</span>
      <span class="text-red-500 ml-2">4.4 高</span>
    </div>
    <section class="border-t p-3 flex flex-row items-center">
      <span class="text-xs text-center text-gray-600 flex-1 border border-gray-200 px-1 py-2 flex flex-row items-center justify-center">
        <Icon class="mr-1 text-red-500" size="1.5em" name="mdi:storefront-outline"></Icon>
        {{ $t('product.enterShop') }}
      </span>
      <span class="text-xs text-center text-gray-600 flex-1 border border-gray-200 px-1 py-2 ml-2 flex flex-row items-center justify-center">
        <Icon class="mr-1 text-red-500" size="1.5em" name="mdi:store-plus"></Icon>
        {{ $t('product.attendShop') }}
      </span>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>