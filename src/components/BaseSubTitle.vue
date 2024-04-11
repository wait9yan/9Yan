<template>
    <div class="text-center">
        <div class="text-6xl font-black uppercase opacity-10">
            <slot name="en" />
        </div>
        <h2 class="text-4xl font-bold translate-y-[-2rem]">
            <slot name="cn" />
        </h2>
        <div class="w-20 h-1 bg-black opacity-60 inline-block translate-y-[-2rem]"></div>
    </div>
</template>
