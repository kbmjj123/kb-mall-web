<template>
  <div>
    
    <list-footer></list-footer>
  </div>
</template>
<script setup lang="ts">
interface OrderCellProps{
  id: string,
  createTime: string
}
interface Props{
  orderType: number,
  orderList: OrderCellProps[]
}
const props = defineProps<Props>()
</script>