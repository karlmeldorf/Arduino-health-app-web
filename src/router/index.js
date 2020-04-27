import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Scale from '@/views/Scale.vue'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        { 
            path: '/', 
            name: 'Home',
            component: Home 
        },
        { 
            path: '/scale',
            name: 'Scale',
            component: Scale 
        }
    ]
})

export default router