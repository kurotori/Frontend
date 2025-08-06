<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navegacion
            w-[100vw] h-[10vh]
            bg-[peru]
            flex flex-row
            ">
        <router-link to="inicio"
                    class="hover:bg-amber-200
                    px-2">
            Ir a Inicio
        </router-link>
        <router-link to="segunda"
                    class="hover:bg-amber-200
                    px-2">
            Ir a Segunda
        </router-link>
    </nav>
</template>





<!-- Documentación sobre elemento 'nav':
        https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/nav
      -->