import {createRouter, createWebHistory} from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "Index" */ '../components/Index.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "User" */ '../components/User.vue')
    },
    {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "Role" */ '../components/Role.vue')
    },
    {
        path: '/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "Sales" */ '../components/Sales.vue'),
        children:[
            {
            path: '/addRole',
            name: 'addRole',
            component: () => import(/* webpackChunkName: "addRole" */ '../components/addRole.vue')
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router