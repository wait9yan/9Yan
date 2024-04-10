<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 21:37:52
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-10 17:04:38
 * @FilePath     : \9Yan\src\components\MyTag.vue
 * @Description  : 
-->
<template>
    <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-zinc-200">
        <span class="group">
            <span class="font-mono">&lt;</span>开发者<span class="font-mono">/&gt;</span>
            <span class="invisible before:content-['|'] group-hover:visible group-hover:animate-typing"></span>，</span
        >

        <span class="group relative bg-black/10 p-1 inline-flex">
            <span class="pointer-events-none absolute inset-0 border opacity-70 group-hover:border-dashed group-hover:opacity-100 border-lime-400/90"
                ><span class="absolute -left-[3.5px] -top-[3.5px] size-1.5 border bg-zinc-50 border-lime-400"></span
                ><span class="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border bg-zinc-50 border-lime-400"></span
                ><span class="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border bg-zinc-50 border-lime-400"></span
                ><span class="absolute -right-[3.5px] -top-[3.5px] size-1.5 border bg-zinc-50 border-lime-400"> </span>
            </span>
            工程师</span
        >，

        <span class="block h-2"></span>

        <span class="group inline-flex">
            <!-- <IconGoogleDown class="group-hover:animate-bounce duration-300" /> -->
            <BaseSvg name="google-down" class="group-hover:animate-bounce duration-300" />
            实习生，</span
        >

        <span class="group inline-flex">
            <!-- <IconDetails class="group-hover:fill-zinc-400 group-hover:rotate-180 duration-300" /> -->
            <BaseSvg name="details" class="group-hover:fill-zinc-400 group-hover:rotate-180 duration-300" />
            细节控</span
        >
    </h1>
</template>

<script setup>
import BaseSvg from '@/components/BaseSvg.vue';
</script>
