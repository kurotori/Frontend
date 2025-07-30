<template lang="html">
  <div class="contenedor">
    <h1>{{ contador }}</h1>
    <div class="botonera">
      <button @click="sumar()"> + </button>
      <button @click="restar()"> - </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const contador = ref(0)

  const sumar = ()=>{
    contador.value = contador.value + 1
  }

  const restar = ()=>{
    contador.value = contador.value - 1
  }
</script>

<style scoped lang="css">
  .contenedor{
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .botonera button{
    width: 80px;
    height: 80px;
    margin: 10px;
    font-size: 40px;
  }
</style>