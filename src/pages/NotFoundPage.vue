<script setup>
import '@/assets/css/pages/NotFoundPage.css'
</script>

<template>
  <section
    class="d-flex align-items-center justify-content-center text-center position-relative overflow-hidden notfound-section"
  >
    <!-- Orbs -->
    <div class="orb orb-beige notfound-orb"></div>
    <!-- Grid -->
    <div class="page-header-grid"></div>

    <div class="container position-relative z-1">
      <div class="notfound-num anim-fade-down">404</div>
      <h2 class="fw-bold mb-3 anim-fade-up anim-delay-1">Page introuvable</h2>
      <p class="section-subtitle mb-5 anim-fade-up anim-delay-2 notfound-subtitle">
        Cette page s'est perdue quelque part dans le lagon de Mayotte…<br />
        Elle n'existe pas ou a été déplacée.
      </p>
      <RouterLink
        to="/"
        class="btn btn-beige rounded-pill px-5 py-3 fs-6 anim-fade-up anim-delay-3"
      >
        <i class="bi bi-house-fill me-2"></i>Retour à l'accueil
      </RouterLink>
    </div>
  </section>
</template>
