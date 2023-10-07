<template>
  <div class="flex items-center p-2 border border-[#eeeeee]">
    <Icon v-if="icon" :color="color" :name="icon"></Icon>
    <input :placeholder="placeholder" class="flex-1 h-6 border-0 mx-2">
    <Icon v-if="clearable" name="ion:close-sharp" class="cursor-pointer hover:text-cyan-800"></Icon>
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