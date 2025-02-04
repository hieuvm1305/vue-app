import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/count',
      name: 'count',
      component: () => import('../views/Count.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/signup/SignUp.vue'),
    },
  ],
})
// const publicPaths = ['/', '/login', '/register']
// router.beforeEach(async (to) => {
//   if (!publicPaths.includes(to.path)) {
//     return '/login'; // Redirect to login page
//   }
// })

export default router
