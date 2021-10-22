import {createRouter, createWebHistory} from 'vue-router'
import App from '../App.vue'
import Login from '../Login.vue'
import How from '../How.vue'
import Activities from '../Activities.vue'

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
    {
        path:'/',
        name:'Activities',
        component:Activities
    },
    {
        path:'/',
        name:'How',
        component:How
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router