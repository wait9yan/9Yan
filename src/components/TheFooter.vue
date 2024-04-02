<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-26 14:00:35
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-02 10:50:57
 * @FilePath     : \9Yan\src\components\TheFooter.vue
 * @Description  : 
-->
<script setup>
import ContentWrap from '@/components/ContentWrap.vue';
</script>

<template>
    <ContentWrap>
        <div class="w-full h-64 bg-slate-300 flex">
            <div>
                <h3>友情链接</h3>
                <p>/</p>
            </div>
            <div>
                <h3>与我联系</h3>
                <p>Mail</p>
                <p>QQ</p>
                <p>Telegram</p>
            </div>
            <div>
                <h3>© 2024 Wait9Yan.</h3>
                <p>备xx号</p>
                <p>网站已开源</p>
            </div>
        </div>
    </ContentWrap>
</template>
