<template>
  <section class="">
    <div class="relative text-sm text-center p-3 text-stone-500 flex items-center justify-center">
      <span class="inline-block w-10 border-t border-gray-300 mx-1"></span>
      {{ $t('product.recommendTitle') }}
      <span class="inline-block w-10 border-t border-gray-300 mx-1"></span>
    </div>
    <ul class="overflow-y-scroll flex flex-col my-0 mx-auto w-2/3" style="height: 70vh;">
      <li v-for="(item, index) in recommendProductList" :key="index" class="text-xs my-2 w-full">
        <NuxtLink class="border border-gray-300 border-solid w-full inline-block hover:cursor-pointer hover:border-red-400">
          <div class="relative">
            <NuxtImg :src="item.productIcon" :alt="item.productName" class="w-full"></NuxtImg>
            <p class="absolute left-0 right-0 bottom-0 line-clamp-1 text-gray-500 bg-white opacity-90">{{ item.productName }}</p>
          </div>
          <section class="text-center mt-1">{{ $t('product.priceTarget') }}{{ item.productPrice }}</section>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const recommendProductList = ref([
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  },
  {
    productId: 123,
    productIcon: 'https://img14.360buyimg.com/n1/s150x150_jfs/t1/235020/2/108/156849/652f51d4F5aa183b7/3bb75e76ddad2e77.jpg',
    productName: 'S570全自动3D按摩椅家用太空舱2023新款全身按摩沙发电动躺椅豪华尊享送老年人生日礼物实用',
    productPrice: 4899
  }
])
</script>