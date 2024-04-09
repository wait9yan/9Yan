<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-03 00:13:45
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 23:48:26
 * @FilePath     : \9Yan\src\components\MysocialLinks.vue
 * @Description  : 社交链接
-->
<script setup>
import { ref } from 'vue';

import BaseSvg from '@/components/BaseSvg.vue';

import socialLinks from '@/assets/socialLinks.json';

const socialTip = ref(null);
</script>

<template>
    <div
        class="flex justify-between items-center w-full h-14 px-3 bg-gradient-to-b from-zinc-200/50 to-white/50 backdrop-blur backdrop-slate-200 ring-1 ring-slate-900/5 shadow-lg shadow-slate-800/5 rounded-xl"
    >
        <div class="flex justify-center md:justify-start items-center w-full">
            <a v-for="item in socialLinks" :key="item.name" :href="item.url" target="_blank" @mouseenter="socialTip = item.tip" @mouseleave="socialTip = ''">
                <BaseSvg class="w-8 h-8 mx-1.5 transition-transform hover:scale-110 duration-300" :name="item.name" />
            </a>
        </div>
        <span class="mx-1.5 hidden md:inline-block text-nowrap">{{ socialTip }}</span>
    </div>
</template>
