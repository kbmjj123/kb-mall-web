<template>
  <div>
    <TopActivityBlock></TopActivityBlock>
    <slot></slot>
    <MerchantsFooter></MerchantsFooter>
  </div>
</template>

<script lang="ts" setup>
import MerchantsFooter from "~/components/MerchantsFooter.vue"
</script>