<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-09 19:34:15
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-09 21:26:27
 * @FilePath     : \9Yan\src\components\HomeContentWarp.vue
 * @Description  : 
-->
<template>
    <div class="flex w-full">
        <div class="basis-1/2">
            <div>
                <slot name="blog" />
            </div>
            <div>
                <slot name="work" />
            </div>
            <div>
                <slot name="about" />
            </div>
        </div>
        <div class="basis-1/2">
            <slot name="scrollShow" />
        </div>
    </div>
</template>
