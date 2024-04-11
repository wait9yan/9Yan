<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 17:19:42
 * @FilePath     : \9Yan\src\views\AboutView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';

import { ref } from 'vue';
const activeIndex = ref(0);

const items = [
    { icon: 'icon-shouye', label: '首页' },
    { icon: 'icon-guanzhu', label: '关注' },
    { icon: 'icon-faxian', label: '发现' },
    { icon: 'icon-xiaoxizhongxin', label: '消息中心' },
];
</script>

<template>
    <TheLayout>
        <ContentWrap class="h-screen">
            <div>
                <div :class="{ active: activeIndex === index }" v-for="(item, index) in items" :key="index" @click="activeIndex = index">
                    <i :class="['nav-tab-item_icon', 'iconfont', item.icon]"></i>
                    <p class="nav-tab-item_label">{{ item.label }}</p>
                </div>
                <div :style="{ left: activeIndex * 130 + 'px' }"></div>
            </div>
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
