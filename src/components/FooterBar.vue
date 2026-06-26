<script setup>
import '@/assets/css/components/FooterBar.css'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/participer', label: 'Participer' },
  { to: '/application', label: 'Application' },
  { to: '/partenaires', label: 'Partenaires' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { name: 'Facebook',  icon: 'bi bi-facebook' },
  { name: 'Instagram', icon: 'bi bi-instagram' },
  { name: 'Twitter/X', icon: 'bi bi-twitter-x' },
  { name: 'WhatsApp',  icon: 'bi bi-whatsapp' },
]
</script>

<template>
  <footer class="koraly-footer">
    <!-- Séparateur lumineux -->
    <div class="footer-divider"></div>

    <div class="container py-5">
      <div class="row g-4">

        <!-- Marque -->
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="footer-logo-icon">
              <i class="bi bi-leaf-fill"></i>
            </div>
            <span class="footer-logo-text">Koraly</span>
          </div>
          <p class="footer-text mb-3">
            Association loi 1901 oeuvrant pour la proprete et la preservation
            de l'environnement a Mayotte grace aux Lily-points.
          </p>
          <p class="footer-text-muted small">
            <i class="bi bi-geo-alt me-1"></i>Mamoudzou, Mayotte (976)
          </p>
        </div>

        <!-- Navigation -->
        <div class="col-md-2 offset-md-1">
          <h6 class="footer-heading">Navigation</h6>
          <ul class="list-unstyled">
            <li v-for="link in navLinks" :key="link.to">
              <RouterLink class="footer-text-muted footer-link" :to="link.to">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="col-md-2">
          <h6 class="footer-heading">Legal</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="footer-text-muted footer-link">Mentions legales</a></li>
            <li><a href="#" class="footer-text-muted footer-link">Confidentialite</a></li>
            <li><a href="#" class="footer-text-muted footer-link">CGU</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-md-3">
          <h6 class="footer-heading">Suivez-nous</h6>
          <div class="d-flex gap-2 mb-3">
            <a
              v-for="social in socials"
              :key="social.name"
              href="#"
              class="social-btn"
              :aria-label="social.name"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
          <p class="footer-text-muted small mb-1">
            <i class="bi bi-envelope me-1"></i>contact@koraly-mayotte.org
          </p>
          <p class="footer-text-muted small">
            <i class="bi bi-telephone me-1"></i>+262 269 XX XX XX
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-text-muted small">
          &copy; 2024 Koraly &mdash; Association loi 1901. Tous droits reserves.
        </span>
        <span class="footer-text-muted small">
          Fait avec <i class="bi bi-heart-fill text-heart"></i> a Mayotte
        </span>
      </div>
    </div>
  </footer>
</template>
