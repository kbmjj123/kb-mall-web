<template>
  <div class="mt-2">
    <section class="text-sm text-gray-700 font-bold bg-gray-200 p-2">{{ $t('product.shopHotSales') }}</section>
    <ul>
      <li v-for="(item, index) in hotSaleList" :key="index">
        <HotSaleProductCell :item="item"></HotSaleProductCell>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import HotSaleProductCell from './HotSaleProductCell.vue';
const hotSaleList = ref([
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    price: 4899
  }
])
</script>