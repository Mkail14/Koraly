<script setup>
import '@/assets/css/pages/ParticiperPage.css'
import { useReveal } from '../composables/useReveal.js'
import { levels } from '../data/levels.js'

useReveal()

const missions = [
  { id: 1, emoji: '🏖️', name: 'Plages',         description: 'Nettoyage des plages et du littoral — zones les plus exposées aux déchets marins.', points: 20 },
  { id: 2, emoji: '🌿', name: 'Mangroves',      description: 'Collecte dans les mangroves, écosystèmes essentiels à la biodiversité mahoraise.', points: 30 },
  { id: 3, emoji: '🌲', name: 'Forêts',         description: 'Nettoyage des sentiers et espaces forestiers en respectant la faune et la flore.', points: 25 },
  { id: 4, emoji: '🏙️', name: 'Espaces publics', description: 'Rues, marchés, parcs et espaces communs des villages et villes de l\'île.', points: 15 },
]

const criteria = [
  { id: 1, icon: 'bi bi-camera',       title: 'Photo « avant »',     description: 'Une photo du site avant le nettoyage, horodatée et géolocalisée.' },
  { id: 2, icon: 'bi bi-camera-fill',  title: 'Photo « après »',     description: 'Même angle après nettoyage, montrant clairement les sacs remplis.' },
  { id: 3, icon: 'bi bi-bag-fill',     title: 'Nombre de sacs',      description: 'Minimum 1 sac de 50 L pour que la session soit comptabilisée.' },
  { id: 4, icon: 'bi bi-clock',        title: 'Durée minimale',      description: 'La session doit durer au moins 30 minutes.' },
  { id: 5, icon: 'bi bi-person-check', title: 'Validation bénévole', description: 'Un référent Koraly vérifie les photos et valide sous 48 h.' },
  { id: 6, icon: 'bi bi-geo-alt',      title: 'Zone autorisée',      description: 'Site répertorié par Koraly ou préalablement approuvé.' },
]

const levelColors = {
  1: { grad: 'linear-gradient(135deg, #3d2000, #7c4600)', text: '#cd7f32', bd: 'rgba(205,127,50,0.25)' },
  2: { grad: 'linear-gradient(135deg, #1e2024, #3a3d42)', text: '#adb5bd', bd: 'rgba(173,181,189,0.2)' },
  3: { grad: 'linear-gradient(135deg, #2b2200, #6b5200)', text: '#d4b896', bd: 'rgba(212,184,150,0.25)' },
  4: { grad: 'linear-gradient(135deg, #001a2e, #003a6b)', text: '#90e0ef', bd: 'rgba(144,224,239,0.2)' },
}
</script>

<template>

  <!-- En-tête -->
  <section class="page-header text-center">
    <div class="page-header-grid"></div>
    <div class="orb orb-green partic-orb"></div>
    <div class="container position-relative z-1">
      <span class="section-label anim-fade-down">Guide du bénévole</span>
      <h1 class="section-title page-title anim-fade-up anim-delay-1">Participer</h1>
      <p class="section-subtitle anim-fade-up anim-delay-2 partic-subtitle">
        Tout ce qu'il faut savoir pour rejoindre les nettoyages et gagner des Lily-points.
      </p>
    </div>
  </section>

  <!-- Types de missions -->
  <section class="py-5 section-bg-2">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Les missions</span>
        <h2 class="section-title">Types de nettoyage</h2>
        <p class="section-subtitle">Choisis la mission qui te convient, seul(e) ou en groupe.</p>
      </div>
      <div class="row g-4">
        <div v-for="m in missions" :key="m.id" class="col-md-6 col-lg-3 reveal" :class="`anim-delay-${m.id}`">
          <div class="glass-card text-center p-4 h-100 d-flex flex-column">
            <div class="mission-emoji mb-3">{{ m.emoji }}</div>
            <h5 class="fw-bold mb-2">{{ m.name }}</h5>
            <p class="mb-3 flex-grow-1 mission-desc">{{ m.description }}</p>
            <div class="mission-pts">
              <i class="bi bi-coin me-1 text-beige"></i>
              {{ m.points }} Lily-points / session
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Critères -->
  <section class="py-5 section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Règles</span>
        <h2 class="section-title">Critères de validation</h2>
        <p class="section-subtitle">Respecte ces critères pour que tes Lily-points soient accordés.</p>
      </div>
      <div class="row g-3 justify-content-center">
        <div v-for="crit in criteria" :key="crit.id" class="col-md-6 reveal" :class="`anim-delay-${(crit.id % 3) + 1}`">
          <div class="glass-card d-flex align-items-start gap-3 p-4">
            <div class="crit-icon flex-shrink-0">
              <i :class="crit.icon" class="text-beige"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">{{ crit.title }}</h6>
              <p class="crit-desc">{{ crit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Niveaux -->
  <section class="py-5 section-bg-2">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Progression</span>
        <h2 class="section-title">Les niveaux Koraly</h2>
        <p class="section-subtitle">Monte en niveau pour débloquer toujours plus d'avantages.</p>
      </div>
      <div class="row g-4">
        <div v-for="level in levels" :key="level.id" class="col-md-6 col-lg-3 reveal" :class="`anim-delay-${level.id}`">
          <div class="glass-card h-100 overflow-hidden">
            <!-- En-tête du niveau -->
            <div
              class="level-head text-center py-4 px-3"
              :style="`background: ${levelColors[level.id].grad}; border-bottom: 1px solid ${levelColors[level.id].bd};`"
            >
              <i :class="[level.icon, 'fs-1 mb-2 d-block']" :style="`color:${levelColors[level.id].text};`"></i>
              <div class="fw-bold fs-5 level-header-text">Niveau {{ level.id }}</div>
              <div class="level-name">{{ level.name }}</div>
            </div>
            <!-- Corps -->
            <div class="p-4">
              <div class="text-center mb-3">
                <span
                  class="level-badge"
                  :style="`color:${levelColors[level.id].text}; border-color:${levelColors[level.id].bd};`"
                >
                  À partir de {{ level.minCleanups }} nettoyage{{ level.minCleanups > 1 ? 's' : '' }}
                </span>
              </div>
              <ul class="list-unstyled mb-0">
                <li v-for="perk in level.perks" :key="perk" class="mb-2 d-flex gap-2 level-perk">
                  <i class="bi bi-check-circle-fill flex-shrink-0 mt-1" :style="`color:${levelColors[level.id].text};`"></i>
                  <span>{{ perk }}</span>
                </li>
              </ul>
            </div>
            <div class="text-center pb-3">
              <span class="fw-bold" :style="`color:${levelColors[level.id].text}; font-size:0.88rem;`">
                <i class="bi bi-coin me-1"></i>+{{ level.ecopoints }} Lily-points / nettoyage
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-5 text-center position-relative overflow-hidden section-bg">
    <div class="orb orb-beige partic-orb-2"></div>
    <div class="container position-relative reveal z-1">
      <h2 class="section-title mb-3">Prêt à rejoindre l'aventure ?</h2>
      <p class="section-subtitle mb-4">
        Inscris-toi et rejoins les prochaines sessions près de chez toi.
      </p>
      <RouterLink to="/contact" class="btn btn-beige rounded-pill px-5 py-3 fs-6">
        <i class="bi bi-person-plus me-2"></i>Devenir bénévole
      </RouterLink>
    </div>
  </section>
</template>
