import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' //---> Obtener las reglas de ruteo

//createApp(App).mount('#app')
const app = createApp(App) //Derivar el objeto app para poder agregare el ruteo

app.use(router) //Agregamos las reglas de ruteo al objeto app

app.mount('#app') //Montamos el objeto app
