<script setup>
  import { ref } from 'vue'; //Agrega reactividad
  const verTelon = ref(false)
</script>

<template>
  <div v-if="verTelon" @click=" verTelon = false " class="telon
          absolute
          w-[100vw] h-[100vh]
          bg-black/50
          z-10">

  </div>
  <div class="
        principal
        w-[100vw] h-[100vh]">
    <div class="
          encabezado
          w-full h-[20vh]
          border-b-black
          border-b
          p-5
          flex justify-between
          ">
      <h1 class="
            text-5xl
            font-bold">
        Notas:
      </h1>

      <button @click=" verTelon = true " class="
                w-[70px] h-[70px]
                bg-blue-900
                text-white
                text-4xl
                rounded-full
                hover:bg-blue-700
                active:bg-blue-300
              ">
        +
      </button>
    
    </div>
    <div class="tablero">

    </div>
  </div>

</template>

<style scoped>
</style>