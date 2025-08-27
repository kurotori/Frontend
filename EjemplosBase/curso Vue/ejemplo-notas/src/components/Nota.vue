<script setup>
    defineProps([
        'nota'
    ])
</script>

<template>
    <div :style="{backgroundColor:nota.bgColor}" class="nota
            w-2xs h-[280px]
            p-2.5
            mr-5 mb-5
            rounded-2xl
            bg-amber-200
            flex flex-col justify-between">
        <p class="texto">
            {{ nota.texto }}
        </p>
        <p class="fecha">
            {{ nota.fecha }}
        </p>
    </div>
</template>