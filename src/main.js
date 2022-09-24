import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/main.css'


const app = createApp(App)


axios.defaults.baseURL = 'https://escook.cn'
app.config.globalProperties.$axios = axios

app.mount('#app')