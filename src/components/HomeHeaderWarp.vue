<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 15:56:36
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 10:31:35
 * @FilePath     : \9Yan\src\components\HomeHeaderWarp.vue
 * @Description  : 
-->
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

<template>
    <ContentWrap>
        <div class="mb-4 flex w-full flex-col" :style="HomeMainHeight">
            <div class="flex basis-2/5 items-end justify-center py-5 sm:justify-start">
                <slot name="top" />
            </div>
            <div class="flex h-56 w-full shrink-0 flex-nowrap justify-center space-x-6">
                <div class="items-q flex max-w-sm flex-col justify-start space-y-6">
                    <slot name="mainLeft" />
                </div>

                <div class="hidden min-w-56 grow grid-cols-2 gap-6 sm:grid">
                    <slot name="mainMiddle" />
                </div>

                <div class="hidden size-56 shrink-0 items-center lg:flex">
                    <slot name="mainRight" />
                </div>
            </div>
            <div class="basis-3/5"></div>
            <slot />
        </div>
    </ContentWrap>
</template>
