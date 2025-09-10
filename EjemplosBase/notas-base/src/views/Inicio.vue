<script setup>
import { ref, reactive } from 'vue'
import Nota from '../components/Nota.vue'

//Inicioalización del almacen de notas
import { useAlmacenNotas } from '../store/notas'

const almacenNotas = useAlmacenNotas()
almacenNotas.obtenerNotas()

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