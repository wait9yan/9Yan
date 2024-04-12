<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-09 19:34:15
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 22:05:48
 * @FilePath     : \9Yan\src\components\HomeContentWarp.vue
 * @Description  : 
-->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ContentWrap from '@/components/ContentWrap.vue';

const homeContent = ref(null);
const homeContentHeight = ref(null);

const scrollBgStyle = computed(() => {
    const base = {
        height: `${homeContentHeight.value}px`,
    };
    return base;
});

const handleResize = () => {
    homeContentHeight.value = homeContent.value.clientHeight;
};

onMounted(() => {
    homeContentHeight.value = homeContent.value.clientHeight;
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<template>
    <div class="flex w-full">
        <div ref="homeContent" class="h-min grow basis-1/2">
            <ContentWrap>
                <div class="flex min-h-[75vh] flex-col content-center justify-center">
                    <slot name="blog" />
                </div>
                <div class="flex min-h-[75vh] flex-col content-center justify-center">
                    <slot name="work" />
                </div>
                <div class="flex min-h-[75vh] flex-col content-center justify-center">
                    <slot name="about" />
                </div>
            </ContentWrap>
        </div>
        <div class="hidden h-full basis-1/2 xl:block" :style="scrollBgStyle">
            <slot name="scrollShow" />
        </div>
    </div>
</template>
