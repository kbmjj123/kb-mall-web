<template>
  <div class="grid gap-2 grid-cols-[2fr_5fr_2fr] px-2 py-5">
    <!-- category list block -->
    <div class="bg-white">
      <ul class="py-2">
        <li v-for="(firstCate, firstIndex) in categoryList" :key="firstIndex" class="text-gray-500 text-sm px-4 py-1 hover:bg-gray-400 hover:cursor-pointer">
          <NuxtLink>{{ firstCate.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- banner block -->
    <div class="h-[45vh]">
      <Carousel :autoplay="2000" pauseAutoplayOnHover class="w-full h-[45vh] object-cover" >
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
    <div class="bg-white grid grid-rows-3">
      <NuxtLink class="flex flex-col justify-center items-center hover:cursor-pointer">
        <Icon name="uil:user-circle" size="3em"></Icon>
        <span class="text-slate-900">Hi!您好</span>
      </NuxtLink>
      <div class="flex justify-evenly self-center">
        <NuxtLink class="px-4 py-1 rounded-3xl bg-red-500 text-white text-sm hover:cursor-pointer hover:bg-red-600">登录</NuxtLink>
        <NuxtLink class="px-4 py-1 rounded-3xl bg-orange-500 text-white text-sm hover:cursor-pointer hover:bg-orange-600">注册</NuxtLink>
      </div>
      <div class="grid grid-cols-3 text-slate-900">
        <NuxtLink v-for="(item, index) in useFunList" :key="index" class="flex flex-col justify-center items-center hover:cursor-pointer hover:text-red-500">
          <Icon :name="item.icon" size="1.5em"></Icon>
          <span class="text-xs pt-1">{{ item.title }}</span>
        </NuxtLink>
      </div>
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
    imgUrl: 'https://img.alicdn.com/imgextra/i1/6000000005991/O1CN01jfz8m61u7vi92sd5v_!!6000000005991-0-octopus.jpg',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01GOlEEW1zidUliI8O7_!!6000000006748-2-tps-846-472.png',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://img.alicdn.com/imgextra/i1/6000000001540/O1CN0154HRNF1NFMoxethLo_!!6000000001540-0-octopus.jpg',
    link: '/'
  },
  {
    title: '',
    imgUrl: 'https://img.alicdn.com/imgextra/i1/6000000003851/O1CN01AKEAHd1eJo8DNc0VJ_!!6000000003851-0-octopus.jpg',
    link: '/'
  },
])
const useFunList = ref([
  {
    title: '宝贝收藏',
    icon: 'ion:star-outline',
    path: '/'
  },
  {
    title: '收藏的店',
    icon: 'ion:storefront-outline',
    path: '/'
  },
  {
    title: '我的足迹',
    icon: 'uil:clock-five',
    path: '/'
  },
])
</script>