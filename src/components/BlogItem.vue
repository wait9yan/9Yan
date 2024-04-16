<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-10 19:32:54
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 23:39:03
 * @FilePath     : \9Yan\src\components\BlogItem.vue
 * @Description  : 
-->
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import BaseTag from '@/components/BaseTag.vue';

const blogItem = ref(null);
const blogItemWidth = ref(null);

const blogItemClass = computed(() => {
    const base = [];
    if (blogItemWidth.value <= 800) {
        base.push('flex-col divide-y');
    } else {
        base.push('flex-row divide-x');
    }
    return base;
});

const blogItemDescClass = computed(() => {
    const base = [];
    if (blogItemWidth.value <= 800) {
        base.push('truncate');
    }
    return base;
});

const handleResize = () => {
    blogItemWidth.value = blogItem.value.offsetWidth;
};

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div ref="blogItem" class="box box-bg box-btn flex" :class="blogItemClass">
        <div class="space-y-3 p-2">
            <h3>标题</h3>
            <p class="text-sm" :class="blogItemDescClass">
                基本学完前后端开发后，设计并开发一个个人网站来检验所学再合适不过， 虽然曾开发过不少网站，但大都是使用现成的 UI 组件、框架模板。
                而主页作为个人网站，应表达我的审美、思想与观点，我选择自己设计。
            </p>
        </div>
        <div class="flex-col space-y-1 p-2">
            <span class="text-xs">2024-03-16</span>
            <div class="flex flex-wrap gap-3">
                <BaseTag>JavaScript</BaseTag>
                <BaseTag>Server</BaseTag>
                <BaseTag>Work</BaseTag>
            </div>
        </div>
    </div>
</template>
