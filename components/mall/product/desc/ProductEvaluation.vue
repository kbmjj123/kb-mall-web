<template>
  <div>
    <span class="text-stone-400 text-sm">好评度</span>
    <h1 class="text-red-500 font-medium text-4xl">100<span class="text-base">%</span></h1>
    <ul class="flex flex-row text-xs text-stone-700 bg-gray-100 border border-gray-200">
      <li v-for="(item, index) in evaluationFilterList" :key="index" class="px-2 py-1 mx-4 hover:cursor-pointer hover:text-red-500"
      :class="[item.active? 'text-red-500' : '']">
        {{ item.title }}
      </li>
      <select class="outline-none bg-transparent ml-10">
        <option v-for="(item, index) in sortList" :key="index">{{ item.title }}</option>
      </select>
    </ul>
    <ul>
      <li v-for="(item, index) in evaluationList" :key="index">
        <EvaluationCell :item="item"></EvaluationCell>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import EvaluationCell from './EvaluationCell.vue';
const { t } = useI18n()
const evaluationFilterList = ref([
  {
    title: t('product.allEvaluation'),
    state: '',
    active: true
  },
  {
    title: t('product.evaluationWithPic'),
    state: '',
    active: false
  },
  {
    title: t('product.evaluationWithVideo'),
    state: '',
    active: false
  },
  {
    title: t('product.evaluationAppended'),
    state: '',
    active: false
  },
  {
    title: t('product.evaluationGood'),
    state: '',
    active: false
  },
  {
    title: t('product.evaluationMiddle'),
    state: '',
    active: false
  },
  {
    title: t('product.evaluationBad'),
    state: '',
    active: false
  },
])
const sortList = ref([
  {
    title: t('product.defaultSort'),
    active: true
  },
  {
    title: t('product.timeSort'),
    active: false
  }
])
const evaluationList = ref([
  {
    userLogo: 'https://storage.360buyimg.com/i.imageUpload/7773623130373731343537363139363439323436_sma.jpg',
    userNick: 'g***n',
    score: 5,
    evaluationContent: '方便实用，靠背舒适，整体很轻便，个人认为，比转椅要舒服，还少了滑动，其实只要习惯了，也没什么，这次重装办公室，就一起把转椅也换了！',
    evaluationPicList: [
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg'
    ],
    skuArray: ['灰色网布+腰枕', '乳胶款'],
    createTime: '2023-05-30 11:20'
  },
  {
    userLogo: 'https://storage.360buyimg.com/i.imageUpload/7773623130373731343537363139363439323436_sma.jpg',
    userNick: 'g***n',
    score: 5,
    evaluationContent: '方便实用，靠背舒适，整体很轻便，个人认为，比转椅要舒服，还少了滑动，其实只要习惯了，也没什么，这次重装办公室，就一起把转椅也换了！',
    evaluationPicList: [
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg'
    ],
    skuArray: ['灰色网布+腰枕', '乳胶款'],
    createTime: '2023-05-30 11:20'
  },
  {
    userLogo: 'https://storage.360buyimg.com/i.imageUpload/7773623130373731343537363139363439323436_sma.jpg',
    userNick: 'g***n',
    score: 5,
    evaluationContent: '方便实用，靠背舒适，整体很轻便，个人认为，比转椅要舒服，还少了滑动，其实只要习惯了，也没什么，这次重装办公室，就一起把转椅也换了！',
    evaluationPicList: [
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg'
    ],
    skuArray: ['灰色网布+腰枕', '乳胶款'],
    createTime: '2023-05-30 11:20'
  },
  {
    userLogo: 'https://storage.360buyimg.com/i.imageUpload/7773623130373731343537363139363439323436_sma.jpg',
    userNick: 'g***n',
    score: 5,
    evaluationContent: '方便实用，靠背舒适，整体很轻便，个人认为，比转椅要舒服，还少了滑动，其实只要习惯了，也没什么，这次重装办公室，就一起把转椅也换了！',
    evaluationPicList: [
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg'
    ],
    skuArray: ['灰色网布+腰枕', '乳胶款'],
    createTime: '2023-05-30 11:20'
  },
  {
    userLogo: 'https://storage.360buyimg.com/i.imageUpload/7773623130373731343537363139363439323436_sma.jpg',
    userNick: 'g***n',
    score: 5,
    evaluationContent: '方便实用，靠背舒适，整体很轻便，个人认为，比转椅要舒服，还少了滑动，其实只要习惯了，也没什么，这次重装办公室，就一起把转椅也换了！',
    evaluationPicList: [
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg',
      'https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/220975/4/29773/46991/64756b7cF269570fb/effeff7e34e9560a.jpg'
    ],
    skuArray: ['灰色网布+腰枕', '乳胶款'],
    createTime: '2023-05-30 11:20'
  }
])
</script>