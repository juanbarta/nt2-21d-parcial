import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
import Notas from './components/Notas/index.vue'
import Respuestas from './components/Respuestas.vue'

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect: '/notas'},
        {path: '/notas', component: Notas},
        {path: '/respuestas', component: Respuestas}


    ]
})