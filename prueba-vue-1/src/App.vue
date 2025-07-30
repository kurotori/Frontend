<script setup>
  import { ref } from 'vue'

  const contador = ref(0)
  const texto = ref("cosa")
  const activo = ref(true)

  const sumar = () => {
    contador.value = contador.value + 1
  }

  const restar = () => {
    contador.value = contador.value - 1
  }
  

</script>

<template lang="html">
  <!-- div>h1 -->
  <div class="contador">
    <h1> {{ contador }} </h1>
  </div>

  <!-- div>(div>button)*2 -->
  <div class="botonera">
    <div>
      <button @click="sumar()"> + </button>
    </div>
    <div>
      <button @click="restar()"> - </button>
    </div>
  </div>
</template>



<style scoped lang="">

  .contador{
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
  }

  .botonera{
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
  }

  .botonera button{
    width: 80px;
    height: 80px;
    margin: 20px;
    font-size: 50px;
  }
</style>