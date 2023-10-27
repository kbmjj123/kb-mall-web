<template>
  <section class="flex flex-row p-2">
    <div class="flex flex-row border-gray-200 border mr-2">
      <input class="w-20 text-center text-stone-500 outline-none" v-model="num">
      <div class="flex flex-col border-l">
        <span @click="add"
        class="flex-1 px-4 text-lg font-bold text-gray-950 cursor-pointer hover:bg-gray-200"> + </span>
        <span @click="minus"
        class="flex-1 px-4 text-lg font-bold text-gray-950 border-t hover:cursor-pointer hover:bg-gray-200 disabled:opacity-75"> - </span>
      </div>
    </div>
    <div class="bg-red-400 text-white text-sm p-2 text-center align-middle flex items-center hover:cursor-pointer hover:bg-red-600">
      {{ $t('product.addToCar') }}
    </div>
  </section>
</template>

<script setup lang="ts">
const num = ref(1)
const add = () => {
  num.value += 1
}
const minus = () => {
  if(num.value > 1){
    num.value -= 1
  }
}
</script>