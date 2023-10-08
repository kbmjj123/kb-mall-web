<template>
  <TopNav></TopNav>
  <div class="app-width mx-auto">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import TopNav from '~/components/TopNav.vue'
</script>