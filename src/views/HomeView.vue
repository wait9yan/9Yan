<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 21:28:24
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->

<template>
    <TheLayout>
        <!-- 壁纸 -->
        <HomeBackground />
        <!-- 首页 -->
        <HomeHeaderWarp>
            <template #top><MyTag /></template>
            <template #mainLeft>
                <baseButton class="p-10">我是 9Yan，一个独立开发者，目前在学习开发一些项目。</baseButton>
                <MySocialLinks class="mt-6" />
            </template>
            <template #mainMiddle>
                <baseButton>博客</baseButton>
                <baseButton>Github</baseButton>
                <baseButton>Bilbili</baseButton>
                <baseButton>Steam</baseButton>
            </template>
            <template #mainRight>
                <baseButton class="relative size-full">
                    <div class="absolute top-0 left-0 rounded-xl w-full h-full">
                        <canvas class="absolute z-99 top-0 left-0 w-full h-full" draggable="false"></canvas>
                        <a><img src="https://webapi.amap.com/theme/v1.3/logo@2x.png" /></a>
                    </div>
                    <div class="absolute bottom-0 left-0 p-4 rounded-xl font-semibold">HangZhou, China</div>
                </baseButton>
            </template>
            <template #bottom></template>
        </HomeHeaderWarp>
        <HomeContentWarp>
            <template #blog>
                <h2>博客 - Blog</h2>
            </template>
            <template #work>
                <h2>项目 - Work</h2>
            </template>
            <template #about>
                <h2>自述 - About</h2>
            </template>
            <template #scrollShow>滚动测试</template>
        </HomeContentWarp>
    </TheLayout>
</template>

<script setup>
import TheLayout from '@/components/TheLayout.vue';
import HomeBackground from '@/components/HomeBackground.vue';
import HomeHeaderWarp from '@/components/HomeHeaderWarp.vue';
import HomeContentWarp from '@/components/HomeContentWarp.vue';
import MyTag from '@/components/MyTag.vue';
import MySocialLinks from '@/components/MySocialLinks.vue';
import baseButton from '@/components/BaseButton.vue';
// import CardBox from '@/components/CardBox.vue';
</script>
