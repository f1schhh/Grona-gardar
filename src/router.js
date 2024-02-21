import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutProductsview from './views/AboutProductsview.vue'
import SpecificProductView from "./views/SpecificProductView.vue"
import ProductsPageview from './views/ProductsPageview.vue'
import AccountView from './views/AccountView.vue'
import OrderHistoryView from './views/OrderHistoryView.vue'
import EditAccountView from './views/EditAccountView.vue'
import FavoritesView from './views/FavoritesView.vue'
import LogOutView from './views/LogOutView.vue'

import SearchView from './views/SearchView.vue'
import PageNotFoundView from './views/PageNotFoundView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      //Background color used by footer to match the bg of current page
      meta: { footerBackgroundColor: '#fff8ee' }
    },
    {
      path: '/product/:productId',
      component: SpecificProductView,
      name: "SpecificProduct",
      props: true,
      //Background color used by footer to match the bg of current page
      meta: { footerBackgroundColor: '#efe9de' }
    },
    {
      path: '/products',
      component: ProductsPageview,
      //Background color used by footer to match the bg of current page
      meta: { footerBackgroundColor: '#efe9de' }
    },
    {
      path: '/products/:category',
      component: ProductsPageview,
      //Background color used by footer to match the bg of current page
      meta: { footerBackgroundColor: '#efe9de' }
    },
    {
      path: '/account',
      component: AccountView,
      //Background color used by footer to match the bg of current page
      meta: { footerBackgroundColor: '#efe9de' },

      children: [
        { path: 'orderhistory', component: OrderHistoryView },
        {
          path: 'editaccount',
          component: EditAccountView
        },
        {
          path: 'favorites',
          component: FavoritesView
        },
        {
          path: 'logout',
          component: LogOutView
        },
      ],
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
