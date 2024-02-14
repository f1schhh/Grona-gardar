import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutProductsview from './views/AboutProductsview.vue'
import ProductsPageview from './views/ProductsPageview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/product/:id',
      component: AboutProductsview
    },
    {
      path: '/products',
      component: ProductsPageview
    }
  ]
});

export default router;
