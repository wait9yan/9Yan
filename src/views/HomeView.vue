<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-02 14:08:10
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->

<template>
    <TheLayout>
        <!-- 壁纸 -->
        <HomeBackground />
        <!-- 首页 -->
        <ContentWrap flex>
            <div class="w-full flex flex-col" :style="HomeMainHeight">
                <div class="basis-2/12"></div>
                <div class="basis-6/12 flex flex-nowrap">
                    <div class="flex flex-col flex-nowrap justify-center w-auto sm:max-w-sm">
                        <baseButton class="p-10">我是 9Yan，一个热爱编程的独立开发者，目前在学习开发一些项目。</baseButton>
                        <baseButton class="mt-5 p-10">
                            <h1 class="text-xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
                                <span class="group">
                                    <span class="font-mono">&lt;</span>开发者<span class="font-mono">/&gt;</span>
                                    <span class="invisible before:content-['|'] group-hover:visible group-hover:animate-typing"></span>，</span
                                >

                                <span class="group">
                                    <IconBasketball class="inline-flex group-hover:animate-bounce" />
                                    实习生，</span
                                >

                                <span class="block h-2"></span>

                                <span class="group relative bg-black/5 p-1 inline-flex">
                                    <span
                                        class="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90"
                                        ><span
                                            class="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
                                        ></span
                                        ><span
                                            class="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
                                        ></span
                                        ><span
                                            class="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400"
                                        ></span
                                        ><span class="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400">
                                        </span>
                                    </span>
                                    工程师</span
                                >，

                                <span class="group">
                                    <IconDetails class="inline-flex group-hover:fill-zinc-600/20 group-hover:rotate-180 duration-300" />
                                    细节控</span
                                >
                            </h1>
                        </baseButton>
                        <div class="flex justify-center">
                            <IconMail />
                            <IconQQ />
                            <IconTelegram />
                        </div>
                    </div>

                    <div class="w-full ml-5 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 content-center">
                        <baseButton class="flex-col aspect-[1/1] self-center">
                            <h3>博客</h3>
                            <p>9yan.cn</p>
                        </baseButton>
                        <baseButton class="aspect-[1/1] self-center">Github</baseButton>
                        <baseButton class="relative hidden lg:block row-span-2 col-span-2 md:aspect-[1/1]">
                            <div class="absolute top-0 left-0 rounded-xl w-full h-full">
                                <canvas class="absolute z-99 top-0 left-0 amap-labels w-full h-full" draggable="false"></canvas>
                                <a><img src="https://webapi.amap.com/theme/v1.3/logo@2x.png" /></a>
                            </div>
                            <div class="absolute bottom-0 left-0 p-4 rounded-xl font-semibold">HangZhou, China</div>
                        </baseButton>
                        <baseButton class="aspect-[1/1] self-center">Bilbili</baseButton>
                        <baseButton class="aspect-[1/1] self-center">Steam</baseButton>
                    </div>
                </div>
                <div class="basis-4/12"></div>
            </div>
        </ContentWrap>
        <!-- 文章 -->
        <ContentWrap class="h-screen">
            <HomeContent></HomeContent>
            <HomeAside></HomeAside>
        </ContentWrap>
        <!-- 项目 -->
        <ContentWrap class="h-screen">
            <HomeContent></HomeContent>
            <HomeAside></HomeAside>
        </ContentWrap>
    </TheLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import TheLayout from '@/components/TheLayout.vue';
import HomeBackground from '@/components/HomeBackground.vue';
import HomeAside from '@/components/HomeAside.vue';
import HomeContent from '@/components/HomeContent.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import baseButton from '@/components/BaseButton.vue';

import IconDetails from '@/components/icons/IconDetails.vue';
import IconBasketball from '@/components/icons/IconBasketball.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconQQ from '@/components/icons/IconQQ.vue';
import IconTelegram from '@/components/icons/IconTelegram.vue';

var pageHeight = ref(document.documentElement.clientHeight);
var HomeMainHeight = ref({
    height: `${pageHeight.value - 200}px`,
});

// 窗口大小发生变化时执行的操作
const handleResize = () => {
    pageHeight.value = document.documentElement.clientHeight;
    HomeMainHeight.value = {
        height: `${pageHeight.value - 200}px`,
    };
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
