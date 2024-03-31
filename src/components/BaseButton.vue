<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-29 09:59:53
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-03-29 11:44:22
 * @FilePath     : \9Yan\src\components\BaseButton.vue
 * @Description  : 
-->
<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    label: {
        type: [String, Number],
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
    target: {
        type: String,
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    as: {
        type: String,
        default: null,
    },
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean,
});

const is = computed(() => {
    if (props.as) {
        return props.as;
    }

    if (props.to) {
        return RouterLink;
    }

    if (props.href) {
        return 'a';
    }

    return 'button';
});

const computedType = computed(() => {
    if (is.value === 'button') {
        return props.type ?? 'button';
    }

    return null;
});

const componentClass = computed(() => {
    const base = [
        'size-10',
        'inline-flex justify-center items-center',
        'whitespace-nowrap',
        'bg-gradient-to-b from-zinc-200/50 to-white/50 backdrop-blur backdrop-slate-200',
        'ring-1 ring-slate-900/5',
        'shadow-lg shadow-slate-800/5',
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        props.roundedFull ? 'rounded-full' : 'rounded-xl',
        'transition-colors',
        'duration-150',
    ];

    if (props.disabled) {
        base.push(props.outline ? 'opacity-50' : 'opacity-70');
    }

    return base;
});
</script>

<template>
    <component :is="is" :class="componentClass" :href="href" :type="computedType" :to="to" :target="target" :disabled="disabled">
        <slot />
        <span v-if="label" :class="labelClass">{{ label }}</span>
    </component>
</template>
