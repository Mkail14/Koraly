<script setup>
import '@/assets/css/pages/HomePage.css'
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

/* Couleurs adaptées aux deux thèmes (CSS variables) */
const steps = [
  {
    id: 1, icon: 'bi bi-camera',
    title: 'Participation',
    description: 'Rends-toi sur un site, prends une photo avant/après et ramasse les déchets.',
    accent: 'var(--beige-300)',
  },
  {
    id: 2, icon: 'bi bi-patch-check',
    title: 'Validation',
    description: 'Envoie tes photos et infos. Un bénévole référent valide ta session sous 48 h.',
    accent: 'var(--green)',
  },
  {
    id: 3, icon: 'bi bi-gift',
    title: 'Récompenses',
    description: 'Tu reçois tes Lily-points échangeables contre des avantages chez nos partenaires.',
    accent: 'var(--blue)',
  },
]

const stats = [
  { id: 1, icon: 'bi bi-people-fill',  value: '1 240', label: 'Bénévoles actifs',  accent: 'var(--beige-300)' },
  { id: 2, icon: 'bi bi-trash-fill',   value: '18 t',  label: 'Déchets ramassés',  accent: 'var(--green)' },
  { id: 3, icon: 'bi bi-geo-fill',     value: '87',    label: 'Sites nettoyés',    accent: 'var(--blue)' },
  { id: 4, icon: 'bi bi-handshake',    value: '32',    label: 'Partenaires',        accent: 'var(--beige-300)' },
]

const ctaPoints = [
  'Gratuit et accessible à tous les habitants de Mayotte',
  "Lily-points valables dans toute l'île",
  "Impact direct et mesurable sur l'environnement",
  'Rejoins une communauté engagée et bienveillante',
]

const actualites = [
  {
    id: 1, type: 'nettoyage', typeLabel: 'Nettoyage',
    date: '15 Jan 2025',
    short: 'Plage de Sakouli — 12 bénévoles mobilisés',
    titre: 'Grand nettoyage de la plage de Sakouli',
    details: '12 bénévoles ont collecté plus de 8 sacs de 50 L. Un formidable élan de solidarité pour préserver notre littoral.',
  },
  {
    id: 2, type: 'partenaire', typeLabel: 'Partenariat',
    date: '10 Jan 2025',
    short: 'Carrefour Mayotte devient partenaire officiel',
    titre: 'Carrefour Mayotte rejoint Koraly',
    details: "Les clients pourront échanger leurs Lily-points directement en caisse. Une avancée majeure pour l'économie locale.",
  },
  {
    id: 3, type: 'evenement', typeLabel: 'Événement',
    date: '5 Jan 2025',
    short: 'Journée des Océans — 50 bénévoles, 5 sites',
    titre: 'Koraly à la Journée Mondiale des Océans',
    details: '50 bénévoles sur 5 sites simultanément : plus de 20 tonnes de déchets collectés en une seule journée.',
  },
  {
    id: 4, type: 'nettoyage', typeLabel: 'Nettoyage',
    date: '28 Déc 2024',
    short: "Mangrove de Bandraboua — opération fin d'année",
    titre: 'Opération spéciale mangrove à Bandraboua',
    details: "15 bénévoles ont bravé la boue pour préserver la mangrove de Bandraboua, un écosystème abritant des centaines d'espèces.",
  },
  {
    id: 5, type: 'annonce', typeLabel: 'Annonce',
    date: '20 Déc 2024',
    short: 'Application Koraly — lancement prévu T2 2025',
    titre: "L'application Koraly arrive bientôt",
    details: 'Géolocalisation des sessions, validation des nettoyages et gestion des Lily-points directement depuis votre smartphone.',
  },
]

const hoveredActu  = ref(null)
const appMsgVisible = ref(false)

function handleAppClick() {
  appMsgVisible.value = true
  setTimeout(() => { appMsgVisible.value = false }, 3000)
}
</script>

