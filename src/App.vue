<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 08:26:13
 * @FilePath     : \9Yan\src\App.vue
 * @Description  : 
-->
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();

const handleScroll = () => {
    mainStore.scrollTop = document.documentElement.scrollTop;
};

const handleResize = () => {
    mainStore.innerHeight = window.innerHeight;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <RouterView />
</template>
