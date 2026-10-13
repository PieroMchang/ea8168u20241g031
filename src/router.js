/**
 * @summary Application Router Configuration
 * @author Piero Francisco Montes Chang
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from './showroom/presentation/views/home.vue';
import NewItem from './showroom/presentation/views/new-vehicle-inventory-item.vue';
import PageNotFound from './shared/presentation/views/page-not-found.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home, meta: { title: 'Home' } },
        { path: '/vehicle/items/new', component: NewItem, meta: { title: 'New Item' } },
        { path: '/:pathMatch(.*)*', component: PageNotFound, meta: { title: 'Not Found' } }
    ]
});