<template>
  <section>
    <div class="flex flex-row items-center justify-center">
      <Loading v-if="status === LoadingStatus.loading" class="mr-2"></Loading>
      <span class="text-sm text-stone-500">
        {{ LoadingStatus.loading === status ? $t('tip.loading') : $t('tip.noMoreTip') }}
      </span>
    </div>
    <Empty v-if="noneFlag"></Empty>
  </section>
</template>

<script setup lang="ts">
import Loading from '~/components/icons/Loading.vue'
import Empty from '~/components/icons/Empty.vue'
enum LoadingStatus{
  loading = 1,
  end = 2
}
interface Props{
  status: LoadingStatus,
  noneFlag: boolean
}
const props = withDefaults(defineProps<Props>(), {
  status: LoadingStatus.loading,
  noneFlag: false
})

</script>