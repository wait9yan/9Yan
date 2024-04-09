<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 15:56:36
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 21:04:58
 * @FilePath     : \9Yan\src\components\HomeHeaderWarp.vue
 * @Description  : 
-->
<template>
    <ContentWrap>
        <div class="w-full flex flex-col" :style="HomeMainHeight">
            <div class="basis-1/2 flex justify-center sm:justify-start items-end py-5">
                <slot name="top" />
            </div>
            <div class="h-56 shrink-0 w-full flex flex-nowrap justify-center">
                <div class="max-w-sm flex flex-col justify-start items-q">
                    <slot name="mainLeft" />
                </div>

                <div class="grow min-w-56 ml-6 hidden sm:grid grid-cols-2 gap-6">
                    <slot name="mainMiddle" />
                </div>

                <div class="shrink-0 size-56 ml-6 hidden lg:flex items-center">
                    <slot name="mainRight" />
                </div>
            </div>
            <div class="basis-1/2"></div>
            <slot />
        </div>
    </ContentWrap>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { useMainStore } from '@/stores/main';

import ContentWrap from '@/components/ContentWrap.vue';

const mainStore = useMainStore();

const HomeMainHeight = ref(null);

const handleResize = (innerHeight) => {
    if (innerHeight >= 200 + 183 + 224) {
        HomeMainHeight.value = {
            height: `${innerHeight - 200}px`,
        };
    }
};

onMounted(() => {
    handleResize(mainStore.innerHeight);
});

watch(
    () => mainStore.innerHeight,
    (innerHeight) => handleResize(innerHeight)
);
</script>
