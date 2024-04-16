<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-16 10:36:21
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 17:09:15
 * @FilePath     : \9Yan\src\components\SectionBannerStarOnGitHub.vue
 * @Description  : 
-->
<script setup>
import BaseButton from '@/components/BaseButton.vue';
import SectionBanner from '@/components/SectionBanner.vue';
import { gradientBgPinkRed } from '@/style/colors';
</script>

<template>
    <SectionBanner :class="gradientBgPinkRed">
        <h1 class="mb-6 text-3xl text-white">Like the project? Please star on <b>GitHub</b> ;-)</h1>
        <div>
            <BaseButton class="h-10 w-20" href="https://github.com" target="_blank" rounded-full>Github</BaseButton>
        </div>
    </SectionBanner>
</template>
