<template>
  <div class="flex justify-center items-center p-1">
    <h3 class="relative w-[150px] h-[45px] text-[22px] font-bold overflow-hidden text-[#333] box-border px-[30px] py-0">为你推荐</h3>
  </div>
  <ul class="grid grid-cols-5 gap-2">
    <li v-for="(item, index) in productList" :key="index" class="bg-white hover:cursor-pointer">
      <NuxtLink class="hover:text-red-500">
        <div class="flex justify-center items-center p-8">
          <NuxtImg :src="item.productIcon"></NuxtImg>
        </div>
        <div class="text-xs mx-3">{{ item.productName }}</div>
        <div class="mx-3 mt-1 mb-2 font-medium">¥{{ item.price }}</div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const productList = ref([
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
  {
    productIcon: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/179378/8/39622/53486/651594bcF176f3f54/197a5c1199f31210.jpg',
    productName: '欧普（OPPLE）led调光卧室灯吸顶灯客厅灯餐厅灯圆形现代简约超薄灯具 ',
    productId: '1',
    price: 128.7
  },
])
</script>

<style lang="less" scoped>
  h3{
    &::before, &::after{
      content: "";
      position: absolute;
      background-size: 50px 20px;
      width: 25px;
      height: 20px;
      top: 50%;
      margin-top: -13px;
      background-image: url('~/assets/img/sprite-retina2x.png');
    }
    &::before{
      left: 0;
      background-position: 0 0;
    }
    &::after{
      background-position: -25px 0;
      right: 0;
    }
  }
</style>