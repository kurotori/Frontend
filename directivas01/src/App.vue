<script setup>
  import { ref } from 'vue'

  const verTelon = ref(false)
</script>

<template>
  <div v-if="verTelon" @click="verTelon = false" class="telon 
        absolute 
        w-full h-full 
        bg-black/50 
        z-10
        flex
        justify-center
      items-center">
    <div class="nuevaNota
          w-1/3
          h-1/3
          bg-amber-100
          rounded-2xl">

    </div>
  </div>
  
  <div class="principal w-[100vw] h-[100vh]">
    <div class="barra flex justify-between p-5">
      <h1 class="text-3xl font-bold">Notas</h1>
      <button @click="verTelon = true" class="
                w-[50px]
                aspect-square
                rounded-3xl
              bg-blue-950 text-white
                text-3xl
                hover:bg-blue-500
                active:bg-blue-300
                ">
                +</button>
    </div>
  </div>
</template>

<style scoped>

</style>