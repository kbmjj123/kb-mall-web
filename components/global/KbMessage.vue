<template>
  <div v-if="state">
    我是通知视图
  </div>
</template>

<script setup lang="ts">
  export const MSG_ID = 'kb-message'
  export type MessageType = 'default' | 'success' | 'warning' | 'error'
  interface MessageProps {
    tips?: string,
    type?: MessageType,
    visible?: boolean,
    duration?: number,
    id?: string
  }
  const props = withDefaults(defineProps<MessageProps>(), {
    tips: '',
    type: 'default',
    visible: false,
    duration: 3000,
    id: MSG_ID
  })
  const state = ref(false)
  const title = ref(props.tips)
  const status = ref(props.type)
  const lock = ref(false)
  const timer1 = ref(undefined)
  const timer2 = ref(undefined)
  const show = () => {
    if(!state.value){
      timer1.value && clearTimeout(timer1.value)
      timer2.value && clearTimeout(timer2.value)
      state.value = true
      lock.value = true
      hide()
    }
  }
  const hide = () => {
    timer1.value = setTimeout(() => {
      lock.value = false
    }, props.duration - 300)
    timer2.value = setTimeout(() => {
      state.value = false
      document.body.removeChild(document.querySelector(`#${props.id}`))
    }, props.duration)
  }
</script>