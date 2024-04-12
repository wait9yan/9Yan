<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-03 00:13:45
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 14:16:46
 * @FilePath     : \9Yan\src\components\MySocialLinks.vue
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
        class="backdrop-slate-200 flex h-14 w-full items-center justify-between rounded-2xl bg-gradient-to-b from-zinc-200/50 to-white/50 px-3 shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur"
    >
        <div class="flex w-full items-center justify-center md:justify-start">
            <a v-for="item in socialLinks" :key="item.name" :href="item.url" target="_blank" @mouseenter="socialTip = item.tip" @mouseleave="socialTip = ''">
                <BaseSvg class="mx-1.5 size-8 transition-transform duration-300 hover:scale-110" :name="item.name" />
            </a>
        </div>
        <span class="mx-1.5 hidden text-nowrap md:inline-block">{{ socialTip }}</span>
    </div>
</template>
