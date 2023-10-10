<template>
  <span class="absolute right-0 mt-1 mr-2 cursor-pointer">
    <span @click="toggleLocate"
    class="px-3 py-1 rounded-2xl border mr-3 border-slate-500 text-slate-500 text-xs hover:bg-slate-500 hover:text-slate-50">{{ locale }}</span>
    <Icon @click="toggleMode" color="#333" v-if="'light' === colorMode.preference" name="ic:baseline-dark-mode"></Icon>
    <Icon color="#fff" @click="toggleMode" v-else name="ic:baseline-light-mode"></Icon>
  </span>
</template>

<script setup lang="ts">
// brightness toggle
const colorMode = useColorMode()
function toggleMode(){
  if('dark' === colorMode.preference){
    colorMode.preference = 'light'
  }else{
    colorMode.preference = 'dark'
  }
}
// locates toggle
const { locale } = useI18n()
const toggleLocate = () => {
  if('zhCN' === locale.value){
    locale.value = 'en'
  }else{
    locale.value = 'zhCN'
  }
}
</script>
