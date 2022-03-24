/* eslint-disable */
import Home from '@/views/Home.vue'
import NotFound from "@/views/NotFound";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Dashboard from "@/views/Dashboard";
import Account from "@/views/Account";
import List from "@/views/List";
import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

Vue.use(VueRouter)

const isUserLoggedIn = store.getters["isUserLoggedIn"]
const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") != null) {
            next({ name: "dashboard" })
        }
        next()

    }
},
{
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") != null) {
            next({ name: "dashboard" })
        }
        next()
    }
},
{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
            next({ name: "NotFound" })
        }
        next()
    }
},
{
    path: '/dashboard/account',
    name: 'account',
    component: Account,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
            next({ name: "NotFound" })
        }
        next()
    }
},
{
    path: '/dashboard/list/:id(\\d+)',
    name: 'list',
    props: true,
    component: List,

    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token") == null) {
            next({ name: "NotFound" })
        }
        next()
    }
},

// will match everything and put it under `$route.params.pathMatch`
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

    // will match anything starting with `/user-` and put it under `$route.params.afterUser`
    // { path: '/task-:afterTask(.*)', component: NotFound },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



export default router