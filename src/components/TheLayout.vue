<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 13:53:45
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-30 17:04:50
 * @FilePath     : \9Yan\src\components\TheLayout.vue
 * @Description  : 
-->
<script setup>
import TheNavigator from '@/components/TheNavigator.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
    <!-- 背景 -->
    <div class="fixed size-full z-[-999] bg-fixed bg-repeat opacity-50" style="background-image: url(images/icon/graph-paper.svg)"></div>
    <TheNavigator />
    <slot />
    <TheFooter />
</template>

<style scoped></style>
