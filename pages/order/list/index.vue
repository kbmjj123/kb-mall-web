<template>
  <div>
    <ul class="flex flex-row text-sm p-2">
      <li v-for="(item, index) in stateList" :key="index" class="relative py-1 px-2 mr-4 hover:cursor-pointer hover:text-red-500">
        <span class="text-xs">{{ item.title }}</span>
        <span v-if="item.num && item.num > 0" class="text-white bg-red-500 rounded-lg absolute right-1 -top-1 w-4 h-4 text-center text-xs">{{ item.num }}</span>
      </li>
    </ul>
    <OrderCellList>

    </OrderCellList>
  </div>
</template>

<script lang="ts" setup>
import OrderCellList from '~/components/mall/order/OrderCellList.vue'
import NormalOrderCell from '~/components/mall/order/NormalOrderCell.vue';
import EvaluateOrderCell from '~/components/mall/order/EvaluateOrderCell.vue';
const { t } = useI18n()
definePageMeta({
  needLogin: true
})
const stateList = ref([
  {
    status: '',
    title: t('order.allOrder')
  },
  {
    status: '',
    title: t('order.waitToPay'),
    num: 1
  },
  {
    status: '',
    title: t('order.waitToSend'),
    num: 20
  },
  {
    status: '',
    title: t('order.waitToGain'),
    num: 3
  },
  {
    status: '',
    title: t('order.alreadyCancel'),
    num:4
  },
  {
    status: '',
    title: t('order.waitToEvaluate'),
    num: 5
  }
])
</script>
