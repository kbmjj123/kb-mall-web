<template>
  <div>
    <TopActivityBlock></TopActivityBlock>
    <section class="flex content-end bg-[url('bg-login')]">
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
        <div class="text-slate-700">{{ $t('account.login') }}</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "account"
})
</script>

<style lang="less" scoped>

</style>