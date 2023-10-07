<template>
  <div class="inline-flex">
    <Icon v-if="icon" :name="icon"></Icon>
    <input :placeholder="placeholder" class="flex-1">
    <Icon v-if="clearable" name="ion:close-sharp"></Icon>
  </div>
</template>

<script lang="ts" setup>
// KbInput component properties!
interface Props {
  border?: boolean,
  borderRadius?: number,
  placeholder?: string,
  clearable?: boolean,
  autofocus?: boolean,
  disabled?: boolean,
  icon: string
}
const props = withDefaults(defineProps<Props>(), {
  border: true,
  borderRadius: 0,
  clearable: true,
  autofocus: false,
  disabled: false,
  icon: 'uil:github'
})
</script>