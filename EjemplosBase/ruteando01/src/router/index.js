//Reglas de ruteo
import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import SegundaView from "../views/SegundaView.vue";

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                component: InicioView,
                name: 'inicio'
            },
            {
                path: "/segunda",
                component: SegundaView,
                name: 'segunda'
            }
        ]
    }
)

export default router