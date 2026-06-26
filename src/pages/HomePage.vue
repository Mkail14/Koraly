<script setup>
import '@/assets/css/pages/HomePage.css'
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
  { id: 1, icon: 'bi bi-trash-fill',  value: '18 t',  label: 'Déchets ramassés',   accent: 'var(--green)' },
  { id: 2, icon: 'bi bi-map-fill',    value: '87',    label: 'Villes nettoyées',   accent: 'var(--blue)' },
  { id: 3, icon: 'bi bi-people-fill', value: '1 240', label: 'Bénévoles inscrits', accent: 'var(--beige-300)' },
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
    details: '12 bénévoles ont collecté plus de 8 sacs de 50 L lors de cette matinée solidaire. Un formidable élan de solidarité pour préserver notre littoral. La plage de Sakouli, joyau naturel de Mayotte, retrouve progressivement son éclat grâce à l\'engagement sans faille de notre communauté. Chaque sac ramassé représente une victoire concrète pour notre écosystème marin et les générations futures.',
    images: [
      'https://picsum.photos/seed/sakouli-main/800/440',
      'https://picsum.photos/seed/sakouli-2/400/220',
      'https://picsum.photos/seed/sakouli-3/400/220',
    ],
  },
  {
    id: 2, type: 'partenaire', typeLabel: 'Partenariat',
    date: '10 Jan 2025',
    short: 'Carrefour Mayotte devient partenaire officiel',
    titre: 'Carrefour Mayotte rejoint Koraly',
    details: 'Les clients pourront désormais échanger leurs Lily-points directement en caisse dans tous les points de vente Carrefour de l\'île. Une avancée majeure pour l\'économie locale et la valorisation de l\'engagement bénévole. Ce partenariat ouvre la voie à de nouvelles collaborations avec le tissu commercial mahorais.',
    images: [
      'https://picsum.photos/seed/carrefour-main/800/440',
      'https://picsum.photos/seed/carrefour-2/400/220',
      'https://picsum.photos/seed/carrefour-3/400/220',
    ],
  },
  {
    id: 3, type: 'evenement', typeLabel: 'Événement',
    date: '5 Jan 2025',
    short: 'Journée des Océans — 50 bénévoles, 5 sites',
    titre: 'Koraly à la Journée Mondiale des Océans',
    details: '50 bénévoles mobilisés sur 5 sites simultanément : plus de 20 tonnes de déchets collectés en une seule journée exceptionnelle. Cet événement a rassemblé des familles, des scolaires et des professionnels autour d\'un même idéal : protéger le lagon de Mayotte. Une journée mémorable qui restera dans les annales de l\'association.',
    images: [
      'https://picsum.photos/seed/oceans-main/800/440',
      'https://picsum.photos/seed/oceans-2/400/220',
      'https://picsum.photos/seed/oceans-3/400/220',
    ],
  },
  {
    id: 4, type: 'nettoyage', typeLabel: 'Nettoyage',
    date: '28 Déc 2024',
    short: "Mangrove de Bandraboua — opération fin d'année",
    titre: 'Opération spéciale mangrove à Bandraboua',
    details: '15 bénévoles courageux ont bravé la boue pour préserver la mangrove de Bandraboua, un écosystème fragile abritant des centaines d\'espèces végétales et animales. Cette zone humide est essentielle à la protection du littoral contre l\'érosion et constitue une nurserie naturelle pour de nombreux poissons. Grâce à leur action, plusieurs centaines de mètres de mangrove ont été débarrassés de déchets plastiques.',
    images: [
      'https://picsum.photos/seed/mangrove-main/800/440',
      'https://picsum.photos/seed/mangrove-2/400/220',
      'https://picsum.photos/seed/mangrove-3/400/220',
    ],
  },
  {
    id: 5, type: 'annonce', typeLabel: 'Annonce',
    date: '20 Déc 2024',
    short: 'Application Koraly — lancement prévu T2 2025',
    titre: "L'application Koraly arrive bientôt",
    details: 'La future application Koraly révolutionnera la façon de participer aux nettoyages. Géolocalisation des sessions en temps réel, validation simplifiée des nettoyages par photo, et gestion complète des Lily-points directement depuis votre smartphone. Disponible sur iOS et Android, elle permettra également de rejoindre des équipes, de consulter le classement des bénévoles et de découvrir les récompenses disponibles.',
    images: [
      'https://picsum.photos/seed/appkoraly-main/800/440',
      'https://picsum.photos/seed/appkoraly-2/400/220',
      'https://picsum.photos/seed/appkoraly-3/400/220',
    ],
  },
]

