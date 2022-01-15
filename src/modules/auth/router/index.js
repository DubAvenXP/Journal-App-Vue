export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth" */ '../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "Login" */ '../views/Register.vue')
        },

    ]
}