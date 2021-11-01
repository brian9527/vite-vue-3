import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createHead } from '@vueuse/head';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'layouts-generated';
import './styles/main.css';

const head = createHead();

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

createApp(App).use(head).use(router).mount('#app');
