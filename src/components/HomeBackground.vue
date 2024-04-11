<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-30 15:22:02
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 17:34:41
 * @FilePath     : \9Yan\src\components\HomeBackground.vue
 * @Description  : 
-->
<script setup>
import { useMainStore } from '@/stores/main';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const mainStore = useMainStore();

const bg = ref(null);
const bgUrl = ref(null);
const imgTimeout = ref(null);

// 壁纸随机数
const bgRandom = Math.floor(Math.random() * 10 + 1);

// 更换壁纸链接
const changeBg = (type) => {
    if (type == 0) {
        bgUrl.value = `/images/background${bgRandom}.webp`;
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

const handleScroll = (scrollTop) => {
    bg.value = {
        'background-image': `url(${bgUrl.value})`,
        opacity: ((mainStore.innerHeight - scrollTop * 1.5) / mainStore.innerHeight) * 2,
    };
};

// 监听壁纸切换
watch(
    () => mainStore.coverType,
    (value) => {
        changeBg(value);
    }
);

// 监听页面顶部高度
watch(
    () => mainStore.scrollTop,
    (scrollTop) => {
        handleScroll(scrollTop);
    }
);

onMounted(() => {
    // 加载壁纸
    changeBg(mainStore.coverType);
});

onBeforeUnmount(() => {
    clearTimeout(imgTimeout.value);
});
</script>

<template>
    <div
        class="fixed top-0 left-0 size-full bg-fixed bg-no-repeat bg-center bg-cover"
        :class="mainStore.bgShow ? 'z-50' : 'z-[-1]'"
        style="filter: brightness(75%)"
        :style="bg"
    ></div>
</template>
