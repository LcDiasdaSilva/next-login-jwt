import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/Home.vue').then(r => r.default || r),
    },
    {
      name: 'login',
      path: '/login',
      meta: { isPublic: true },
      component: () => import('../pages/Login.vue').then(r => r.default || r),
    },
  ],
}