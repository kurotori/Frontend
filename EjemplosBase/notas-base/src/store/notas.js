import { defineStore } from "pinia";

export const useAlmacenNotas = defineStore(
  "notas", //Identificador único del almacenamiento
  {
    state: () => ({
      //Estado reactivo del almacen
      notas: [], //Almacen de las notas
    }),
    getters: {
      //Métodos para obtener elementos del almacen
      notaPorID: (state) => {
        return (notaId) => state.notas.find((nota) => nota.id === notaId);
      },
    },
    actions: {
      //Acciones para almacenar elementos, editarlos, eliminarlos, etc.

      /**
       * Permite agregar una Nota al almacen de datos
       * @param {*} titulo
       * @param {*} texto
       */
      agregarNota(titulo, texto) {
        const nota = {
          texto: texto,
          titulo: titulo,
          fecha: new Date().toLocaleString(),
          id: crypto.randomUUID(),
        };
        this.notas.push(nota);
      },
    },
  }
);
