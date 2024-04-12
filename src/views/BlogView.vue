<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 11:14:46
 * @FilePath     : \9Yan\src\views\BlogView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import TimeLine from '@/components/TimeLine.vue';
import BlogItem from '@/components/BlogItem.vue';
</script>
<template>
    <TheLayout>
        <ContentWrap>
            <BaseTitle>
                <template #title>博客</template>
                <template #disc>这里记录了我的想法、文章，希望和大家一起交流～</template>
            </BaseTitle>
            <TimeLine v-for="index in 3" :key="index" />
            <BlogItem v-for="index in 3" :key="index" />
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
