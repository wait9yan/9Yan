<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 19:47:50
 * @FilePath     : \9Yan\src\views\ArticleView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
</script>
<template>
    <TheLayout>
        <ContentWrap class="h-screen">
            <HomeContent>文章</HomeContent>
            <HomeAside></HomeAside>
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
