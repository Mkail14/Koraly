<script setup>
import '@/assets/css/pages/RecompensesPage.css'
import { ref, computed } from 'vue'
import { useReveal } from '../composables/useReveal.js'
import { rewards } from '../data/rewards.js'

useReveal()

const categoryNames = rewards.map(r => r.category)
const activeCategory = ref('Toutes')

const filteredRewards = computed(() =>
  activeCategory.value === 'Toutes'
    ? rewards
    : rewards.filter(r => r.category === activeCategory.value)
)

const ecoInfo = [
  { id: 1, icon: 'bi bi-plus-circle',      title: 'Gagner des points',  body: 'Entre 15 et 30 Lily-points par nettoyage validé selon la mission. Les niveaux supérieurs multiplient les gains.' },
  { id: 2, icon: 'bi bi-arrow-repeat',     title: 'Échanger',           body: 'Directement chez un partenaire agréé Koraly. Simple et immédiat, sans intermédiaire.' },
  { id: 3, icon: 'bi bi-infinity',         title: 'Sans expiration',    body: 'Tes Lily-points n\'expirent jamais. Ils s\'accumulent indéfiniment — prends le temps de les utiliser.' },
  { id: 4, icon: 'bi bi-shield-check',     title: 'Sécurisé',          body: 'Chaque échange est tracé et sécurisé pour garantir l\'équité entre tous les bénévoles.' },
]

const exampleTable = [
  { action: '4 nettoyages de plage',    points: 80 },
  { action: '2 nettoyages de mangrove', points: 60 },
  { action: 'Bonus parrainage',          points: 20 },
]
const exampleTotal = exampleTable.reduce((s, r) => s + r.points, 0)
</script>

<template>

  <!-- En-tête -->
  <section class="page-header text-center">
    <div class="page-header-grid"></div>
    <div class="orb orb-beige rec-orb"></div>
    <div class="container position-relative z-1">
      <span class="section-label anim-fade-down">Lily-points</span>
      <h1 class="section-title page-title anim-fade-up anim-delay-1">Récompenses</h1>
      <p class="section-subtitle anim-fade-up anim-delay-2 rec-subtitle">
        Échange tes Lily-points contre des avantages réels partout à Mayotte.
      </p>
      <div class="hero-badge d-inline-flex align-items-center gap-2 mt-4 anim-fade-up anim-delay-3">
        <i class="bi bi-coin text-beige"></i>
        Lily-points = ta monnaie écologique locale
      </div>
    </div>
  </section>

  <!-- Filtre -->
  <div class="filter-bar">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center gap-2">
        <button
          v-for="cat in ['Toutes', ...categoryNames]"
          :key="cat"
          class="btn btn-sm rounded-pill filter-btn"
          :class="activeCategory === cat ? 'btn-beige' : 'btn-glass'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>
  </div>

  <!-- Grille des récompenses -->
  <section class="py-5 section-bg">
    <div class="container">
      <div v-for="category in filteredRewards" :key="category.id" class="mb-5">
        <!-- Titre catégorie -->
        <div class="d-flex align-items-center gap-3 mb-4 reveal">
          <div class="cat-icon">
            <i :class="category.icon" class="text-beige"></i>
          </div>
          <h3 class="fw-bold mb-0">{{ category.category }}</h3>
        </div>

        <!-- Cartes -->
        <div class="row g-3">
          <div
            v-for="item in category.items"
            :key="item.name"
            class="col-sm-6 col-lg-4 reveal"
          >
            <div class="glass-card h-100 p-4 d-flex flex-column">
              <h5 class="fw-bold mb-2">{{ item.name }}</h5>
              <p class="flex-grow-1 mb-3 reward-desc">{{ item.description }}</p>
              <div class="d-flex align-items-center justify-content-between pt-2 reward-footer">
                <span
                  class="fw-bold"
                  :style="item.points === 0 ? 'color:#52b788;' : 'color:#d4b896;'"
                >
                  <i class="bi bi-coin me-1"></i>
                  {{ item.points === 0 ? 'Offert' : item.points + ' pts' }}
                </span>
                <RouterLink to="/contact" class="btn btn-glass btn-sm rounded-pill reward-cta">
                  Obtenir <i class="bi bi-arrow-right ms-1"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Explication Lily-points -->
  <section class="py-5 section-bg-2">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 reveal">
          <span class="section-label">Fonctionnement</span>
          <h2 class="section-title mt-2 mb-4">Tout sur les Lily-points</h2>
          <div class="d-flex flex-column gap-4">
            <div
              v-for="info in ecoInfo"
              :key="info.id"
              class="d-flex align-items-start gap-3 reveal"
              :class="`anim-delay-${info.id}`"
            >
              <div class="eco-info-icon flex-shrink-0">
                <i :class="info.icon" class="text-beige"></i>
              </div>
              <div>
                <strong class="d-block mb-1">{{ info.title }}</strong>
                <p class="eco-info-desc">{{ info.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 reveal anim-delay-2">
          <div class="glass-card p-4 anim-glow">
            <div class="text-center mb-4">
              <i class="bi bi-coin fs-1 mb-2 d-block text-beige"></i>
              <h4 class="fw-bold mb-1">Exemple sur 1 mois actif</h4>
              <p class="example-intro">Ce que tu pourrais accumuler :</p>
            </div>
            <table class="table table-bordered mb-4 example-table">
              <thead>
                <tr class="table-header-row">
                  <th>Action</th>
                  <th class="text-end">Lily-points</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in exampleTable" :key="row.action">
                  <td>{{ row.action }}</td>
                  <td class="fw-bold text-end text-green">+{{ row.points }}</td>
                </tr>
                <tr class="table-total-row">
                  <td class="fw-bold">Total estimé</td>
                  <td class="fw-bold text-end text-beige">~{{ exampleTotal }}</td>
                </tr>
              </tbody>
            </table>
            <RouterLink to="/participer" class="btn btn-beige rounded-pill w-100 py-2">
              Commencer à gagner des points
            </RouterLink>
          </div>

          <!-- Valeur du Lily-point -->
          <div class="token-card token-card--green mt-4 p-4 reveal anim-delay-3">
            <div class="d-flex align-items-center gap-3">
              <div class="token-icon token-icon--green flex-shrink-0">
                <i class="bi bi-currency-euro text-green"></i>
              </div>
              <div>
                <strong class="token-value-text">1 Lily-point = 0,10 €</strong>
                <p class="token-note">
                  Valeur indicative utilisée pour calculer tes récompenses chez nos partenaires locaux.
                </p>
              </div>
            </div>
          </div>

          <!-- App à venir -->
          <div class="token-card mt-3 p-4 reveal anim-delay-3">
            <div class="d-flex align-items-start gap-3">
              <div class="token-icon flex-shrink-0">
                <i class="bi bi-rocket-takeoff text-beige"></i>
              </div>
              <div>
                <div class="d-flex align-items-center gap-2 mb-1">
                  <strong class="app-title">Application Koraly — à venir</strong>
                  <span class="badge badge-soon">BIENTÔT</span>
                </div>
                <p class="app-desc">
                  Les Lily-points auront une <strong class="app-highlight">valeur token</strong> échangeable via une application dédiée en cours de développement. Accumule tes points dès maintenant — ils seront convertibles le jour du lancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
