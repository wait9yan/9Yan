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
        <div ref="homeContent" class="basis-1/2 grow h-min">
            <ContentWrap>
                <div class="min-h-[75vh] flex flex-col justify-center content-center">
                    <slot name="blog" />
                </div>
                <div class="min-h-[75vh] flex flex-col justify-center content-center">
                    <slot name="work" />
                </div>
                <div class="min-h-[75vh] flex flex-col justify-center content-center">
                    <slot name="about" />
                </div>
            </ContentWrap>
        </div>
        <div class="basis-1/2 hidden xl:block h-full" :style="scrollBgStyle">
            <slot name="scrollShow" />
        </div>
    </div>
</template>
