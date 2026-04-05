import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Pages/HomeView.vue';
import AddMovieView from '../Pages/AddMovieView.vue';
import MoviesView from '../Pages/MoviesView.vue';

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/movies/create',
        component: AddMovieView
    },
    {
        path: '/movies',
        component: MoviesView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;