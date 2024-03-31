<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-31 16:49:45
 * @FilePath     : \9Yan\src\components\ContentWrap.vue
 * @Description  : 
-->
<template>
    <div class="sm:px-8">
        <div class="mx-auto max-w-7xl lg:px-8">
            <div class="px-4 sm:px-8 lg:px-12" :class="WrapClass">
                {{ wrapStyle }}
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
    flex: Boolean,
});
const WrapClass = computed(() => {
    const base = [];

    if (props.flex) {
        base.push('flex');
    }

    return base;
});
</script>