/* ── Équipe (12 membres, 4 groupes de 3) ── */
const teamMembers = [
  { id:  1, name: 'Amina Soulé',     role: 'Co-fondatrice & CEO',    handle: '@amina_s',    since: '2 ans',   avatar: 'https://picsum.photos/seed/tm1/200/200',  tag: 'Vision'  },
  { id:  2, name: 'Youssouf Bacar',  role: 'Co-fondateur & CTO',     handle: '@youssouf_b', since: '2 ans',   avatar: 'https://picsum.photos/seed/tm2/200/200',  tag: 'Tech'    },
  { id:  3, name: 'Fatoumia Madi',   role: 'Dir. Opérations',        handle: '@fatoumia_m', since: '18 mois', avatar: 'https://picsum.photos/seed/tm3/200/200',  tag: 'Ops'     },
  { id:  4, name: 'Saïd Abdou',      role: 'Responsable Token',      handle: '@said_a',     since: '1 an',    avatar: 'https://picsum.photos/seed/tm4/200/200',  tag: 'DeFi'    },
  { id:  5, name: 'Nassima Omar',    role: 'Designer UX/UI',         handle: '@nassima_o',  since: '8 mois',  avatar: 'https://picsum.photos/seed/tm5/200/200',  tag: 'Design'  },
  { id:  6, name: 'Ibrahim Ali',     role: 'Dev Blockchain',         handle: '@ibrahim_a',  since: '1 an',    avatar: 'https://picsum.photos/seed/tm6/200/200',  tag: 'Chain'   },
  { id:  7, name: 'Hawa Moussa',     role: 'Community Manager',      handle: '@hawa_m',     since: '6 mois',  avatar: 'https://picsum.photos/seed/tm7/200/200',  tag: 'Comm'    },
  { id:  8, name: 'Moïse Combo',     role: 'Dev Frontend',           handle: '@moise_c',    since: '10 mois', avatar: 'https://picsum.photos/seed/tm8/200/200',  tag: 'Dev'     },
  { id:  9, name: 'Aïcha Djafarou',  role: 'Partenariats',           handle: '@aicha_d',    since: '7 mois',  avatar: 'https://picsum.photos/seed/tm9/200/200',  tag: 'Biz'     },
  { id: 10, name: 'Karimat Boina',   role: 'Chargée de mission',     handle: '@karimat_b',  since: '5 mois',  avatar: 'https://picsum.photos/seed/tm10/200/200', tag: 'Mission' },
  { id: 11, name: 'Toiniati Soule',  role: 'Responsable Terrain',    handle: '@toiniati_s', since: '1 an',    avatar: 'https://picsum.photos/seed/tm11/200/200', tag: 'Field'   },
  { id: 12, name: 'Bacar Madi',      role: 'Conseiller Finance',     handle: '@bacar_m',    since: '9 mois',  avatar: 'https://picsum.photos/seed/tm12/200/200', tag: 'Finance' },
]

/* ── Partenaires hero card ── */
const heroPartners = [
  { name: 'Carrefour Mayotte',   type: 'Distribution', icon: 'bi-bag-fill',      date: '10 Jan 2025' },
  { name: 'Air Austral',         type: 'Transport',    icon: 'bi-airplane-fill',  date: '5 Jan 2025'  },
  { name: 'Mahoraise des Eaux',  type: 'Services',     icon: 'bi-droplet-fill',   date: '28 Déc 2024' },
]

