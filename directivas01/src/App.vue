<script setup>
  import { ref } from 'vue'

  const verTelon = ref(false)
  const nuevaNota = ref("")
  const notas = ref([])

  const agregarNota = ()=>{
    const nota = {
      texto: nuevaNota.value,
      tiempo: new Date().toLocaleString(),
      id: crypto.randomUUID()
    }
    notas.value.push(nota)
    alert("La nota se guardó con éxito")
    verTelon.value = false
    nuevaNota.value = ""
  }
</script>

<template>
  <div v-if="verTelon" class="telon 
        absolute 
        w-full h-full 
        bg-black/50 
        z-10
        flex
        justify-center
      items-center">
    <div class="nuevaNota
          w-1/3 h-1/3
          bg-amber-100
          rounded-2xl
          p-4
          flex flex-col justify-center">
      <textarea v-model="nuevaNota" rows="4"
          class="texto
            bg-white">

      </textarea>
      <button @click="agregarNota()"
              class="btnAgregarNota
                bg-green-700
                text-white
                hover:bg-green-500
                active:g-green-500
                active:g-green-500
                active:bg-green-300
                m-2
                rounded-2xl">
        Agregar Nota</button>
      <button @click="verTelon = false"
              class="btnCancelar
                bg-red-700
                text-white
                hover:bg-red-500
                active:bg-red-300
                m-2
                rounded-2xl">
        Cancelar
      </button>
    </div>
  </div>
  
  <div class="principal w-[100vw] h-[100vh]">
    <div class="barra 
          flex justify-between 
          p-5 h-[15vh]
          border-b-black border-b-1">
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
    <div class="blocDeNotas
            h-[85vh]
            flex justify-center">
      
      <div v-for="nota in notas" :id="nota.id" 
            class="nota
              w-[200px] h-[260px]
              bg-amber-300
              mt-4 mx-2
              rounded-2xl
              p-3
              flex flex-col justify-between">
        <p class="texto
            text-justify">
          {{ nota.texto }}
        </p>
        <p class="fecha">
          {{ nota.tiempo }}
        </p>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>