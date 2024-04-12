<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 11:22:01
 * @FilePath     : \9Yan\src\views\HomeView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import HomeBackground from '@/components/HomeBackground.vue';
import HomeHeaderWarp from '@/components/HomeHeaderWarp.vue';
import HomeContentWarp from '@/components/HomeContentWarp.vue';
import HomeTitle from '@/components/HomeTitle.vue';
import MyTag from '@/components/MyTag.vue';
import MySocialLinks from '@/components/MySocialLinks.vue';
import BlogItem from '@/components/BlogItem.vue';
import baseButton from '@/components/BaseButton.vue';
import BlogCard from '@/components/BlogCard.vue';
import TimeLine from '@/components/TimeLine.vue';
</script>

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
                <baseButton to="/blog">博客</baseButton>
                <baseButton href="https://github.com/wait9yan" target="_blank">Github</baseButton>
                <baseButton href="https://space.bilibili.com/396767727" target="_blank">Bilbili</baseButton>
                <baseButton href="https://steamcommunity.com/id/wait9yan" target="_blank">Steam</baseButton>
            </template>
            <template #mainRight>
                <baseButton class="relative size-full">
                    <div class="absolute left-0 top-0 h-full w-full">
                        <canvas class="z-99 absolute left-0 top-0 h-full w-full" draggable="false"></canvas>
                        <a><img src="https://webapi.amap.com/theme/v1.3/logo@2x.png" /></a>
                    </div>
                    <div class="absolute bottom-0 left-0 p-4 font-semibold">HangZhou, China</div>
                </baseButton>
            </template>
            <template #bottom></template>
        </HomeHeaderWarp>
        <HomeContentWarp>
            <template #blog>
                <HomeTitle>
                    <template #en>Blog</template>
                    <template #cn>博客</template>
                </HomeTitle>
                <BlogItem />
                <BlogItem />
            </template>
            <template #work>
                <HomeTitle>
                    <template #en>Work</template>
                    <template #cn>项目</template>
                </HomeTitle>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </template>
            <template #about>
                <HomeTitle>
                    <template #en>About</template>
                    <template #cn>自述</template>
                </HomeTitle>
                <TimeLine />
            </template>
            <template #scrollShow>
                <div class="sticky top-0 mx-2 h-screen">
                    <div
                        class="absolute left-0 top-2 size-full h-[calc(100vh-1rem)] rounded-2xl bg-cover bg-center bg-no-repeat"
                        style="background-image: url(https://api.dujin.org/bing/1920.php)"
                    ></div>
                    <!-- <div class="absolute top-0 left-0 size-full rounded-2xl" style="background-image: url(https://api.aixiaowai.cn/gqapi/gqapi.php)"></div> -->
                    <!-- <div class="absolute top-0 left-0 size-full rounded-2xl" style="background-image: url(https://api.aixiaowai.cn/api/api.php)"></div> -->
                </div>
            </template>
        </HomeContentWarp>
    </TheLayout>
</template>
