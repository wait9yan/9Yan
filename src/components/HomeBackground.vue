<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-30 15:22:02
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 11:11:17
 * @FilePath     : \9Yan\src\components\HomeBackground.vue
 * @Description  : 
-->
<script setup>
import { useMainStore } from '@/stores/main';
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

const mainStore = useMainStore();

const bg = ref(null);
const bgUrl = ref(null);
const imgTimeout = ref(null);

// 壁纸随机数
const bgRandom = Math.floor(Math.random() * 10 + 1);

// 更换壁纸链接
const changeBg = (type) => {
    if (type == 0) {
        bgUrl.value = `/images/bg-home-${bgRandom}.webp`;
    } else if (type == 1) {
        bgUrl.value = 'https://api.dujin.org/bing/1920.php';
    } else if (type == 2) {
        bgUrl.value = 'https://api.aixiaowai.cn/gqapi/gqapi.php';
    } else if (type == 3) {
        bgUrl.value = 'https://api.aixiaowai.cn/api/api.php';
    }
    bg.value = {
        'background-image': `url(${bgUrl.value})`,
        opacity: 1,
    };
};

const HomeBackgroundHeight = ref(null);

const HomeBackgroundClass = computed(() => {
    const base = [];
    base.push(mainStore.bgShow ? 'z-50' : 'z-[-1]');
    if (mainStore.innerHeight >= 200 + 183 + 224) {
        base.push(`h-[calc(100vh+1rem)]`);
    } else {
        base.push(`h-[calc(607px+1rem)]`);
    }
    return base;
});

const handleResize = (innerHeight) => {
    if (innerHeight >= 200 + 183 + 224) {
        HomeBackgroundHeight.value = innerHeight;
    }
};

// const handleScroll = (scrollTop) => {
//     bg.value = {
//         'background-image': `url(${bgUrl.value})`,
//         opacity: ((mainStore.innerHeight - scrollTop * 1.5) / mainStore.innerHeight) * 2,
//     };
// };

// 监听壁纸切换
watch(
    () => mainStore.coverType,
    (value) => {
        changeBg(value);
    }
);

// // 监听页面顶部高度
// watch(
//     () => mainStore.scrollTop,
//     (scrollTop) => {
//         handleScroll(scrollTop);
//     }
// );

onMounted(() => {
    // 加载壁纸
    changeBg(mainStore.coverType);
    handleResize(mainStore.innerHeight);
});

watch(
    () => mainStore.innerHeight,
    (innerHeight) => handleResize(innerHeight)
);

onBeforeUnmount(() => {
    clearTimeout(imgTimeout.value);
});
</script>

<template>
    <div class="absolute left-0 top-0 w-full" :class="HomeBackgroundClass" style="filter: brightness(75%)">
        <div class="absolute left-0 top-0 size-full rounded-b-2xl bg-cover bg-center bg-no-repeat" :style="bg"></div>
    </div>
</template>
