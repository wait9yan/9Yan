<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-12 09:15:15
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 23:44:30
 * @FilePath     : \9Yan\src\components\BaseTitle.vue
 * @Description  : 
-->
<template>
    <div class="space-y-3">
        <h2>
            <slot name="title" />
        </h2>
        <div>
            <slot name="disc" />
        </div>
        <div class="inline-block h-1 w-20 bg-black opacity-60"></div>
    </div>
</template>
