<template>
  <section class="absolute top-8 -right-20 bg-white dark:bg-slate-700">
    <ul class="flex flex-col text-sm">
      <li v-for="(item, index) in navList" :key="index" class="border-b border-slate-100 last:border-none">
        <NuxtLink @click="clickNav(item.action)" class="text-stone-600 hover:bg-red-500 hover:cursor-pointer hover:text-white flex flex-col justify-center items-center p-3">
          <Icon v-if="'topIcon' === item.type" :name="item.top" size="1.4em"></Icon>
          <span v-else="'topLabel' === item.type">{{ item.top }}</span>
          <span class="pt-1">{{ item.bottom }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const router = useRouter()
const navList = ref([
  {
    type: 'topLabel',
    top: '秒杀',
    bottom: '专场',
    action: '#'
  },
  {
    type: 'topLabel',
    top: '为你',
    bottom: '推荐',
    action: '#'
  },
  {
    type: 'topIcon',
    top: 'eos-icons:service',
    bottom: '客服',
    action: '/feedback'
  },
  {
    type: 'topIcon',
    top: 'material-symbols:feedback-outline',
    bottom: '反馈',
    action: '/online-service'
  }
])
function clickNav(action:string){
  if(action.indexOf('#') > -1){
    // scroll to the top of node
  }else{
    // router jume
    router.push(action)
  }
}
</script>