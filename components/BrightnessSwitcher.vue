<template>
  <span class="absolute right-0 mt-1 mr-2 cursor-pointer">
    <Icon @click="toggleMode" color="#333" v-if="'light' === colorMode.preference" name="ic:baseline-dark-mode"></Icon>
    <Icon color="#fff" @click="toggleMode" v-else name="ic:baseline-light-mode"></Icon>
  </span>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
function toggleMode(){
  if('dark' === colorMode.preference){
    colorMode.preference = 'light'
  }else{
    colorMode.preference = 'dark'
  }
}
</script>
