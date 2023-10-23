<template>
  <div class="bg-gray-50 dark:bg-slate-800">
    <TopActivityBlock></TopActivityBlock>
    <slot></slot>
    <MerchantsFooter></MerchantsFooter>
  </div>
</template>

<script lang="ts" setup>
import MerchantsFooter from "~/components/MerchantsFooter.vue"
</script>