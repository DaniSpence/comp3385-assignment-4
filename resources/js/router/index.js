import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Pages/HomeView.vue';
import AddMovieView from '../Pages/AddMovieView.vue';
import MoviesView from '../Pages/MoviesView.vue';
import LoginView from '../Pages/LoginView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/login',
        component: LoginView
    },
    {
        path: '/movies/create',
        component: AddMovieView, meta : { requiresAuth: true }
    },
    {
        path: '/movies',
        component: MoviesView, meta : { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')){
        next('/login');
    } else {
        next();
    }
});

export default router;