import { createRouter, createWebHistory } from "vue-router";
import NuevoBicho from "../views/NuevoBicho.vue";
import VerBichos from "../views/VerBichos.vue";


const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/bicho/nuevo',
                component: NuevoBicho,
                name: 'nuevoBicho'
            },
            {
                path: '/bicho/:id'
            },
            {
                path: '/bichos',
                component: VerBichos,
                name: 'verBichos'
            }
        ]
    }
)


export default router
