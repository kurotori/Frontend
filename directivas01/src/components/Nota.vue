<script setup>
    import { defineProps } from 'vue'
    defineProps([
        'nota'
    ])
</script>

<template>
    <div class="nota
            w-[200px] h-[260px]
            bg-amber-300
            mt-4 mx-2
            rounded-2xl
            p-3
            flex flex-col justify-between"
    >
        <p class="texto
            text-justify"
        >
        {{ nota.texto }}
        </p>
        <p class="fecha">
            {{ nota.tiempo }}
        </p>
    </div>
</template>