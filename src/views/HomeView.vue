<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-03 12:58:17
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->

<template>
    <TheLayout>
        <!-- 壁纸 -->
        <HomeBackground />
        <!-- 首页 -->
        <HomeInfoLayout>
            <div class="basis-1/2 flex justify-center items-end">
                <MyTag class="mb-2" />
            </div>
            <div class="h-56 shrink-0 w-full flex flex-nowrap justify-center">
                <div class="max-w-sm flex flex-col justify-center items-center">
                    <baseButton class="p-10">我是 9Yan，一个独立开发者，目前在学习开发一些项目。</baseButton>
                    <MysocialLinks />
                </div>

                <div class="grow min-w-56 ml-6 hidden sm:grid grid-cols-2 gap-6">
                    <baseButton>
                        <h3>博客</h3>
                    </baseButton>
                    <baseButton>Github</baseButton>
                    <baseButton>Bilbili</baseButton>
                    <baseButton>Steam</baseButton>
                </div>

                <div class="size-56 ml-6 hidden lg:flex items-center">
                    <baseButton class="relative size-full">
                        <div class="absolute top-0 left-0 rounded-xl w-full h-full">
                            <canvas class="absolute z-99 top-0 left-0 w-full h-full" draggable="false"></canvas>
                            <a><img src="https://webapi.amap.com/theme/v1.3/logo@2x.png" /></a>
                        </div>
                        <div class="absolute bottom-0 left-0 p-4 rounded-xl font-semibold">HangZhou, China</div>
                    </baseButton>
                </div>
            </div>
            <div class="basis-1/2"></div>
        </HomeInfoLayout>
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
import HomeInfoLayout from '@/components/HomeInfoLayout.vue';
import HomeContent from '@/components/HomeContent.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import baseButton from '@/components/BaseButton.vue';
// import CardBox from '@/components/CardBox.vue';
import MyTag from '@/components/MyTag.vue';
import MysocialLinks from '@/components/MysocialLinks.vue';
</script>
