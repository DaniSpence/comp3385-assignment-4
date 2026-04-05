import { createRouter, createWebHistory } from 'vue-router';
import AddMovieView from '../Pages/AddMovieView.vue';

const routes = [
    {
        path: '/movies/create',
        name: 'movies.create',
        component: AddMovieView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;