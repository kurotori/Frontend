<script setup>
  import { ref,reactive } from 'vue'; //Agrega reactividad
  import Nota from '../components/Nota.vue'
  
  import { useAlmacenNotas } from '../store/notas';
  const almacenNotas = useAlmacenNotas()
  
  const verTelon = ref(false) //Control del DIV 'telon'
  
  const nNota = reactive(
                  {
                    titulo : "",
                    texto  : ""    
                  }
                ) //Auxiliar para la nota 

  const agregarNota = ()=>{
        
    almacenNotas.agregarNota(nNota.titulo, nNota.texto)
    
    alert("Tu nota se ha creado con éxito")
    verTelon.value = false
    nNota.texto = ""
    nNota.titulo = ""
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
            w-1/3 h-7/20
            bg-amber-100
            rounded-2xl
            flex justify-center flex-col
            p-2.5
            ">
      <input type="text" v-model="nNota.titulo" 
        class="titulo
          bg-white
          border-2 border-gray-400">
      <textarea v-model="nNota.texto" rows="4" class="texto
                          bg-white
                          border-2 border-gray-400
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
            w-full h-[70vh]
            p-9
            flex justify-around">
      <Nota v-for="nota in almacenNotas.notas" :nota="nota" 
            :key="nota.id" >

      </Nota>      
    </div>
    <div class="pie
            w-full h-[10vh]
            border-t border-black
            flex justify-center
            ">
      <p class="cantNotas
        font-bold">
        {{ almacenNotas.notas.length }} Notas
      </p>
      

    </div>
  </div>

</template>

<style scoped>
</style>