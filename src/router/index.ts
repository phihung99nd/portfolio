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
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to?.meta?.title ? 'Portfolio - '+to.meta.title : 'Portfolio'
  next()
})

export default router
