import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Productos from '../views/ProductView.vue';
import Inventario from '../views/InventarioView.vue';
import Contacto from '../views/ContactoView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Productos },
  { path: '/inventario', component: Inventario },
  { path: '/contacto', component: Contacto }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;