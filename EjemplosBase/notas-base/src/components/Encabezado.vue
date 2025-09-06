<script setup>
import { ref, reactive } from 'vue'
import { useAlmacenNotas } from '../store/notas'

const verTelon = ref(false)

//Inicialización del almacen de notas
const almacenNotas = useAlmacenNotas()

const notas = almacenNotas.notas

const nuevaNota = reactive({
    titulo: "",
    texto: ""
})

const agregarNota = () => {

    almacenNotas.agregarNota(nuevaNota)

    //alert("La nota se guardó con éxito")
    console.log(almacenNotas.notas)
    verTelon.value = false
    nuevaNota.titulo = ""
    nuevaNota.texto = ""
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
            <input v-model="nuevaNota.titulo" type="text" class="titulo bg-white">
            </input>
            <textarea v-model="nuevaNota.texto" rows="3" class="texto
            mt-1
            bg-white">

      </textarea>
            <button @click="agregarNota()" class="btnAgregarNota
                bg-green-700
                text-white
                hover:bg-green-500
                active:g-green-500
                active:g-green-500
                active:bg-green-300
                m-2
                rounded-2xl">
                Agregar Nota</button>
            <button @click="verTelon = false" class="btnCancelar
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
    <div class="barra 
          flex justify-between 
          p-5 h-[15vh]
          border-b-black border-b-1">
        <h1 class="text-3xl font-bold">Notas</h1>
        <button @click="verTelon = true" class="
                h-[60px]
                aspect-square
                rounded-3xl
                flex items-center justify-center
              bg-blue-950 text-white
                text-3xl
                hover:bg-blue-500
                active:bg-blue-300
                ">
            +</button>
    </div>
</template>