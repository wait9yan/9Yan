<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-11 16:39:13
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-12 14:06:14
 * @FilePath     : \9Yan\src\components\HomeTitle.vue
 * @Description  : 
-->
<template>
    <div class="text-center">
        <h1 class="translate-y-4 uppercase opacity-10">
            <slot name="en" />
        </h1>
        <h2 class="translate-y-[-1rem]">
            <slot name="cn" />
        </h2>
        <div class="inline-block h-1 w-20 translate-y-[-1rem] bg-black opacity-60"></div>
    </div>
</template>
