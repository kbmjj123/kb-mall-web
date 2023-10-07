<template>
  <div>
    <TopActivityBlock></TopActivityBlock>
    <h1 class="text-green-300">
      Hello world!
    </h1>
    <div class="flex content-end">
      <div>
        <div class="tabs">
          <a class="tab">{{ $t('account.loginTitle') }}</a>
        </div>
        <div>
          <input type="text" :placeholder="$t('account.accountLabel')" class="input w-full max-w-xs" />
        </div>
        <div>
          <input type="text" :placeholder="$t('account.passwordLabel')" class="input w-full max-w-xs" />
        </div>
        <div class="text-right">{{ $t('account.forgetPassword') }}</div>
        <div class="text-red-300">{{ $t('account.login') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: "account"
})
</script>

<style lang="less" scoped>

</style>