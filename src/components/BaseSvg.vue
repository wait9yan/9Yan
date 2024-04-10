<template>
    <svg :width="width" :height="height">
        <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script setup>
defineProps({
    prefix: {
        type: String,
        default: '#icon-',
    },

    name: {
        type: String,
        default: '',
    },

    color: {
        type: String,
        default: '',
    },
    width: {
        type: String,
        default: '1em',
    },
    height: {
        type: String,
        default: '1em',
    },
});
</script>
