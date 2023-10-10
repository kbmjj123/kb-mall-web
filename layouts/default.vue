<template>
  <div class="bg-gray-50 dark:bg-slate-800">
    <TopNav></TopNav>
    <MallSearch></MallSearch>
    <div class="app-width mx-auto">
      <slot></slot>
    </div>
    <CertificateFooter></CertificateFooter>
  </div>
</template>

<script lang="ts" setup>
import TopNav from '~/components/TopNav.vue'
import MallSearch from '~/components/mall/MallSearch.vue'
import CertificateFooter from '~/components/CertificateFooter.vue';
</script>