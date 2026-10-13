/**
 * @summary Main Application Entry Point
 * @author Piero Francisco Montes Chang
 */
import { createApp } from 'vue'
import App from './app.vue'
import './style.css'

import router from './router.js'
import i18n from './i18n.js'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from "primevue/button";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Drawer from "primevue/drawer";
import Select from "primevue/select";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue, { theme: { preset: Aura, options: { cssLayer: false } }, ripple: true });

app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-drawer', Drawer);
app.component('pv-select', Select);
app.component('pv-input-number', InputNumber);

app.mount('#app');