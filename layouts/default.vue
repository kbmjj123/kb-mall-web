<template>
  <TopNav></TopNav>
  <MallSearch></MallSearch>
  <div class="app-width mx-auto">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import TopNav from '~/components/TopNav.vue'
import MallSearch from '~/components/mall/MallSearch.vue'
</script>