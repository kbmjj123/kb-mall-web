<template>
  <div class="flex items-center border border-[#eeeeee]">
    <Icon v-if="icon" :color="color" :name="icon" class="bg-gray-100 p-1" size="2em"></Icon>
    <input :placeholder="placeholder" class="flex-1 h-6 border-0 mx-2 placeholder-gray-300 text-sm border-none outline-none">
    <Icon v-if="clearable" name="uil:times-circle" class="cursor-pointer hover:text-cyan-800 mr-1"></Icon>
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
  color?: string,
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