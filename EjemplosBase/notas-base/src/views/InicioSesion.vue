<script setup>
import { ref } from 'vue';
import router from '../router';

import axios from 'axios';
import instanciaAxios from '../services/api';

const email = ref('')
const password = ref('')


const enviarDatos = async () => {
    const datosUsuario = {
        email: email.value,
        password: password.value,
    }

    try {
        await axios.get(
            "http://localhost:8000/sanctum/csrf-cookie",
            {
                withCredentials: true,
                //withXSRFToken:true
            }
        )
        //await instanciaAxios.axiosCSRF.get('',{withCredentials:true})
        //console.log('COOKIE')
        //console.log(getCookie('XSRF-TOKEN'))
        //.then(
        //datos => {
        const respuesta = await axios.//instanciaAxios.axiosBase.
            post(
                'http://localhost:8000/api/ingresar',
                datosUsuario,
                {
                    headers: {
                        Accept: 'application/json'
                    },
                    withCredentials: true,
                    withXSRFToken: true,
                    xsrfCookieName: 'XSRF-TOKEN',

                })
        console.log("RESPUESTA -->")
        console.log(respuesta)
        alert("El servidor dice: " + respuesta.data)


    } catch (error) {
        console.error("ERROR --> ")
        console.error(error)
        console.error(error.response.data)
        alert(error.response.data.mensaje)
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
            <div class="formLogin
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
                <button @click="enviarDatos()" class="btnRegistro
                            col-span-2
                            bg-amber-50
                    ">
                    Iniciar Sesión
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.formLogin input {
    margin-left: 20px;
    background-color: white;
}

.error {
    border: solid red 1px;
    background-color: pink;
}
</style>