import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import AboutProductsview from './views/AboutProductsview.vue'
import ProductsPageview from './views/ProductsPageview.vue'
import AccountView from './views/AccountView.vue'
import OrderHistoryView from './views/OrderHistoryView.vue'
import EditAccountView from './views/EditAccountView.vue'
import FavoritesView from './views/FavoritesView.vue'
import LogOutView from './views/LogOutView.vue'

import SearchView from './views/SearchView.vue'
import PageNotFoundView from './views/PageNotFoundView.vue'

//Admin views
import AdminView from './views/admin/AdminView.vue'
import AdminOrders from './views/admin/AdminOrdersView.vue'


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
      path: '/product/:id',
      component: AboutProductsview,
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
      redirect: '/account/orderhistory',
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
      path: '/admin',
      component: AdminView,
      children: [
        { path: 'orders', component: AdminOrders }
      ]
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
