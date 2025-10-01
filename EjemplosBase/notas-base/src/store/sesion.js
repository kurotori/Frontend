import { defineStore } from "pinia";
import instanciaAxios from "../services/api";

export const useAlmacenSesion = defineStore(
  "sesion", //Identificador único del almacenamiento
  {
    state: () => ({
      //Estado reactivo del almacen
      usuario: [], //Almacen de las notas
      loading: false,
      error: null,
    }),
    getters: {
      //Métodos para obtener elementos del almacen
      verUsuario: (state) => {
        return () => {
            usuario[0]
        }
      },
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.
        agregarSesion(usuario){
          this.usuario[0] = usuario
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
                console.log(respuesta)
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

      async obtenerNotas(){
        this.loading = true
        this.error = null
        try {
          const respuesta = await instanciaAxios.get('notas')
          this.notas = respuesta.data.notas
        } catch (error) {
          this.error = error          
        } finally {
          this.loading = false
        }
      }
    },
  }
);
