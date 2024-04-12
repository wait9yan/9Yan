<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 14:00:35
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-10 20:03:10
 * @FilePath     : \9Yan\src\components\TheFooter.vue
 * @Description  : 
-->
<script setup>
import ContentWrap from '@/components/ContentWrap.vue';
import socialLinks from '@/assets/socialLinks.json';
import BaseSvg from '@/components/BaseSvg.vue';
</script>

<template>
    <ContentWrap>
        <footer class="body-font text-gray-600">
            <div class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
                <a class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
                    <span class="ml-3 text-xl">9Yan</span>
                </a>
                <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">© 2024 By Wait9Yan.</p>

                <span class="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                    <a v-for="item in socialLinks" :key="item.name" class="text-gray-500">
                        <BaseSvg :name="item.name" class="h-6 w-6" />
                    </a>
                </span>
            </div>
        </footer>
    </ContentWrap>
</template>
