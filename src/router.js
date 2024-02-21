import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutProductsview from './views/AboutProductsview.vue'
import SpecificProductView from "./views/SpecificProductView.vue"
import ProductsPageview from './views/ProductsPageview.vue'
import AccountView from './views/AccountView.vue'
import OrderHistoryView from './views/OrderHistoryView.vue'
import FavoritesView from './views/FavoritesView.vue'

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
      path: '/product/:productId',
      component: SpecificProductView,
      name: "SpecificProduct",
      props: true,
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

      // children: [
      //   { path: '/orderhistory', component: OrderHistoryView,}
      // ]
    },
    {
      path: '/orderhistory',
      component: OrderHistoryView
    },
    {
      path: '/favorites',
      component: FavoritesView
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
