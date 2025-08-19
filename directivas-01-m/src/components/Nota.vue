<script setup>
    import { RouterLink } from 'vue-router'

    defineProps(
        ['nota']
    )
</script>

<template>
    <div class="nota
              w-[250px] h-[280px]
              bg-amber-300
              flex flex-col justify-between
              p-3.5
              rounded-2xl
              ">
        <router-link :to="{name:'verNota', params:{id:nota.id }}">
            <h2 class="titulo
                font-bold">
                {{ nota.titulo }}
            </h2>
        </router-link>
        <p class="texto
            text-justify">
            {{ nota.texto }}
        </p>

        <p class="fecha">
            {{ nota.fecha }}
        </p>

    </div>
</template>

<style scoped>

</style>