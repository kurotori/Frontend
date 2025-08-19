//Reglas de ruteo
import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import VerNota from "../views/VerNota.vue";

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                component: Inicio,
                name: 'inicio'
            },
            {
                path: "/nota/:id",
                component: VerNota,
                name: 'verNota',
                props: true
            },
        ]
    }
)

export default router