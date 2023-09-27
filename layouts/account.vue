<template>
  <div>
    <div>我是账号的公共头部视图</div>
    <slot></slot>
    <MerchantsFooter></MerchantsFooter>
  </div>
</template>

<script lang="ts" setup>
import MerchantsFooter from "~/components/MerchantsFooter.vue"
</script>

<style lang="" scoped>

</style>