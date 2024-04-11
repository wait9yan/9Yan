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
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span class="ml-3 text-xl">9Yan</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 By Wait9Yan.</p>

                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a v-for="item in socialLinks" :key="item.name" class="text-gray-500">
                        <BaseSvg :name="item.name" class="w-6 h-6" />
                    </a>
                </span>
            </div>
        </footer>
    </ContentWrap>
</template>
