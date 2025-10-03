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
      sesionActiva: (state)=> !!state.usuario
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.
        agregarSesion(usuarioN){
          this.usuario = usuarioN
          console.log(this.usuario)
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
                //console.log(respuesta)
                alert("El servidor dice: " + respuesta.data.mensaje)
                
                this.agregarSesion(respuesta.data.usuario)
                console.log(this.sesionActiva)

            } catch (error) {
                this.error = error

                console.error("ERROR --> ")
                console.error(error)
                alert(error.response.data.mensaje)
            }
            this.loading = false
        },

    },

  }
);
