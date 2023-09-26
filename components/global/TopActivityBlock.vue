<template>
  <div>
    <NuxtImg :src="bannerSrc" 
      :placeholder="[50, 25]" loading="lazy"></NuxtImg>
  </div>
</template>

<script lang="ts" setup>
const bannerSrc = ref('https://img13.360buyimg.com/pop/jfs/t1/191631/7/39173/68287/65128ae3Fe215a02d/379e647c52ca9269.jpg')
</script>

<style lang="" scoped>

</style>