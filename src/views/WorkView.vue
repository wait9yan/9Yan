<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-31 20:48:48
 * @FilePath     : \9Yan\src\views\WorkView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
</script>
<template>
    <TheLayout>
        <img src="https://ghchart.rshah.org/wait9yan" alt="wait9yan Green Github Chart" />

        <ContentWrap class="h-screen">
            <HomeContent></HomeContent>
            <HomeAside></HomeAside>
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
