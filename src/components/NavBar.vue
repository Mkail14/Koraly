<script setup>
import '@/assets/css/components/NavBar.css'
import { ref, onMounted } from 'vue'

const navMenu = ref(null)
const isDark   = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('koraly-theme', theme)
}

function closeMenu() {
  if (window.innerWidth >= 992 || !navMenu.value) return
  const instance = window.bootstrap?.Collapse?.getInstance(navMenu.value)
  if (instance) instance.hide()
}
</script>

<template>
  <nav class="navbar navbar-expand-lg koraly-nav sticky-top">
    <div class="container">

      <!-- Logo -->
      <RouterLink
        class="navbar-brand d-flex align-items-center gap-2 text-decoration-none"
        to="/"
        @click="closeMenu"
      >
        <div class="nav-logo-icon">
          <i class="bi bi-leaf-fill"></i>
        </div>
        <span class="nav-logo-text">Koraly</span>
      </RouterLink>

      <!-- Burger mobile -->
      <button
        class="navbar-toggler nav-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Ouvrir le menu"
      >
        <i class="bi bi-list fs-4 nav-toggler-icon"></i>
      </button>

      <!-- Menu -->
      <div ref="navMenu" class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1 py-3 py-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-lien" active-class="nav-lien-actif" exact-active-class="nav-lien-actif" to="/" @click="closeMenu">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-lien" active-class="nav-lien-actif" to="/participer" @click="closeMenu">Participer</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-lien" active-class="nav-lien-actif" to="/recompenses" @click="closeMenu">Récompenses</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-lien" active-class="nav-lien-actif" to="/partenaires" @click="closeMenu">Partenaires</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-lien" active-class="nav-lien-actif" to="/contact" @click="closeMenu">Contact</RouterLink>
          </li>

          <!-- Bouton toggle thème -->
          <li class="nav-item ms-lg-1">
            <button class="btn-theme" @click="toggleTheme" :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'">
              <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
              <span>{{ isDark ? 'Clair' : 'Sombre' }}</span>
            </button>
          </li>

          <!-- CTA -->
          <li class="nav-item ms-lg-1 mt-2 mt-lg-0">
            <RouterLink
              class="btn btn-beige rounded-pill px-4 py-2 nav-cta-link"
              to="/participer"
              @click="closeMenu"
            >
              <i class="bi bi-hand-thumbs-up"></i>Participer
            </RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>
