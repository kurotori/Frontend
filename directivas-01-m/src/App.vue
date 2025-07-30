<script setup>
  import { ref } from 'vue'; //Agrega reactividad
  
  const verTelon = ref(false) //Control del DIV 'telon'
  const notas = ref([]) //Array para almacenar las notas
  const textoNota = ref("") //Auxiliar para el texto de la nota

  const agregarNota = ()=>{
    const nota = {
      texto: textoNota.value,
      fecha: new Date(),
      id: crypto.randomUUID()
    }
    notas.value.push(nota)
    alert("Tu nota se ha creado con éxito")
    verTelon.value = false
    textoNota.value = ""
  }

</script>

<template>
  <div v-if="verTelon" class="telon
          absolute
          w-[100vw] h-[100vh]
          bg-black/50
          z-10
          flex justify-center items-center">

    <div class="nuevaNota
            w-1/3 h-1/3
            bg-amber-100
            rounded-2xl
            flex justify-center flex-col
            p-2.5
            ">
            
      <textarea v-model="textoNota" rows="4" class="texto
                          bg-white
                          rounded-sm">
      </textarea>
      <button @click="agregarNota()" class="btnAgregarNota
                bg-green-700
                text-white
                rounded-sm
                m-2
                hover:bg-green-500
                active:bg-green-300">
        Agregar Nota
      </button>
      <button @click=" verTelon = false " 
              class="btnCancelar
                bg-red-700
                text-white
                rounded-sm
                m-2
                hover:bg-red-500
                active:bg-red-300">
        Cancelar</button>
    </div>

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
    <div class="tablero
            w-full h-[80vh]
            p-9
            flex justify-around">
      <div v-for="nota in notas"
            :id="nota.id"
            class="nota
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
      
    </div>
  </div>

</template>

<style scoped>
</style>