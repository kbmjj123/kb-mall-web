<template>
  <div class="kb-modal">
    <div class="mask"></div>
    <div class="kb-body">
      <div class="kb-title"></div>
      <div class="kb-content"></div>
      <div class="kb-footer">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ModalProps{
  title?: string,
  content?: string,
  okTxt?: string,
  onOk?: Function,
  cancelTxt?: string,
  onCancel?: Function,
  singleTxt?: string
}
const props = withDefaults(defineProps<ModalProps>(), {

})
</script>