<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 14:02:10
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 14:17:00
 * @FilePath     : \9Yan\src\components\TheNavigator.vue
 * @Description  : 头部
-->

<script setup>
import { ref, watch } from 'vue';
import { useMainStore } from '@/stores/main';
// import { useRouter } from 'vue-router';

import ContentWrap from '@/components/ContentWrap.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSvg from '@/components/BaseSvg.vue';

import navItem from '@/assets/navItem.json';

const mainStore = useMainStore();
// const router = useRouter();

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
let headerStyle = ref({
    height: '200px',
    'margin-bottom': '0px',
}); //头样式

let lastScrollTop = ref(0);

const handleScroll = (scrollTop) => {
    // 处理Logo缩放效果
    navUiRect.value = navUi.value.getBoundingClientRect();
    if (scrollTop <= 100) {
        iconUiScale.value = 2 - scrollTop / 100;
        iconUiLogoX.value = 0.5 - scrollTop / 200;
        iconUiArtX.value = 2.25 - scrollTop / 50;
    }
    iconUiLogo.value.style.transform = `scale(${iconUiScale.value}) translate(${iconUiLogoX.value}em)`;
    iconUiArt.value.style.transform = `scale(${iconUiScale.value}) translateX(${iconUiArtX.value}em)`;
    if (scrollTop > 200 - 96) {
        iconOpacity.value = false;
    } else {
        iconOpacity.value = true;
    }

    // 处理头部高度
    if (scrollTop > lastScrollTop.value + 0.1) {
        ScrollDown(scrollTop);
    } else if (scrollTop < lastScrollTop.value - 0.1) {
        ScrollUp(scrollTop);
    }

    headerStyle.value = {
        height: `${headerHeight.value}px`,
        'margin-bottom': `${headerMarginBottom.value}px`,
    };
};

const ScrollDown = (scrollTop) => {
    if (scrollTop > 200 && navUiRect.value.bottom < 0) {
        headerHeight.value = scrollTop;
        headerMarginBottom.value = 200 - scrollTop;
    }
    lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

const ScrollUp = (scrollTop) => {
    if (scrollTop > 200 - 96 && headerHeight.value > scrollTop + 96) {
        headerHeight.value = scrollTop + 96;
        headerMarginBottom.value = 200 - 96 - scrollTop;
    } else if (scrollTop < 200 - 96) {
        headerHeight.value = 200;

        headerMarginBottom.value = 0;
    }
    lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
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

// 监听页面顶部高度
watch(
    () => mainStore.scrollTop,
    (scrollTop) => {
        handleScroll(scrollTop);
    }
);
</script>

<template>
    <ContentWrap>
        <header class="z-30 flex flex-col pb-5" :style="headerStyle">
            <div class="order-last mt-16"></div>
            <div class="order-last">
                <a aria-label="主页" class="pointer-events-auto flex" @click="scrollToTop">
                    <img
                        ref="iconUiLogo"
                        src="/images/icon/9yan.webp"
                        alt="9yan"
                        class="inline-block size-10 rounded-xl"
                        :class="iconOpacity ? '' : 'hidden'"
                        style="transform: scale(2) translateX(0.5em)"
                    />
                    <h3
                        ref="iconUiArt"
                        class="inline-block h-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-art text-lg leading-10 text-transparent sm:text-2xl"
                        :class="iconOpacity ? '' : 'hidden'"
                        style="transform: scale(2) translateX(2.25em)"
                    >
                        Wait 9Yan
                    </h3>
                </a>
            </div>
            <nav class="sticky top-0 z-10 flex h-16 pt-6">
                <div class="flex flex-1 transform-none opacity-100">
                    <a aria-label="主页" class="pointer-events-auto flex" @click="scrollToTop">
                        <img src="/images/icon/9yan.webp" alt="9yan" class="inline-block size-10 rounded-xl" :class="iconOpacity ? 'hidden' : ''" />
                        <h3
                            class="inline-block h-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-art text-lg leading-10 text-transparent sm:text-2xl"
                            :class="iconOpacity ? 'hidden' : ''"
                            style="transform: translateX(0.25em)"
                        >
                            Wait 9Yan
                        </h3>
                    </a>
                </div>
                <ul
                    ref="navUi"
                    @mousemove="handleMouseMove"
                    class="backdrop-slate-200 group relative my-auto hidden h-10 max-w-md rounded-2xl bg-gradient-to-b from-zinc-200/50 to-white/50 px-5 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur sm:flex"
                >
                    <div
                        class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        :style="{
                            background: `radial-gradient(154px circle at ${navUiMouseRelativeX}px ${navUiMouseRelativeY}px, #cbd5e1 0%, transparent 65%)`,
                        }"
                        aria-hidden="true"
                    ></div>
                    <li v-for="item in navItem" :key="item.index">
                        <router-link :to="item.to" class="relative block px-4 py-2.5 text-sm hover:text-teal-500">
                            {{ item.label }}
                            <span
                                class="group absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-slate-600/0 via-slate-600 to-slate-600/0 opacity-100 transition-opacity"
                                style="transform: none; transform-origin: 50% 50% 0px; opacity: 1"
                            ></span>
                        </router-link>
                    </li>
                </ul>
                <div class="flex transform-none justify-end gap-3 opacity-100 sm:flex-1">
                    <BaseButton disabled class="size-10" label="登录">
                        <BaseSvg class="size-5" name="login" />
                    </BaseButton>
                    <BaseButton disabled class="size-10" label="浅色模式">
                        <BaseSvg class="size-5" name="light-dark" />
                    </BaseButton>
                </div>
            </nav>
        </header>
    </ContentWrap>
</template>
