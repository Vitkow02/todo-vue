import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Notes from '../views/Notes.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/note',
        name: 'Note',
        component: Notes,
    },
    {
        path: '/note/:noteId',
        name: 'Edit',
        component: Notes
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;