<template>
    <div class="base 
        w-[100vw] h-[80vh]
        bg-amber-300
        flex justify-center items-center  
        ">
        <div class="contenido
                w-4/5 h-4/5
                bg-green-500
                rounded-3xl
                p-2
                text-center
            ">
            <h1 class="titulo
                    text-4xl font-bold
                ">
                Registrarse en el Sistema
            </h1>
            <br>
            <form class="formRegistro" @submit.prevent >
                <label for="">Nombre de usuario:</label>
                <input type="text">
                <br>
                <label for=""></label>
                <input type="text">
                <br>
                <label for=""></label>
                <input type="text">
                <br>
                <label for=""></label>
                <input type="text">
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .formRegistro input{
        margin-left: 20px;
        background-color: white;
    }
    
</style>