import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/practice-areas',
    name: 'PracticeAreas',
    component: () => import('@/pages/PracticeAreas.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('@/pages/Team.vue'),
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('@/pages/Testimonials.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
