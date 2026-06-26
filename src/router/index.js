import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ParticiperPage from '../pages/ParticiperPage.vue'
import AppPage from '../pages/AppPage.vue'
import PartenairesPage from '../pages/PartenairesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/',             component: HomePage,       meta: { title: 'Accueil' } },
  { path: '/participer',   component: ParticiperPage, meta: { title: 'Participer' } },
  { path: '/application',  component: AppPage,        meta: { title: 'Application' } },
  { path: '/partenaires',  component: PartenairesPage, meta: { title: 'Partenaires' } },
  { path: '/contact',      component: ContactPage,     meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, meta: { title: 'Page introuvable' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// Met à jour le <title> de l'onglet à chaque navigation
router.afterEach(to => {
  document.title = `Koraly — ${to.meta.title ?? 'Association écologique mahoraise'}`
})

export default router
