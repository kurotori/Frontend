<script setup>
import { ref, reactive } from 'vue'
import Nota from '../components/Nota.vue'

//Inicioalización del almacen de notas
import { useAlmacenNotas } from '../store/notas'

const almacenNotas = useAlmacenNotas()
almacenNotas.obtenerNotas()

const n1 = {
  id: 20,
  titulo: 'probando',
  texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dignissimos!',
  fecha: '20/05/2010'
}
</script>

<template>
  <div class="principal 
          w-[100vw] h-[80vh]
    ">
    <div class="blocDeNotas
            h-full
            flex justify-center">
      <Nota v-for="nota in almacenNotas.notas" :nota="nota" :key="nota.id">

      </Nota>

    </div>
  </div>
</template>

<style scoped></style>