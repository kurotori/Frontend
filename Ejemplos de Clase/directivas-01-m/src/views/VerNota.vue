<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useAlmacenNotas } from '../store/notas';
    
    const almacenNotas = useAlmacenNotas()
    const ruta = useRoute() //Objeto con información de la ruta

    const nota = computed(
        ()=>{
            const idNota = ruta.params.id //Obtiene la ID de la nota
            return almacenNotas.notaPorID(idNota)
        }
    )
    

</script>

<template>
    <div class="base
            w-[100vw] h-[100vh]
            bg-white
            flex justify-center items-center">
        <div class="cuerpoNota
                w-4/5 h-9/10
                bg-amber-300
                rounded-2xl
                p-4">
            <div class="encabezado
                    w-full h-fit
                    flex flex-row justify-between
                    border-b border-black
                    ">
                <h1 class="titulo
                    font-bold text-3xl
                    ">
                    {{ nota.titulo }}
                </h1>
                <h3 class="fecha
                " >
                    {{ nota.fecha }}
                </h3>
            </div>
            
            <p class="texto 
                mt-2.5">
                {{ nota.texto }}
            </p>
        </div>
    </div>
    
</template>