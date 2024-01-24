import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Projects = () => import('@/views/Projects.vue')
const Contact = () => import('@/views/Contact.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