<template>

  <!-- ══ HERO ══ -->
  <section class="hero position-relative overflow-hidden">
    <div class="orb orb-beige hero-orb-1 anim-float"></div>
    <div class="orb orb-green hero-orb-2 anim-float-r"></div>
    <div class="hero-grid"></div>

    <div class="container position-relative hero-content text-center">

      <!-- Badge -->
      <div class="hero-badge anim-fade-down mb-4">
        <i class="bi bi-leaf-fill me-2"></i>
        Association écologique mahoraise
      </div>

      <!-- Titre -->
      <h1 class="hero-title anim-fade-up anim-delay-1 mb-3">
        Ensemble, gardons<br />
        <span class="hero-accent">Mayotte belle.</span>
      </h1>

      <!-- Sous-titre -->
      <p class="hero-desc anim-fade-up anim-delay-2 mb-4">
        Participe au nettoyage des plages, forêts et mangroves de Mayotte<br class="d-none d-md-block" />
        et gagne des récompenses grâce aux Lily-points.
      </p>

      <!-- Boutons -->
      <div class="d-flex flex-wrap justify-content-center gap-3 anim-fade-up anim-delay-3">
        <div class="hero-btn-wrap">
          <button class="btn btn-beige rounded-pill hero-btn" @click="handleAppClick">
            <i class="bi bi-phone-fill me-2"></i>Télécharger l'app
          </button>
          <Transition name="hero-msg">
            <span v-if="appMsgVisible" class="hero-app-msg">
              <i class="bi bi-clock me-1"></i>Application disponible au T2 2025
            </span>
          </Transition>
        </div>
        <a href="#actualites" class="btn btn-glass rounded-pill hero-btn">
          <i class="bi bi-newspaper me-2"></i>Actualités
        </a>
      </div>

      <!-- Indicateur de scroll -->
      <div class="scroll-hint anim-float mt-5">
        <i class="bi bi-chevron-double-down"></i>
      </div>
    </div>
  </section>

  <!-- ══ ACTUALITÉS ══ -->
  <section id="actualites" class="actu-section">
    <div class="container">

      <!-- En-tête -->
      <div class="actu-eyebrow">
        <span class="actu-dot-live"></span>
        <span class="actu-eyebrow-label">Actualités</span>
      </div>

      <!-- Grille ticker | preview -->
      <div class="actu-layout" @mouseleave="hoveredActu = null">

        <!-- Ticker -->
        <div class="actu-left">
          <div class="actu-scroll">
            <div class="actu-track" :class="{ paused: hoveredActu }">
              <div
                v-for="(item, i) in [...actualites, ...actualites]"
                :key="i"
                class="actu-item"
                :class="[`actu-item--${item.type}`, { active: hoveredActu?.id === item.id }]"
                @mouseenter="hoveredActu = item"
              >
                <div class="actu-item-meta">
                  <span class="actu-item-date">{{ item.date }}</span>
                  <span class="actu-item-sep">·</span>
                  <span class="actu-item-cat">{{ item.typeLabel }}</span>
                </div>
                <p class="actu-item-title">{{ item.short }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Détail -->
        <div class="actu-right">
          <Transition name="actu-reveal" mode="out-in">
            <div
              v-if="hoveredActu"
              :key="hoveredActu.id"
              class="actu-preview-card"
              :class="`actu-preview-card--${hoveredActu.type}`"
            >
              <div class="actu-preview-cat" :class="`actu-preview-cat--${hoveredActu.type}`">
                <span class="actu-preview-cat-dot"></span>
                {{ hoveredActu.typeLabel }}
              </div>
              <h4 class="actu-preview-title">{{ hoveredActu.titre }}</h4>
              <p class="actu-preview-body">{{ hoveredActu.details }}</p>
              <div class="actu-preview-date">
                <i class="bi bi-calendar3 me-1"></i>{{ hoveredActu.date }}
              </div>
            </div>
            <div v-else key="hint" class="actu-hint">
              <div class="actu-hint-icon"><i class="bi bi-hand-index"></i></div>
              <p>Survolez une actualité<br>pour voir les détails</p>
            </div>
          </Transition>
        </div>

      </div>
    </div>
  </section>

  <!-- ══ COMMENT ÇA MARCHE ══ -->
  <section class="py-5 py-lg-6 section-bg-2">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Simple &amp; rapide</span>
        <h2 class="section-title">Comment ça marche ?</h2>
        <p class="section-subtitle">Trois étapes pour contribuer et être récompensé.</p>
      </div>
      <div class="row g-4">
        <div
          v-for="step in steps"
          :key="step.id"
          class="col-md-4 reveal"
          :class="`anim-delay-${step.id}`"
        >
          <div class="glass-card text-center p-4 h-100 d-flex flex-column">
            <div class="step-icon mx-auto mb-4" :style="`border-color:${step.accent}; color:${step.accent};`">
              <i :class="step.icon" class="fs-3"></i>
            </div>
            <div class="step-num mb-1" :style="`color:${step.accent};`">Étape {{ step.id }}</div>
            <h5 class="fw-bold mb-2">{{ step.title }}</h5>
            <p class="mb-0 step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ STATS ══ -->
  <section class="py-5 py-lg-6 position-relative overflow-hidden section-bg">
    <div class="orb orb-beige orb-center"></div>
    <div class="container position-relative z-1">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Impact réel</span>
        <h2 class="section-title">L'impact de Koraly</h2>
        <p class="section-subtitle">Des chiffres qui motivent, une communauté qui grandit.</p>
      </div>
      <div class="row g-4">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="col-6 col-md-3 reveal"
          :class="`anim-delay-${stat.id}`"
        >
          <div class="glass-card text-center p-4">
            <i :class="[stat.icon, 'fs-2 mb-3 d-block']" :style="`color:${stat.accent};`"></i>
            <div class="stat-val" :style="`color:${stat.accent};`">{{ stat.value }}</div>
            <div class="stat-lbl">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ CTA ══ -->
  <section class="py-5 py-lg-6 section-bg-3">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7 reveal">
          <span class="section-label">Rejoins le mouvement</span>
          <h2 class="section-title mt-2 mb-3">Prêt à faire la différence à Mayotte ?</h2>
          <p class="section-subtitle mb-4">
            Inscris-toi gratuitement, rejoins les équipes de bénévoles et commence
            à accumuler des Lily-points dès ta première action.
          </p>
          <ul class="list-unstyled mb-4">
            <li v-for="point in ctaPoints" :key="point" class="mb-2 d-flex align-items-center gap-2">
              <i class="bi bi-check-circle-fill flex-shrink-0" style="color: var(--green)"></i>
              <span class="cta-list-text">{{ point }}</span>
            </li>
          </ul>
          <RouterLink to="/contact" class="btn btn-beige rounded-pill px-4 py-2">
            <i class="bi bi-person-plus me-2"></i>M'inscrire maintenant
          </RouterLink>
        </div>

        <div class="col-lg-5 reveal anim-delay-2">
          <div class="glass-card text-center p-5 anim-glow">
            <div class="eco-icon mx-auto mb-3">
              <i class="bi bi-coin fs-1" style="color: var(--beige-300)"></i>
            </div>
            <h4 class="fw-bold mb-2">Système Lily-points</h4>
            <p class="mb-4 eco-desc">
              Chaque nettoyage validé te rapporte des Lily-points,
              échangeables contre de vraies récompenses locales.
            </p>
            <RouterLink to="/recompenses" class="btn btn-glass rounded-pill px-4">
              Découvrir les récompenses <i class="bi bi-arrow-right ms-1"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
