<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-24 21:09:19
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 23:24:17
 * @FilePath     : \9Yan\src\views\BlogView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import BlogItem from '@/components/BlogItem.vue';
</script>

<template>
    <TheLayout>
        <ContentWrap>
            <BaseTitle>
                <template #title>文章</template>
                <template #disc>这里记录了我的想法、文章，希望和大家一起交流～</template>
            </BaseTitle>
            <!-- lg:grid-cols-2 -->
            <div class="grid grid-cols-1 gap-6">
                <BlogItem v-for="index in 10" :key="index" class="" />
            </div>
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
