<template>
  <div class="fixed bottom-0 h-20 inset-x-0 bg-white">
    <div class="absolute h-20 z-0 inset-x-0"></div>
    <div class="relative z-1 pt-3">
      <ul class="flex justify-center text-current">
        <li class="px-6 text-xs md:text-sm hover:text-indigo-700 hover:underline" v-for="(item, index) in linkArray" :key="index">
          <NuxtLink :to="item.link" :target="item.target">{{ item.title }}</NuxtLink>
        </li>
      </ul>
      <Copyright></Copyright>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Copyright from './Copyright.vue';
  const { t } = useI18n()
  const linkArray = ref([
    {
      title: t('footer.aboutUs'),
      link: '/'
    },
    {
      title: t('footer.concatUs'),
      link: '/'
    },
    {
      title: t('footer.talentRecruitment'),
      link: '/'
    },
    {
      title: t('footer.marchantSettled'),
      link: '/'
    },
    {
      title: t('footer.friendLink'),
      link: '/',
      target: '_blank'
    },
    {
      title: t('footer.mobileMall'),
      link: '/'
    }
  ])
</script>

<style scoped>

</style>