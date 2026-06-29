<script setup>
import '@/assets/css/pages/PartenairesPage.css'
import { useReveal } from '../composables/useReveal.js'
import { partnerCategories } from '../data/partners.js'

useReveal()

const benefits = [
  { id: 1, icon: 'bi bi-award',      title: 'Image positive',    description: 'Associez votre marque à la protection de l\'environnement mahorais et à la mobilisation citoyenne.' },
  { id: 2, icon: 'bi bi-people',     title: 'Visibilité locale',  description: 'Logo sur notre site, mentions réseaux sociaux, présence lors de nos événements communautaires.' },
  { id: 3, icon: 'bi bi-recycle',    title: 'RSE & Impact',       description: 'Répondez à vos obligations RSE avec un impact mesurable, local et valorisable.' },
  { id: 4, icon: 'bi bi-graph-up',   title: 'Nouveaux clients',   description: 'Attirez les bénévoles Koraly qui soutiennent activement les commerces engagés.' },
  { id: 5, icon: 'bi bi-heart',      title: 'Réseau citoyen',     description: 'Intégrez un réseau d\'acteurs locaux partageant vos valeurs écologiques et solidaires.' },
  { id: 6, icon: 'bi bi-cash-coin',  title: 'Offres sur mesure',  description: 'Formules flexibles adaptées à toutes les tailles : commerce, association, institution.' },
]

const offers = [
  {
    id: 1,
    emoji: '🌱',
    name: 'Découverte',
    description: 'Idéal pour les petits commerces et associations locales.',
    grad: 'linear-gradient(135deg, #0e1f18, #1a3a2a)',
    bd: 'rgba(82,183,136,0.18)',
    accent: '#52b788',
    perks: ['Logo et lien sur le site', 'Mention réseaux sociaux', '1 bon d\'achat / mois offert aux bénévoles', 'Badge partenaire officiel'],
  },
  {
    id: 2,
    emoji: '🌿',
    name: 'Engagé',
    description: 'Pour les entreprises souhaitant s\'impliquer davantage.',
    grad: 'linear-gradient(135deg, #001525, #002d4f)',
    bd: 'rgba(144,224,239,0.18)',
    accent: '#90e0ef',
    perks: ['Tout « Découverte » inclus', 'Présence active aux événements', 'Communication dédiée (post + story)', 'Rapport d\'impact trimestriel', 'Échanges Lily-points activés'],
  },
  {
    id: 3,
    emoji: '🌳',
    name: 'Majeur',
    description: 'Pour les institutions et grandes entreprises.',
    grad: 'linear-gradient(135deg, #1a0f2e, #2e1a4f)',
    bd: 'rgba(212,184,150,0.2)',
    accent: '#d4b896',
    perks: ['Tout « Engagé » inclus', 'Co-branding sur les équipements', 'Accès données d\'impact exclusif', 'Parrain officiel d\'un site emblématique', 'Conférence de presse commune'],
  },
]
</script>

<template>



  <!-- Pourquoi devenir partenaire -->
  <section class="m-5 py-5 section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Avantages</span>
        <h2 class="section-title">Pourquoi devenir partenaire ?</h2>
        <p class="section-subtitle">Associez votre nom à une cause locale, visible et impactante.</p>
      </div>
      <div class="row g-4">
        <div v-for="b in benefits" :key="b.id" class="col-md-6 col-lg-4 reveal" :class="`anim-delay-${b.id % 3 + 1}`">
          <div class="glass-card h-100 p-4">
            <div class="benefit-icon mb-3">
              <i :class="b.icon" class="text-beige"></i>
            </div>
            <h5 class="fw-bold mb-2">{{ b.title }}</h5>
            <p class="card-desc">{{ b.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partenaires recherchés -->
  <section class="py-5 section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Catégories</span>
        <h2 class="section-title">Partenaires recherchés</h2>
        <p class="section-subtitle">Nous collaborons avec tous les acteurs du territoire mahorais.</p>
      </div>
      <div class="row g-3">
        <div v-for="cat in partnerCategories" :key="cat.id" class="col-md-6 reveal" :class="`anim-delay-${cat.id % 3 + 1}`">
          <div class="glass-card d-flex align-items-start gap-3 p-4">
            <div class="benefit-icon flex-shrink-0">
              <i :class="cat.icon" class="text-beige"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1">{{ cat.name }}</h6>
              <p class="card-desc">{{ cat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Logos défilants -->
  <section class="py-5 section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Ils nous soutiennent</span>
        <h2 class="section-title">Nos partenaires</h2>
        <p class="section-subtitle">Votre logo ici — rejoignez ceux qui agissent pour Mayotte.</p>
      </div>
    </div>
    <!-- Défilement infini pleine largeur -->
    <div class="logo-marquee-track" aria-hidden="true">
      <div class="logo-marquee-content">
        <div v-for="i in 12" :key="'a'+i" class="logo-slot">
          <i class="bi bi-image logo-placeholder-icon"></i>
          <small class="logo-placeholder-text">Votre logo</small>
        </div>
        <!-- Duplication pour boucle seamless -->
        <div v-for="i in 12" :key="'b'+i" class="logo-slot">
          <i class="bi bi-image logo-placeholder-icon"></i>
          <small class="logo-placeholder-text">Votre logo</small>
        </div>
      </div>
    </div>
  </section>

  <!-- Formules -->
  <section class="py-5 section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Formules</span>
        <h2 class="section-title">Choisir votre engagement</h2>
        <p class="section-subtitle">Des formules flexibles pour chaque structure.</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div v-for="offer in offers" :key="offer.id" class="col-md-4 reveal" :class="`anim-delay-${offer.id}`">
          <div
            class="offer-card h-100 d-flex flex-column"
            :style="`background:${offer.grad}; border: 1px solid ${offer.bd};`"
          >
            <div class="p-4 flex-grow-1">
              <div class="offer-emoji mb-2">{{ offer.emoji }}</div>
              <h5 class="fw-bold mb-1 offer-title">{{ offer.name }}</h5>
              <p class="mb-3 offer-desc">{{ offer.description }}</p>
              <ul class="list-unstyled">
                <li v-for="perk in offer.perks" :key="perk" class="mb-2 d-flex gap-2 offer-perk">
                  <i class="bi bi-check-circle flex-shrink-0 mt-1" :style="`color:${offer.accent};`"></i>
                  {{ perk }}
                </li>
              </ul>
            </div>
            <div class="p-4 pt-0">
              <RouterLink to="/contact" class="btn btn-glass rounded-pill w-100 py-2 offer-cta">
                Nous contacter
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
