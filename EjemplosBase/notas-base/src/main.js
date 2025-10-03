import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";//PINIA: Se agrega pinia al proyecto
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//import axios from "axios"; 
import instanciaAxios from "./services/api";//AXIOS: Se agrega axios al proyecto

//createApp(App).mount('#app')

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(router);
//app.use(instanciaAxios);
app.mount("#app");
