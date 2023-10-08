<template>
  <div class="grid gap-2 grid-cols-[1.2fr_5fr_1.2fr] px-2 py-5">
    <!-- category list block -->
    <div class="bg-white">
      <ul class="py-2">
        <li v-for="(firstCate, firstIndex) in categoryList" :key="firstIndex" class="text-gray-500 text-sm px-2 py-1 hover:bg-gray-400 hover:cursor-pointer">
          <NuxtLink>{{ firstCate.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- banner block -->
    <div class="h-[40vh]">
      <Carousel :autoplay="2000" pauseAutoplayOnHover class="w-full h-[40vh] object-cover" >
        <Slide v-for="(item, index) in bannerList" :key="index">
          <NuxtLink class="w-full h-full">
            <img :src="item.imgUrl" class="w-full h-full">
          </NuxtLink>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
    <!-- user info block -->
    <div class="bg-yellow-200">
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css?t=128'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
const categoryList = ref([
  {
    id: '1',
    name: '电脑/办公',
    path: '/',
    children: [
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
    ]
  },
  {
    id: '1',
    name: '电脑/办公',
    path: '/',
    children: [
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
    ]
  },
  {
    id: '1',
    name: '电脑/办公',
    path: '/',
    children: [
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
    ]
  },
  {
    id: '1',
    name: '电脑/办公',
    path: '/',
    children: [
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
    ]
  },
  {
    id: '1',
    name: '电脑/办公',
    path: '/',
    children: [
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
      {
        id: '2',
        name: '电脑整机',
        path: '/',
        children: [
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          },
          {
            id: '3',
            name: '笔记本',
            path: '/'
          }
        ]
      },
    ]
  }
])
const bannerList = ref([
  {
    title: '',
    imgUrl: 'https://imgcps.jd.com/ling-cubic/ling4/lab/amZzL3QxLzE0NTY3Mi8xNy8zOTM1Ni8zNzQ2OS82NGUzMjhjMkY1OGNjOTk3ZC9kMzI5NzJiMWI0YWE1MzNlLnBuZw/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/1635187706996019201/cr/s/q.jpg',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://imgcps.jd.com/ling-cubic/ling4/lab/amZzL3QxLzQ5MTQzLzI4LzE3MDM2LzIxOTg4OS82MTM4NDhkNkU2MDY1ZWM5OC9iM2I4ZWE1ODE5MmQzNmI0LnBuZw/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/1635185254164787202/cr/s/q.jpg',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000367/10042194016518/FocusFullshop/CkNqZnMvdDEvMjAyNjI3LzExLzM1MTc3LzYxMjQyLzY1MGNhMzAzRmRjNGRhMDYyLzE1OTMzZWEwNGU2ZjNiNDkucG5nEgkyLXR5XzBfNTMwAjjvi3pCFgoS5YWs54mb5byA5YWz5o-S5bqnEAFCEwoP5LyY5oOg5Lqr5LiN5YGcEAJCEAoM56uL5Y2z5oqi6LStEAZCBwoD5oqiEAdYhvKgi6KkAg/cr/s/q.jpg',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://img20.360buyimg.com/pop/s590x470_jfs/t1/123148/34/30204/75629/63d9c142Fffb8730d/8e84ea14e518ccbd.jpg',
    link: '/'
  },
])
</script>