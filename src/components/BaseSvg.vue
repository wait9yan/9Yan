<template>
    <svg>
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
});
</script>
