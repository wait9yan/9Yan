<!--
 * @Author       : wait9yan
 * @Date         : 2024-04-16 10:48:11
 * @LastEditors  : wait9yan
 * @LastEditTime : 2024-04-16 10:50:59
 * @FilePath     : \9Yan\src\components\NotificationBar.vue
 * @Description  : 
-->
<script setup>
import { ref, computed, useSlots } from 'vue';
import { colorsBgLight, colorsOutline } from '@/style/colors.js';
import BaseLevel from '@/components/BaseLevel.vue';
import BaseSvg from '@/components/BaseSvg.vue';
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps({
    icon: {
        type: String,
        default: null,
    },
    outline: Boolean,
    color: {
        type: String,
        required: true,
    },
});

const componentClass = computed(() => (props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]));

const isDismissed = ref(false);

const dismiss = () => {
    isDismissed.value = true;
};

const slots = useSlots();

const hasRightSlot = computed(() => slots.right);
</script>

<template>
    <div v-if="!isDismissed" :class="componentClass" class="mb-6 rounded-lg border px-3 py-6 transition-colors duration-150 last:mb-0 md:py-3">
        <BaseLevel>
            <div class="flex flex-col items-center md:flex-row">
                <BaseSvg v-if="icon" :path="icon" w="w-10 md:w-5" h="h-10 md:h-5" size="24" class="md:mr-2" />
                <span class="text-center md:py-2 md:text-left">
                    <slot />
                </span>
            </div>
            <slot v-if="hasRightSlot" name="right" />
            <BaseButton v-else :icon="mdiClose" small rounded-full color="white" @click="dismiss" />
        </BaseLevel>
    </div>
</template>
