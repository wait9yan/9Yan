<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 14:02:10
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-31 23:13:54
 * @FilePath     : \9Yan\src\components\TheNavigator.vue
 * @Description  : 
-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMainStore } from '@/stores/main';

import ContentWrap from '@/components/ContentWrap.vue';
import BaseButton from '@/components/BaseButton.vue';

import IconLogin from '@/components/icons/IconLogin.vue';
import IconLightDark from '@/components/icons/IconLightDark.vue';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { scrollTop } = storeToRefs(mainStore);

let iconUi = ref(null); // 头像UI
let iconUiScale = ref(2); // 头像缩放大小
let navUi = ref(null); // 导航栏UI
let navUiRect = ref(null); // 导航栏UI位置
let navUiMouseRelativeX = ref(0); // 导航栏鼠标效果相对x坐标
let navUiMouseRelativeY = ref(0); // 导航栏鼠标效果相对y坐标

// 处理头像缩放效果
const handleScroll = () => {
    navUiRect.value = navUi.value.getBoundingClientRect();
    if (scrollTop.value <= 100) {
        iconUiScale.value = 2 - scrollTop.value / 100;
    }
    iconUi.value.style.transform = `scale(${iconUiScale.value})`;
};

// 处理鼠标移入导航栏效果
const handleMouseMove = (event) => {
    navUiRect.value = navUi.value.getBoundingClientRect();
    navUiMouseRelativeX.value = event.clientX - navUiRect.value.left;
    navUiMouseRelativeY.value = event.clientY - navUiRect.value.top;
};

const navItem = [
    {
        to: '/home',
        label: '首页',
    },
    {
        to: '/article',
        label: '文章',
    },
    {
        to: '/work',
        label: '项目',
    },
    {
        to: '/about',
        label: '自述',
    },
];

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="fixed left-0 top-32">{{ iconUiScale }}\{{ scrollTop }}\{{ navUiRect }}</div>
    <ContentWrap>
        <div class="fixed right-0 top-10"></div>
        <header class="z-50 flex flex-col" :style="headerStyle">
            <div class="order-last mt-16"></div>
            <div class="order-last">
                <a aria-label="主页" class="block size-full pointer-events-auto" href="/">
                    <img ref="iconUi" src="images/icon/9yan.webp" alt="9yan" class="size-10 rounded-xl" style="transform: scale(2)" />
                </a>
            </div>
            <nav class="sticky top-0 z-10 h-16 pt-6 flex">
                <div class="flex flex-1 opacity-100 transform-none"></div>
                <ul
                    ref="navUi"
                    @mousemove="handleMouseMove"
                    class="group relative max-w-md h-10 my-auto px-5 rounded-xl hidden sm:flex bg-gradient-to-b from-zinc-200/50 to-white/50 backdrop-blur backdrop-slate-200 ring-1 ring-slate-900/5 shadow-lg shadow-slate-800/5"
                >
                    <div
                        class="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        :style="{
                            background: `radial-gradient(154px circle at ${navUiMouseRelativeX}px ${navUiMouseRelativeY}px, #cbd5e1 0%, transparent 65%)`,
                        }"
                        aria-hidden="true"
                    ></div>
                    <li v-for="item in navItem" :key="item.index">
                        <router-link :to="item.to" class="relative block py-2.5 px-4 text-sm"
                            >{{ item.label }}
                            <span
                                class="group absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-slate-600/0 via-slate-600 to-slate-600/0 opacity-100 transition-opacity"
                            ></span
                        ></router-link>
                    </li>
                </ul>
                <div class="flex justify-end gap-3 sm:flex-1 opacity-100 transform-none">
                    <BaseButton disabled>
                        <IconLogin class="size-5" />
                    </BaseButton>
                    <BaseButton disabled>
                        <IconLightDark class="size-5" />
                    </BaseButton>
                </div>
            </nav>
        </header>
    </ContentWrap>
</template>

<style scoped></style>
