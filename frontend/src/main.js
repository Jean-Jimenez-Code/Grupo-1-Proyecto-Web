//Instancia de aplicación de Vue con la función createApp 
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).mount('#app') //.mount() para que se llame a su método, en contenedor app

