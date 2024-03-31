<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-30 15:22:02
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-01 00:59:23
 * @FilePath     : \9Yan\src\components\HomeBackground.vue
 * @Description  : 
-->
<template>
    <div class="absolute top-0 left-0 size-full bg-fixed bg-no-repeat bg-center bg-cover" :style="bg" :class="mainStore.backgroundShow ? 'z-999' : 'z-[-1]'">
        <div
            class="absolute left-0 top-0 w-full h-full transition duration-1500"
            :class="mainStore.backgroundShow ? 'gray opacity-0' : 'gray opacity-1'"
            style="
                background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
            "
        />
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const mainStore = useMainStore();
const bgUrl = ref(null);
const bg = ref(null);
const imgTimeout = ref(null);

// 壁纸随机数
// 请依据文件夹内的图片个数修改 Math.random() 后面的第一个数字
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
    };
};

// 监听壁纸切换
watch(
    () => mainStore.coverType,
    (value) => {
        changeBg(value);
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

<style scoped></style>
