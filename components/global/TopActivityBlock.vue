<template>
  <div class="sticky top-0 z-10 text-center bg-[#005FEC]">
    <NuxtImg :src="bannerSrc" class="cursor-pointer mx-auto app-width" fit="contain"
      :placeholder="[50, 25]" loading="lazy"></NuxtImg>
  </div>
</template>

<script lang="ts" setup>
const bannerSrc = ref('https://img11.360buyimg.com/pop/jfs/t1/179084/31/38899/84557/6513fb9dFf0e20e99/a5c066ec687d734f.png')
</script>

<style lang="" scoped>

</style>