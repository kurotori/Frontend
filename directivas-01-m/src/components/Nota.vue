<script setup>
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
              ">

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