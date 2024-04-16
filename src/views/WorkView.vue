<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-28 14:25:34
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 23:41:56
 * @FilePath     : \9Yan\src\views\WorkView.vue
 * @Description  : 
-->
<script setup>
import TheLayout from '@/components/TheLayout.vue';
import ContentWrap from '@/components/ContentWrap.vue';
import BaseTitle from '@/components/BaseTitle.vue';
import BaseButton from '@/components/BaseButton.vue';
import NotificationBar from '@/components/NotificationBar.vue';
import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue';
</script>
<template>
    <TheLayout>
        <ContentWrap>
            <BaseTitle>
                <template #title>项目</template>
                <template #disc>这里有我参与开发的一些项目。</template>
            </BaseTitle>

            <NotificationBar color="warning" :icon="mdiAlert" :outline="notificationsOutline">
                <b>正在施工中🚧</b>. 以后再来看吧
                <template #right>
                    <BaseButton class="h-10 w-20"></BaseButton>
                </template>
            </NotificationBar>
            <SectionBannerStarOnGitHub class="mb-6 mt-6" />
            <img src="https://ghchart.rshah.org/wait9yan" alt="wait9yan Green Github Chart" />
        </ContentWrap>
    </TheLayout>
</template>

<style></style>
