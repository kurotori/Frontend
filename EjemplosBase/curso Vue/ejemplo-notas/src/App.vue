
<script setup>
  import { ref } from 'vue'
  import Nota from './components/Nota.vue'

  const verTelon = ref(false)
  
  const nuevaNota = ref("")
  
  const notas = ref([])

  function getRandomColor() {
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

  const agregarNota = () =>{
    notas.value.push({
      id: crypto.randomUUID(),
      texto: nuevaNota.value,
      fecha: new Date().toLocaleString("es-LA"),
      bgColor: getRandomColor()
    })
    console.log(notas)
    verTelon.value = false
    nuevaNota.value = ""
  }

</script>
<template lang="html">
  <main class="
          w-screen
          h-screen
          bg-white">
    <div v-if="verTelon" class="
            telon
            absolute
            w-full h-full
            bg-black/75
            z-10
            flex items-center justify-center">
      
      <div class="
              modal
              relative 
              flex flex-col
              w-3/4
              max-w-[750px]
              rounded-2xl
              p-[30px]
              bg-white
              ">
        <textarea v-model="nuevaNota" name="nota" id="nota" cols="30" rows="10">
        </textarea>
        <button @click="agregarNota" class="
                  w-full
                  px-[10px] py-[20px]
                  mt-[15px]
                  border-none
                  bg-purple-700
                  text-2xl
                  text-white
                  cursor-pointer
                  hover:bg-purple-500
                  active:bg-purple-800
                  ">
          Crear Nota
        </button>
        <button @click="verTelon = false" class="
                  w-full
                  px-[10px] py-[20px]
                  mt-[15px]
                  border-none
                  bg-red-700
                  text-2xl
                  text-white
                  cursor-pointer
                  hover:bg-red-500
                  active:bg-red-800
                  ">
          Cancelar
        </button>
      </div>

    </div>
    <div class="
            contenedor
            h-full  
            max-w-[1000px] 
            p-[10px] 
            m-[0] m-auto">

      <header class="
                h-1/5
                flex justify-between items-center
                ">
        <h1 class="
              font-bold
              mb-[25px]
              text-7xl
              ">
          Notas:
        </h1>
        <button @click="verTelon = true" class="
                  relative
                  top-0
                  w-[50px]
                  aspect-square
                  bg-red-800
                  rounded-full
                  border-none
                  p-[10px]
                  text-white
                  text-2xl
                  cursor-pointer
                  transition-all duration-100
                  hover:-top-[5px]
                  hover:bg-red-600
                  active:top-[2px]
                  active:bg-red-400
                  ">+
        </button>
      </header>
      <div class="
              contenedor-notas
              h-4/5
              flex flex-wrap
              overflow-y-scroll">
        <Nota v-for="nota in notas" :nota="nota"/>

        <!-- <div v-for="nota in notas" 
          :key="nota.id" 
          :style="{backgroundColor : nota.bgColor}" 
          class="
                nota
                w-2xs aspect-square
                p-2.5
                mr-5 mb-5
                rounded-2xl
                flex flex-col justify-between">
          <div class="texto">
            {{ nota.texto }} <br>
            {{ nota.id }}
          </div>
          <div class="fecha">
            {{ nota.fecha.toLocaleDateString("es-LA") }}
          </div>
        </div> -->
        

      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
  @import 'tailwindcss';
</style>