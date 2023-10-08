<template>
  <div class="w-full text-center shadow-md">
    <div class="flex justify-between items-center w-4/5 m-auto">
      <div class="p-1 flex items-center">
        <Icon name="emojione-v1:alien" size="4em" class="mr-4"></Icon>
        <span class="font-bold text-3xl">{{ title }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  title: string,
  shadow?: boolean
}>(), {
  shadow: false
})

</script>