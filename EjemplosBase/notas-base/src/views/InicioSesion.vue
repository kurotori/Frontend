<script setup>
    import { ref } from 'vue';
    import router from '../router';

    import instanciaAxios from '../services/api';

    const email = ref('')
    const password = ref('')

    const enviarDatos = async ()=>{
        const datosUsuario = {
            email:email.value,
            password:password.value,
        }

        try {
            const respuesta = await instanciaAxios.post('ingresar', datosUsuario)
            console.log("RESPUESTA -->") 
            console.log(respuesta.data)
            alert("El servidor dice: " + respuesta.data.estado + "\n" + respuesta.data.mensaje)
            let destino = respuesta.data.destino
            router.push(destino)

        } catch (error) {
            console.error("ERROR --> ")
            console.error(error)
            console.error(error.response.data)
        }
    }
</script>

<template>
    <div class="base 
            w-[100vw] h-[80vh]
            bg-amber-300
            flex justify-center items-center  
        ">
        <div class="contenido
                w-2/5 h-4/5
                bg-green-300
                rounded-3xl
                p-2
                flex flex-col items-center
                text-center
            ">
            <h1 class="titulo
                    text-4xl font-bold
                ">
                Ingresar en el Sistema
            </h1>
            <br>
            <form @submit.prevent="enviarDatos" class="formLogin
                                    relative top-10
                                    w-4/5
                                    grid grid-cols-2 grid-rows-4 gap-1
                                    text-left      
                ">

                <label for="email">Email:</label>
                <input type="text" id="email" v-model="email">

                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
                <p class="h-4"></p>
                <button class="btnRegistro
                            col-span-2
                            bg-amber-50
                    ">
                    Crear Usuario
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .formLogin input{
        margin-left: 20px;
        background-color: white;
    }

    .error {
        border: solid red 1px;
        background-color: pink;
    }
    
</style>