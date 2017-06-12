import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件
import Billboard from './views/Billboard'
import Hot from './views/Hot'
import Movie from './views/Movie'
import Celebrity from './views/Celebrity'
import Login from './views/login'
import InTheater from './views/InTheater'
import ComingSoon from './views/ComingSoon'
import Top250 from './views/Top250'
import UsBox from './views/UsBox'

//定义路由
var routes = [
    {
        path: '/',
        redirect: { path: '/billboard/hot' }
    },
    { 
        path: '/billboard', component: Billboard,
        children: [
            { path: '', redirect: { path: 'hot' } },
            { path: 'hot', component: Hot },
            { path: 'in-theater', component: InTheater },
            { path: 'coming-soon', component: ComingSoon },
            { path: 'top250', component: Top250 },
            { path: 'us-box', component: UsBox },
        ]
    },
    {
        path: '/movie', component: Movie
    },
    {
        path: '/celebrity', component: Celebrity
    },
    {
        path: '/login', component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})

export default router