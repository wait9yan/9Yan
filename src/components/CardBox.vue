<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-02 15:41:11
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-02 15:44:19
 * @FilePath     : \9Yan\src\components\CardBox.vue
 * @Description  : 卡片
-->
<script setup>
import { computed, useSlots } from 'vue';
import CardBoxComponentBody from '@/components/CardBoxComponentBody.vue';
import CardBoxComponentFooter from '@/components/CardBoxComponentFooter.vue';

const props = defineProps({
    rounded: {
        type: String,
        default: 'rounded-2xl',
    },
    flex: {
        type: String,
        default: 'flex-col',
    },
    hasComponentLayout: Boolean,
    hasTable: Boolean,
    isForm: Boolean,
    isHoverAble: Boolean,
    isModal: Boolean,
});

const emit = defineEmits(['submit']);

const slots = useSlots();

const hasFooterSlot = computed(() => slots.footer && !!slots.footer());

const componentClass = computed(() => {
    const base = [props.rounded, props.flex, props.isModal ? 'dark:bg-slate-900' : 'dark:bg-slate-900/70'];

    if (props.isHoverAble) {
        base.push('hover:shadow-lg transition-shadow duration-500');
    }

    return base;
});

const submit = (event) => {
    emit('submit', event);
};
</script>

<template>
    <component :is="isForm ? 'form' : 'div'" :class="componentClass" class="bg-white flex" @submit="submit">
        <slot v-if="hasComponentLayout" />
        <template v-else>
            <CardBoxComponentBody :no-padding="hasTable">
                <slot />
            </CardBoxComponentBody>
            <CardBoxComponentFooter v-if="hasFooterSlot">
                <slot name="footer" />
            </CardBoxComponentFooter>
        </template>
    </component>
</template>