/* ── Lily-point sparkline ── */
const lilyPriceData = [42, 38, 45, 41, 55, 48, 62, 58, 70, 65, 78, 82]

const lilyChartPoints = computed(() => {
  const W = 200, H = 56
  const mn = Math.min(...lilyPriceData), mx = Math.max(...lilyPriceData)
  const rng = mx - mn || 1
  return lilyPriceData.map((v, i) => {
    const x = (i / (lilyPriceData.length - 1)) * W
    const y = H - ((v - mn) / rng) * (H - 10) - 5
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
})

/* ── Slides équipe + hero card ── */
const teamSlide     = ref(0)
const heroCardSlide = ref(0)
const currentTeamGroup = computed(() => teamMembers.slice(teamSlide.value * 3, teamSlide.value * 3 + 3))

let teamSlideTimer = null
let heroCardTimer  = null

const selectedActu = ref(null)
const activeImg = ref(null)

function openActu(item) {
  selectedActu.value = item
  activeImg.value = item.images?.[0] ?? null
  document.body.style.overflow = 'hidden'
}

function closeActu() {
  selectedActu.value = null
  activeImg.value = null
  document.body.style.overflow = ''
}

function setActiveImg(src) {
  activeImg.value = src
}

function onKeyDown(e) {
  if (e.key === 'Escape') closeActu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  teamSlideTimer = setInterval(() => { teamSlide.value = (teamSlide.value + 1) % 4 }, 5000)
  heroCardTimer  = setInterval(() => { heroCardSlide.value = (heroCardSlide.value + 1) % 3 }, 5000)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
  clearInterval(teamSlideTimer)
  clearInterval(heroCardTimer)
})

const appMsgVisible = ref(false)

function handleAppClick() {
  appMsgVisible.value = true
  setTimeout(() => { appMsgVisible.value = false }, 3000)
}
</script>

<template>

  <!-- ══ HERO ══ -->
  <section class="hero position-relative overflow-hidden min-vh-100">
    <div class="orb orb-beige hero-orb-1 anim-float"></div>
    <div class="orb orb-green hero-orb-2 anim-float-r"></div>
    <div class="hero-grid"></div>

    <div class="position-relative hero-content">

      <!-- Contenu principal centré -->
      <div class="hero-main text-center">

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
          Participe au nettoyage des plages, forêts et mangroves de Mayotte
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
          <a href="#actualitespage" class="btn btn-glass rounded-pill hero-btn">
            <i class="bi bi-newspaper me-2"></i>Actualités
          </a>
        </div>

        <!-- Indicateur de scroll -->
        <div class="scroll-hint anim-float mt-5">
          <i class="bi bi-chevron-double-down"></i>
        </div>

      </div>


      <div class="hero-team-blocks anim-fade-up ">
          <Transition name="hteam" mode="out-in">
            <div :key="teamSlide" class="hero-team-row">
              <div
                v-for="person in currentTeamGroup"
                :key="person.id"
                class="hero-member-card"
              >
                <div class="hmc-header">
                  <span class="hmc-name">{{ person.name }}</span>
                  <span class="hmc-role">
                    <i class="bi bi-circle-fill hmc-dot"></i>{{ person.role }}
                  </span>
                </div>
                <div class="hmc-photo-wrap">
                  <img :src="person.avatar" :alt="person.name" class="hmc-photo" />
                </div>
                <div class="hmc-footer">
                  <div class="hmc-meta">
                    <img :src="person.avatar" class="hmc-mini-av" :alt="person.name" />
                    <div class="hmc-meta-text">
                      <span class="hmc-handle">{{ person.handle }}</span>
                      <span class="hmc-since">{{ person.since }}</span>
                    </div>
                  </div>
                  <span class="hmc-tag">{{ person.tag }}</span>
                </div>
              </div>
            </div>
          </Transition>
        </div>


        <div class="hero-right-group anim-fade-up anim-delay-1 pe-4">

          <div class="hero-info-card me-5">

             

            <Transition name="hic-fade" mode="out-in me-5">

              <!-- Actualités -->
              <div v-if="heroCardSlide === 0" key="actu" class="hic-body">
                <span :class="`actu-badge actu-badge--${actualites[0].type}`">{{ actualites[0].typeLabel }}</span>
                <div class="hic-actu-date">{{ actualites[0].date }}</div>
                <div class="hic-actu-title">{{ actualites[0].short }}</div>
                <a href="#actualitespage" class="hic-link">
                  Voir toutes les actus <i class="bi bi-arrow-right-short"></i>
                </a>
              </div>

              <!-- Lily-point -->
              <div v-else-if="heroCardSlide === 1" key="token" class="hic-body">
                <div class="hic-token-header">
                  <div>
                    <div class="hic-token-name"><i class="bi bi-coin me-1"></i>Lily-point</div>
                    <div class="hic-token-ticker">LILY</div>
                  </div>
                  <div>
                    <div class="hic-price-val">82 pts</div>
                    <div class="hic-price-change hic-price-up">
                      <i class="bi bi-arrow-up-short"></i>+95.2%
                    </div>
                  </div>
                </div>
                <svg class="hic-chart" viewBox="0 0 200 56" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lilyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="var(--beige-300)" stop-opacity="0.28"/>
                      <stop offset="100%" stop-color="var(--beige-300)" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <polygon :points="`0,56 ${lilyChartPoints} 200,56`" fill="url(#lilyGrad)"/>
                  <polyline
                    :points="lilyChartPoints"
                    fill="none"
                    stroke="var(--beige-300)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="hic-token-vol">
                  <i class="bi bi-bar-chart-fill"></i>
                  Volume 24h : <strong>3 420 LILY</strong>
                </div>
              </div>

              <!-- Partenaires -->
              <div v-else key="partners" class="hic-body">
                <div class="hic-partner-label">Derniers partenariats</div>
                <div v-for="p in heroPartners" :key="p.name" class="hic-partner-row">
                  <div class="hic-partner-icon"><i :class="`bi ${p.icon}`"></i></div>
                  <div class="hic-partner-info">
                    <span class="hic-partner-name">{{ p.name }}</span>
                    <span class="hic-partner-type">{{ p.type }}</span>
                  </div>
                  <span class="hic-partner-date">{{ p.date }}</span>
                </div>
              </div>

            </Transition>

            <!-- Dots de progression -->
            <div class="hic-dots">
              <div
                v-for="i in 3"
                :key="i"
                class="hic-dot"
                :class="{ 'is-active': heroCardSlide === i - 1 }"
                @click="heroCardSlide = i - 1"
              ></div>
            </div>
          </div>

          <!-- Social proof -->
          <div class="hero-social-proof ">
            <div class="hero-avatars">
              <img src="https://picsum.photos/seed/hero-av1/40/40" class="hero-avatar" alt="" />
              <img src="https://picsum.photos/seed/hero-av2/40/40" class="hero-avatar" alt="" />
              <img src="https://picsum.photos/seed/hero-av3/40/40" class="hero-avatar" alt="" />
              <img src="https://picsum.photos/seed/hero-av4/40/40" class="hero-avatar" alt="" />
            </div>
            <div class="hero-social-text">
              <strong>+1 240</strong>
              bénévoles nous font déjà confiance
            </div>
          </div>

        </div>

    </div>
  </section>

  <!-- ══ ACTUALITÉS ══ -->
  <section id="actualitespage" class="actu-section min-vh-100">
    <div class="container">

      <!-- En-tête -->
      <div class="actu-header reveal">
        <div class="actu-eyebrow">
          <span class="actu-dot-live"></span>
          <span class="actu-eyebrow-label">Actualités</span>
        </div>
        <h2 class="actu-heading">Dernières nouvelles</h2>
        <p class="actu-subheading">Suivez l'aventure Koraly en temps réel.</p>
      </div>

      <!-- Featured -->
      <div class="actu-featured reveal anim-delay-1" v-if="actualites.length" @click="openActu(actualites[0])">
        <div :class="`actu-featured-accent actu-accent--${actualites[0].type}`"></div>
        <div class="actu-featured-body">
          <div class="actu-featured-meta">
            <span :class="`actu-badge actu-badge--${actualites[0].type}`">{{ actualites[0].typeLabel }}</span>
            <span class="actu-meta-date">
              <i class="bi bi-calendar3"></i>{{ actualites[0].date }}
            </span>
          </div>
          <h3 class="actu-featured-title">{{ actualites[0].titre }}</h3>
          <p class="actu-featured-desc">{{ actualites[0].details }}</p>
          <span class="actu-read-more">Lire la suite <i class="bi bi-arrow-right"></i></span>
        </div>
        <div class="actu-featured-number" aria-hidden="true">01</div>
      </div>

      <!-- Grille secondaire -->
      <div class="actu-grid">
        <div
          v-for="(item, i) in actualites.slice(1)"
          :key="item.id"
          class="actu-card reveal"
          :class="`anim-delay-${i + 2}`"
          @click="openActu(item)"
        >
          <div :class="`actu-card-bar actu-accent--${item.type}`"></div>
          <div class="actu-card-inner">
            <div class="actu-card-meta">
              <span :class="`actu-badge actu-badge--${item.type}`">{{ item.typeLabel }}</span>
              <span class="actu-meta-date">{{ item.date }}</span>
            </div>
            <h4 class="actu-card-title">{{ item.titre }}</h4>
            <p class="actu-card-desc">{{ item.details }}</p>
            <span class="actu-read-more actu-read-more--sm">Lire <i class="bi bi-arrow-right"></i></span>
          </div>
          <div class="actu-card-num" aria-hidden="true">0{{ i + 2 }}</div>
        </div>
      </div>

    </div>
  </section>

  <!-- ══ COMMENT ÇA MARCHE ══ -->
  <section class="py-5 py-lg-6 section-bg-2 min-vh-100">
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

  <!-- ══ CTA ══ -->
  <section class="py-5 py-lg-6 section-bg-3 min-vh-100 d-flex justify-content-center align-items-center">
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
            <RouterLink to="/application" class="btn btn-glass rounded-pill px-4">
              Découvrir l'application <i class="bi bi-phone-fill ms-1"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ MODAL DÉTAIL ACTUALITÉ ══ -->
  <Transition name="actu-modal">
    <div v-if="selectedActu" class="actu-modal-overlay" @click.self="closeActu" role="dialog" aria-modal="true">
      <div class="actu-modal-box">

        <!-- Bouton fermer -->
        <button class="actu-modal-close" @click="closeActu" aria-label="Fermer">
          <i class="bi bi-x-lg"></i>
        </button>

        <!-- Image principale -->
        <div class="actu-modal-img-wrap">
          <img
            :src="activeImg"
            :alt="selectedActu.titre"
            class="actu-modal-img-main"
          />
          <div class="actu-modal-img-overlay"></div>
          <!-- Badge flottant sur l'image -->
          <span :class="`actu-badge actu-badge--${selectedActu.type} actu-modal-float-badge`">
            {{ selectedActu.typeLabel }}
          </span>
        </div>

        <!-- Miniatures -->
        <div class="actu-modal-thumbs" v-if="selectedActu.images?.length > 1">
          <button
            v-for="(img, i) in selectedActu.images"
            :key="i"
            class="actu-modal-thumb-btn"
            :class="{ 'is-active': img === activeImg }"
            @click="setActiveImg(img)"
          >
            <img :src="img" :alt="`Photo ${i + 1}`" class="actu-modal-thumb" />
          </button>
        </div>

        <!-- Contenu texte -->
        <div class="actu-modal-content">
          <div class="actu-modal-meta">
            <span class="actu-meta-date">
              <i class="bi bi-calendar3"></i>{{ selectedActu.date }}
            </span>
          </div>
          <h2 class="actu-modal-title">{{ selectedActu.titre }}</h2>
          <div :class="`actu-modal-divider actu-accent--${selectedActu.type}`"></div>
          <p class="actu-modal-desc">{{ selectedActu.details }}</p>
        </div>

      </div>
    </div>
  </Transition>

</template>
