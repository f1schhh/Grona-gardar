import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutProductsview from './views/AboutProductsview.vue'
import ProductsPageview from './views/ProductsPageview.vue'
import AccountView from './views/AccountView.vue'
import SearchView from './views/SearchView.vue'
import PageNotFoundView from './views/PageNotFoundView.vue'


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
      component: ProductsPageview,
    },
    {
      path: '/products/:category',
      component: ProductsPageview,
    },
    {
      path: '/account',
      component: AccountView
    },
    {
      path: '/search/:query',
      component: SearchView
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFoundView
    }
  ]
});

export default router;
