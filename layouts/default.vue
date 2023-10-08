<template>
  <div class="bg-gray-50">
    <TopNav></TopNav>
    <MallSearch></MallSearch>
    <div class="app-width mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNav from '~/components/TopNav.vue'
import MallSearch from '~/components/mall/MallSearch.vue'
</script>