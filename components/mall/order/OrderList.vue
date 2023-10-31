<template>
  <div>
    
    <list-footer></list-footer>
  </div>
</template>
<script setup lang="ts">
import EvaluateOrderCell from "./EvaluateOrderCell.vue"
import NormalOrderCell from "./NormalOrderCell.vue"
defineProps({
  orderType: {
    type: Number,
    default: 0
  },
  orderList: {
    type: Array,
    default: []
  }
})
</script>