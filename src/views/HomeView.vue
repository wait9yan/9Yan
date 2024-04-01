<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-01 17:16:04
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->

<template>
    <TheLayout>
        <!-- 壁纸 -->
        <HomeBackground />
        <!-- 首页 -->
        <ContentWrap flex>
            <div class="relative h-full pb-40 flex flex-col flex-nowrap justify-center" :style="HomeMainHeight">
                <!-- <h1
                    class="absolute w-max -top-20 left-24 inline-block text-4xl leading-loose sm:text-6xl sm:leading-normal font-art bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                >
                    Wait 9Yan
                </h1> -->
                <h1>
                    <span>&lt;开发者/&gt;</span>
                    <span><IconBasketball class="inline" />实习生</span>
                    <span>工程师</span>
                    <span><IconDetails class="inline" />细节控</span>
                </h1>
                <baseButton class="p-10 w-auto sm:max-w-sm">我是 9Yan，一个热爱编程的独立开发者，目前在学习开发一些项目。</baseButton>
                <div class="flex">
                    <IconMail />
                    <IconQQ />
                    <IconTelegram />
                </div>
            </div>

            <div class="h-full flex-col flex-nowrap justify-center hidden sm:flex" :style="HomeMainHeight">
                <baseButton>wait9yan.com</baseButton>
                <baseButton>Github</baseButton>
                <baseButton>Bilbili</baseButton>
                <baseButton>Steam</baseButton>
                <baseButton>杭州地图</baseButton>
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
    height: `${pageHeight.value - 188}px`,
});

// 窗口大小发生变化时执行的操作
const handleResize = () => {
    pageHeight.value = document.documentElement.clientHeight;
    HomeMainHeight.value = {
        height: `${pageHeight.value - 188}px`,
    };
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
