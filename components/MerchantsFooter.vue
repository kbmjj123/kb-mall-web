<template>
  <div>
    <ul>
      <li v-for="(item, index) in linkArray" :key="index">{{ item.title }}</li>
    </ul>
    <section>Copyright © 2004-2023  91temaichang.com</section>
  </div>
</template>

<script lang="ts" setup>
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
  ])
</script>

<style scoped>

</style>