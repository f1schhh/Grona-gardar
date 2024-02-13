import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './views/StartPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: StartPage
    }
  ]
});

export default router;
