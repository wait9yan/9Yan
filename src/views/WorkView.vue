<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-28 14:25:34
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 09:24:48
 * @FilePath     : \9Yan\src\views\WorkView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import BaseTitle from '@/components/BaseTitle.vue';
</script>
<template>
    <TheLayout>
        <ContentWrap class="h-screen">
            <BaseTitle>
                <template #title>项目</template>
                <template #disc>这里有我参与开发的一些项目。</template>
            </BaseTitle>
            <HomeContent><img src="https://ghchart.rshah.org/wait9yan" alt="wait9yan Green Github Chart" /></HomeContent>
            <HomeAside></HomeAside>
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
