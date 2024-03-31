<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-31 22:25:22
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->

<template>
    <TheLayout>
        <!-- 壁纸 -->
        <HomeBackground />
        <!-- 首页 -->
        <ContentWrap flex class="text-white">
            <div class="">
                <h1 class="inline text-4xl font-art bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Wait 9Yan</h1>
                <h1>
                    <span>&lt;开发者/&gt;</span>
                    <span>实习生</span>
                    <span>工程师</span>
                    <span><IconDetails class="inline" />细节控</span>
                </h1>

                <p>我是 9Yan，一个热爱编程的独立开发者，目前在学习开发一些项目。</p>
                <div class="flex">
                    <IconMail />
                    <IconQQ />
                    <IconTelegram />
                </div>
            </div>

            <div>
                <CardItem>wait9yan.com</CardItem>
                <CardItem>Github</CardItem>
                <CardItem>Bilbili</CardItem>
                <CardItem>Steam</CardItem>
                <CardItem>杭州地图</CardItem>
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
import TheLayout from '@/components/TheLayout.vue';
import HomeBackground from '@/components/HomeBackground.vue';
import HomeAside from '@/components/HomeAside.vue';
import HomeContent from '@/components/HomeContent.vue';
import CardItem from '@/components/CardItem.vue';
import ContentWrap from '@/components/ContentWrap.vue';

import IconDetails from '@/components/icons/IconDetails.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconQQ from '@/components/icons/IconQQ.vue';
import IconTelegram from '@/components/icons/IconTelegram.vue';
</script>
