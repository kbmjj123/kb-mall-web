<template>
  <section v-html="html" class="w-full"></section>
</template>

<script setup lang="ts">
defineProps<{
  html?: string
}>()
</script>