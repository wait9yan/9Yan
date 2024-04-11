<!--
 * @Author       : wait9yan
 * @Date         : 2024-03-29 09:59:53
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-11 22:06:02
 * @FilePath     : \9Yan\src\components\BaseButton.vue
 * @Description  : 
-->
<script setup>
import { ref, computed, onMounted } from 'vue';
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

const componentType = computed(() => {
    if (is.value === 'button') {
        return props.type ?? 'button';
    }

    return null;
});

const isDropdownOpen = ref(false);
const component = ref(null);
const componentClass = computed(() => {
    const base = [
        'group',
        'relative',
        'inline-flex justify-center items-center',
        // 'whitespace-nowrap',
        'bg-gradient-to-b from-zinc-200/50 to-white/50 hover:to-zinc-200/50 backdrop-blur backdrop-slate-200',
        'ring-1 ring-slate-900/5',
        'shadow-xl hover:shadow-none shadow-slate-800/5',
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        props.roundedFull ? 'rounded-full' : 'rounded-xl',
        props.disabled ? 'opacity-80' : 'opacity-100',
        'transition-all',
        'duration-300',
    ];
    return base;
});

const labelClass = computed(() => {
    const base = [
        'absolute',
        'px-2 py-1',
        'bg-gradient-to-b from-zinc-200/50 to-white/50 backdrop-blur backdrop-slate-200',
        'ring-1 ring-slate-900/5',
        'shadow-lg shadow-slate-800/5',
        'text-sm',
        'whitespace-nowrap',
        'rounded-md',
        isDropdownOpen.value ? 'opacity-100' : 'opacity-0',
        'transition-opacity',
        'duration-300',
    ];
    return base;
});

const componentHeight = ref(null);
const labelStyle = computed(() => {
    const base = {
        top: `${componentHeight.value + 8}px`,
    };
    return base;
});

onMounted(() => {
    componentHeight.value = component.value.offsetHeight;
});
</script>

<template>
    <component
        ref="component"
        @mouseenter="isDropdownOpen = true"
        @mouseleave="isDropdownOpen = false"
        :is="is"
        :class="componentClass"
        :href="href"
        :type="componentType"
        :to="to"
        :target="target"
        :disabled="disabled"
    >
        <slot />
        <span v-if="label" :class="labelClass" :style="labelStyle">{{ label }} </span>
    </component>
</template>
