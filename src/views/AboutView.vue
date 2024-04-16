<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 23:43:52
 * @FilePath     : \9Yan\src\views\AboutView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import NotificationBar from '@/components/NotificationBar.vue';

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
        <ContentWrap>
            <BaseTitle>
                <template #title>关于</template>
                <template #disc>关于本人</template>
            </BaseTitle>

            <NotificationBar color="warning" :icon="mdiAlert" :outline="notificationsOutline">
                <b>正在施工中🚧</b>. 以后再来看吧
                <template #right>
                    <BaseButton class="h-10 w-20" rounded-full></BaseButton>
                </template>
            </NotificationBar>
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
