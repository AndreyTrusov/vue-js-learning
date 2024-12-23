import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/OurView.vue')
    },
    {
      path: '/a-component/:username',
      name: 'a-component',
      component: () => import('../views/OurView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/OurView.vue'),
      children: [
        {
          path: '/:username',
          name: 'component-uusername',
          component: () => import('../views/AboutView.vue'),
          props: true,
        },
      ],
    }
  ]
})

export default router
