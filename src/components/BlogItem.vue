<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-10 19:32:54
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 14:07:03
 * @FilePath     : \9Yan\src\components\BlogItem.vue
 * @Description  : 
-->
<script setup>
import BaseTag from '@/components/BaseTag.vue';
</script>

<template>
    <div class="relative flex flex-col divide-y p-6 xl:flex-row xl:divide-x xl:divide-y-0 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
        <div class="space-y-1 p-3">
            <h3>标题</h3>
            <p class="text-sm dark:text-gray-600">
                在基本学完前后端开发后，设计并开发一个个人网站来检验所学再合适不过， 虽然曾开发过不少网站，但大都是使用现成的 UI 组件、框架模板。
                而主页作为个人网站，应表达我的审美、思想与观点，我选择自己设计。
            </p>
        </div>
        <div class="flex items-center gap-3 p-3">
            <div class="space-y-1">
                <span class="text-xs">四月 03， 2021</span>
                <div class="flex flex-wrap gap-3">
                    <BaseTag>JavaScript</BaseTag>
                    <BaseTag>无服务器</BaseTag>
                    <BaseTag>AWS公司</BaseTag>
                </div>
            </div>
        </div>
    </div>
</template>
