<template>
    <RouterView />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
let { scrollTop } = storeToRefs(mainStore);

// 处理滚动时获取页面顶部高度
const handleScroll = () => {
    scrollTop.value = document.documentElement.scrollTop;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
