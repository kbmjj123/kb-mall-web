<template>
  <CommonHeader :title="$t('account.welcomeRegister')">
    <span class="text-base text-gray-400">
      {{ $t('account.existAccount1') }}
      <NuxtLink class="text-red-400 cursor-pointer hover:underline">{{ $t('account.existAccount2') }}<Icon name="uil:angle-right"></Icon></NuxtLink>
    </span>
  </CommonHeader>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'account'
})
</script>
