<template>
  <div>
    <ul class="flex flex-row text-sm">
      <li v-for="(item, index) in stateList" :key="index" class="py-1 px-2">
        {{ item.title }}
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts" setup>
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
    title: t('order.waitToPay')
  },
  {
    status: '',
    title: t('order.waitToSend')
  },
  {
    status: '',
    title: t('order.waitToGain')
  },
  {
    status: '',
    title: t('order.alreadyCancel')
  },
  {
    status: '',
    title: t('order.waitToEvaluate')
  }
])
</script>
