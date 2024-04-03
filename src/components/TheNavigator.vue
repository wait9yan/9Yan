<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 14:02:10
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-03 13:05:19
 * @FilePath     : \9Yan\src\components\TheNavigator.vue
 * @Description  : 头部
-->
<template>
    <!-- <div class="fixed left-0 top-64">
        <p>{{ navUiRect }}</p>
        <p>{{ headerStyle }}</p>
        <p>头高度：{{ headerHeight }}\头外下边距{{ headerMarginBottom }}</p>
        <p>滚动高度：{{ scrollTop }}</p>
    </div> -->
    <ContentWrap>
        <header class="z-50 flex flex-col pb-5" :style="headerStyle">
            <div class="order-last mt-16"></div>
            <div class="order-last">
                <a aria-label="主页" class="flex pointer-events-auto" @click="scrollToTop">
                    <img
                        ref="iconUiLogo"
                        src="/images/icon/9yan.webp"
                        alt="9yan"
                        class="inline-block size-10 rounded-xl"
                        :class="iconOpacity ? '' : 'hidden'"
                        style="transform: scale(2) translateX(0.5em)"
                    />
                    <h1
                        ref="iconUiArt"
                        class="inline-block h-10 text-lg sm:text-2xl leading-10 font-art bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                        :class="iconOpacity ? '' : 'hidden'"
                        style="transform: scale(2) translateX(2.25em)"
                    >
                        Wait 9Yan
                    </h1>
                </a>
            </div>
            <nav class="sticky top-0 z-10 h-16 pt-6 flex">
                <div class="flex flex-1 opacity-100 transform-none">
                    <a aria-label="主页" class="flex pointer-events-auto" @click="scrollToTop">
                        <img src="/images/icon/9yan.webp" alt="9yan" class="inline-block size-10 rounded-xl" :class="iconOpacity ? 'hidden' : ''" />
                        <h1
                            class="inline-block h-10 text-lg sm:text-2xl leading-10 font-art bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                            :class="iconOpacity ? 'hidden' : ''"
                            style="transform: translateX(0.25em)"
                        >
                            Wait 9Yan
                        </h1>
                    </a>
                </div>
                <ul
                    ref="navUi"
                    @mousemove="handleMouseMove"
                    class="group relative max-w-md h-10 my-auto px-5 rounded-xl hidden sm:flex bg-gradient-to-b from-zinc-200/50 to-white/50 backdrop-blur backdrop-slate-200 ring-1 ring-slate-960/5 shadow-lg shadow-slate-800/5"
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
                    <BaseButton disabled class="size-10" label="test">
                        <IconLogin class="size-5" />
                    </BaseButton>
                    <BaseButton disabled class="size-10">
                        <IconLightDark class="size-5" />
                    </BaseButton>
                </div>
            </nav>
        </header>
    </ContentWrap>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useMainStore } from '@/stores/main';

import ContentWrap from '@/components/ContentWrap.vue';
import BaseButton from '@/components/BaseButton.vue';

import IconLogin from '@/components/icons/IconLogin.vue';
import IconLightDark from '@/components/icons/IconLightDark.vue';

const mainStore = useMainStore();
const scrollTop = computed(() => mainStore.scrollTop);

let iconOpacity = ref(true); // icon透明度
let iconUiScale = ref(2); // icon缩放大小
let iconUiLogo = ref(null); // LogoUI
let iconUiLogoX = ref(null); //Logo位移
let iconUiArt = ref(null); // ArtUI
let iconUiArtX = ref(null); //Art位移
let navUi = ref(null); // 导航栏UI
let navUiRect = ref(null); // 导航栏UI位置
let navUiMouseRelativeX = ref(0); // 导航栏鼠标效果相对x坐标
let navUiMouseRelativeY = ref(0); // 导航栏鼠标效果相对y坐标

let headerHeight = ref(200); // 头高度
let headerMarginBottom = ref(null); //头外下边距
let headerStyle = ref(null); //头样式

let lastScrollTop = ref(0);

const handleScroll = () => {
    // 处理Logo缩放效果
    navUiRect.value = navUi.value.getBoundingClientRect();
    if (scrollTop.value <= 100) {
        iconUiScale.value = 2 - scrollTop.value / 100;
        iconUiLogoX.value = 0.5 - scrollTop.value / 200;
        iconUiArtX.value = 2.25 - scrollTop.value / 50;
    }
    iconUiLogo.value.style.transform = `scale(${iconUiScale.value}) translate(${iconUiLogoX.value}em)`;
    iconUiArt.value.style.transform = `scale(${iconUiScale.value}) translateX(${iconUiArtX.value}em)`;
    if (scrollTop.value > 200 - 96) {
        iconOpacity.value = false;
    } else {
        iconOpacity.value = true;
    }

    // 处理头部高度
    if (scrollTop.value > lastScrollTop.value + 0.1) {
        ScrollDown();
    } else if (scrollTop.value < lastScrollTop.value - 0.1) {
        ScrollUp();
    }

    headerStyle.value = {
        height: `${headerHeight.value}px`,
        'margin-bottom': `${headerMarginBottom.value}px`,
    };
};

const ScrollDown = () => {
    if (scrollTop.value > 200 && navUiRect.value.bottom < 0) {
        headerHeight.value = scrollTop.value;
        headerMarginBottom.value = 200 - scrollTop.value;
    }
    lastScrollTop.value = scrollTop.value <= 0 ? 0 : scrollTop.value;
};

const ScrollUp = () => {
    if (scrollTop.value > 200 - 96 && headerHeight.value > scrollTop.value + 96) {
        headerHeight.value = scrollTop.value + 96;
        headerMarginBottom.value = 200 - 96 - scrollTop.value;
    } else if (scrollTop.value < 200 - 96) {
        headerHeight.value = 200;

        headerMarginBottom.value = 0;
    }
    lastScrollTop.value = scrollTop.value <= 0 ? 0 : scrollTop.value;
};

// 处理鼠标移入导航栏效果
const handleMouseMove = (event) => {
    navUiRect.value = navUi.value.getBoundingClientRect();
    navUiMouseRelativeX.value = event.clientX - navUiRect.value.left;
    navUiMouseRelativeY.value = event.clientY - navUiRect.value.top;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
