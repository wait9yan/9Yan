<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 15:56:36
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-02 21:43:31
 * @FilePath     : \9Yan\src\components\HomeInfoLayout.vue
 * @Description  : 
-->
<template>
    <ContentWrap flex>
        <div class="w-full flex flex-col" :style="HomeMainHeight">
            <slot />
        </div>
    </ContentWrap>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import ContentWrap from '@/components/ContentWrap.vue';

var pageHeight = ref(document.documentElement.clientHeight);
var HomeMainHeight = ref({
    height: `${pageHeight.value - 200}px`,
});

// 窗口大小发生变化时执行的操作
const handleResize = () => {
    pageHeight.value = document.documentElement.clientHeight;
    HomeMainHeight.value = {
        height: `${pageHeight.value - 200}px`,
    };
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
