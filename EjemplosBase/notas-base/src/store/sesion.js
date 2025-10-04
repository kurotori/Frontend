import { defineStore } from "pinia";
import instanciaAxios from "../services/api";

export const useAlmacenSesion = defineStore(
  "sesion", //Identificador único del almacenamiento
  {
    state: () => ({
      //Estado reactivo del almacen
      usuario: null, //Almacen de las notas
      loading: false,
      error: null,
    }),
    getters: {
      //Métodos para obtener elementos del almacen
      sesionIniciada: (state)=> !!state.usuario,
      sesionActiva: (state)=> state.usuario
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.
        agregarSesion(usuarioN){
          this.usuario = usuarioN
         
        },

        async iniciarSesion(datosUsuario){
            this.loading = true
            this.error = null
            try {
                await instanciaAxios.axiosCSRF.get('')
                
                const respuesta = await instanciaAxios.axiosBase.
                    post(
                        '/ingresar',
                        datosUsuario)
                console.log("RESPUESTA -->")
                console.log(respuesta.data.usuario)
                
                alert("El servidor dice: " + respuesta.data.mensaje)
                
                this.agregarSesion(respuesta.data.usuario)

            } catch (error) {
                this.error = error

                console.error("ERROR --> ")
                console.error(error)
                alert(error.response.data.mensaje)
            }
            this.loading = false
        },

    },
    persist: true, 
    /**
     * FRONTEND: Esta opción le indica al plugin de persistencia que debe habilitar la persistencia para 
     * este almacen.
     */
    
  }
);
