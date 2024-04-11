<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 11:57:02
 * @FilePath     : \9Yan\src\components\ContentWrap.vue
 * @Description  : 
-->
<template>
    <div class="sm:px-8">
        <div class="mx-auto max-w-7xl lg:px-8">
            <div class="px-4 sm:px-8 lg:px-12" :class="WrapClass">
                <slot />
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isHomeRoute = computed(() => router.currentRoute.value.name === 'home');
const props = defineProps({
    flex: Boolean,
});
const WrapClass = computed(() => {
    const base = [];
    if (props.flex) {
        base.push('flex');
    }
    if (!isHomeRoute.value) {
        base.push('bg-gray-100');
    }

    return base;
});
</script>
