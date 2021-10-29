import {createRouter, createWebHistory} from 'vue-router'
import App from '../App.vue'
import Login from '../Login.vue'

const routes = [
    {
        path:'/',
        name:'App',
        component:App
    },
    {
        path:'/',
        name:'Login',
        component:Login
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router