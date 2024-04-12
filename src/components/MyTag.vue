<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 21:37:52
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 14:02:55
 * @FilePath     : \9Yan\src\components\MyTag.vue
 * @Description  : 
-->
<template>
    <h3 class="font-bold tracking-tight text-zinc-200 sm:text-4xl lg:text-6xl">
        <span class="group">
            <span class="font-mono">&lt;</span>开发者<span class="font-mono">/&gt;</span>
            <span class="invisible before:content-['|'] group-hover:visible group-hover:animate-typing"></span>，</span
        >

        <span class="group relative inline-flex bg-black/10 p-1">
            <span class="pointer-events-none absolute inset-0 border border-lime-400/90 opacity-70 group-hover:border-dashed group-hover:opacity-100"
                ><span class="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-400 bg-zinc-50"></span
                ><span class="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-400 bg-zinc-50"></span
                ><span class="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-400 bg-zinc-50"></span
                ><span class="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-400 bg-zinc-50"> </span>
            </span>
            工程师</span
        >，

        <span class="block h-2"></span>

        <span class="group inline-flex">
            <BaseSvg name="google-down" class="duration-300 group-hover:animate-bounce" />
            实习生，</span
        >

        <span class="group inline-flex">
            <BaseSvg name="details" class="duration-300 group-hover:rotate-180 group-hover:fill-zinc-400" />
            细节控</span
        >
    </h3>
</template>

<script setup>
import BaseSvg from '@/components/BaseSvg.vue';
</script>
