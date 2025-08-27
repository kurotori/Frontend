<script setup>
  import { ref, reactive } from 'vue'
  import Nota from '../components/Nota.vue'

  const verTelon = ref(false)
  const nuevaNota = ref({
    titulo:"",
    texto:""
  })
  
  const notas = ref([])

  const agregarNota = ()=>{
    const nota = {
      titulo: nuevaNota.value.titulo,
      texto: nuevaNota.value.texto,
      tiempo: new Date().toLocaleString(),
      id: crypto.randomUUID()
    }
    notas.value.push(nota)
    alert("La nota se guardó con éxito")
    verTelon.value = false
    nuevaNota.value.titulo = ""
    nuevaNota.value.texto = ""
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
      <input v-model="nuevaNota.titulo" type="text"
        class="titulo bg-white">
      </input>
      <textarea v-model="nuevaNota.texto" rows="3"
          class="texto
            mt-1
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
      <Nota v-for="nota in notas" :nota="nota" :key="nota.id">
        
      </Nota>
      
    </div>
  </div>
</template>

<style scoped>

</style>