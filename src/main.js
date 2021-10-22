import { createApp } from 'vue'
//import Login from './Activities.vue'
import Login from './Login.vue'
import router from './router'

createApp(Login).use(router).mount('#login')