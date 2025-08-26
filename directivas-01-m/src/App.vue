<script setup>
  import { RouterView } from 'vue-router';
  import { useAlmacenNotas } from './store/notas';
  const almacenNotas = useAlmacenNotas()
</script>
<template>
  <router-view></router-view>
</template>