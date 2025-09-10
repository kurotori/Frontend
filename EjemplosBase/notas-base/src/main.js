import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";//PINIA: Se agrega pinia al proyecto

//import axios from "axios"; 
import instanciaAxios from "./services/api";//AXIOS: Se agrega axios al proyecto

//createApp(App).mount('#app')

const app = createApp(App);

const pinia = createPinia(); //PINIA: Se crea la instancia de pinia

//AXIOS: configuración
/* axios.defaults.baseURL = 'http://127.0.0.1:8000/api/' // AXIOS: Se establece la URL base a la que apunta axios
axios.defaults.headers.post['Content-Type'] = 'application/json' //AXIOS: configuración de cabeceras 
app.config.globalProperties.$axios = axios //AXIOS: Agregamos axios como propiedad global
 */
app.use(pinia);
app.use(router);
//app.use(instanciaAxios);
app.mount("#app");
