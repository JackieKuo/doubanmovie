import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件
import Index from './views/index'
import Billboard from './views/billboard'
import Recommanded from './views/recommanded'

//定义路由
var routes = [
    {
        path: '/',
        redirect: { path: '/index' }
    },
    { 
        path: '/index', component: Index,
        children: [
            {
                path: '', component: Billboard,
                children: [
                    { path: '', component: Recommanded }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})

export default router