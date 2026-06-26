<script setup>
import '@/assets/css/pages/AppPage.css'
import { useReveal } from '../composables/useReveal.js'
useReveal()

const features = [
  { icon: 'bi bi-geo-alt-fill',  title: 'Carte interactive',       desc: 'Localise les sites de nettoyage autour de toi en temps réel sur une carte interactive.', colorKey: 'green' },
  { icon: 'bi bi-camera-fill',   title: 'Validation par photo',     desc: 'Prends tes photos avant et après directement dans l\'app. Validé par un référent sous 48h.', colorKey: 'beige' },
  { icon: 'bi bi-coin',          title: 'Lily-points en direct',    desc: 'Consulte ton solde en temps réel et échange tes points chez nos 32 partenaires locaux.', colorKey: 'blue' },
  { icon: 'bi bi-trophy-fill',   title: 'Défis & Classements',      desc: 'Challenge tes amis, rejoins des équipes et grimpe dans le classement des bénévoles de l\'île.', colorKey: 'green' },
]

const steps = [
  { num: '01', title: 'Télécharge',       desc: 'Gratuit sur l\'App Store et Google Play. Installation en moins d\'une minute.', icon: 'bi bi-download' },
  { num: '02', title: 'Crée ton profil',  desc: 'Inscris-toi en 30 secondes et rejoins la communauté Koraly de Mayotte.', icon: 'bi bi-person-plus-fill' },
  { num: '03', title: 'Trouve un site',   desc: 'La carte te géolocalise et affiche toutes les zones à nettoyer près de toi.', icon: 'bi bi-map-fill' },
  { num: '04', title: 'Gagne des points', desc: 'Valide ta session avec tes photos et reçois tes Lily-points sous 48h.', icon: 'bi bi-star-fill' },
]

const reviews = [
  { id: 1, name: 'Fatima A.',    location: 'Mamoudzou',    stars: 5, text: 'Super intuitive ! Je valide mes nettoyages en 2 minutes. Mes Lily-points ont déjà payé mon plein de courses !',           img: 'https://picsum.photos/seed/rv-fatima/80/80'    },
  { id: 2, name: 'Ibrahim M.',   location: 'Koungou',      stars: 5, text: 'La carte de géolocalisation est parfaite. Je trouve toujours un site proche. La communauté est vraiment au top !',        img: 'https://picsum.photos/seed/rv-ibrahim/80/80'   },
  { id: 3, name: 'Soraya D.',    location: 'Bandraboua',   stars: 5, text: 'Grâce à Koraly j\'ai rencontré des gens formidables. Et ça fait vraiment du bien à notre île. Téléchargez !',             img: 'https://picsum.photos/seed/rv-soraya/80/80'    },
  { id: 4, name: 'Ali B.',       location: 'Dzaoudzi',     stars: 5, text: 'Les validations sont rapides et les points arrivent vite. Le classement entre amis rend ça vraiment fun !',                img: 'https://picsum.photos/seed/rv-ali/80/80'       },
  { id: 5, name: 'Naïma R.',     location: 'Petite-Terre', stars: 5, text: '6 mois d\'utilisation, déjà 400 Lily-points cumulés. C\'est motivant de voir son impact en chiffres réels !',             img: 'https://picsum.photos/seed/rv-naima/80/80'     },
  { id: 6, name: 'Youssouf K.',  location: 'Sada',         stars: 4, text: 'Application bien pensée pour Mayotte. L\'assistant intégré aide beaucoup les nouveaux bénévoles qui débutent.',            img: 'https://picsum.photos/seed/rv-youssouf/80/80'  },
  { id: 7, name: 'Halima T.',    location: 'Chiconi',      stars: 5, text: 'Enfin une app qui donne envie de protéger Mayotte ! Le défi entre amis rend l\'expérience encore plus fun.',              img: 'https://picsum.photos/seed/rv-halima/80/80'    },
  { id: 8, name: 'Moussa C.',    location: 'Bouéni',       stars: 5, text: 'Interface claire et belle. Je recommande à tous mes collègues. Mayotte mérite notre engagement collectif !',               img: 'https://picsum.photos/seed/rv-moussa/80/80'    },
]
</script>

<template>

  <!-- ══ HERO ══ -->
  <section class="app-hero">
    <div class="app-orb app-orb-1"></div>
    <div class="app-orb app-orb-2"></div>
    <div class="app-hero-grid"></div>

    <div class="container app-hero-container">

      <!-- Texte & boutons -->
      <div class="app-hero-text reveal">
        <div class="app-eyebrow">
          <i class="bi bi-phone-fill"></i>
          Application mobile
        </div>
        <h1 class="app-hero-title">
          Koraly dans<br />
          <span class="app-hero-accent">votre poche.</span>
        </h1>
        <p class="app-hero-desc">
          Géolocalisation, validation par photo et Lily-points en direct — tout depuis votre smartphone. Disponible T2 2025.
        </p>

        <!-- Boutons téléchargement -->
        <div class="app-store-row">
          <a href="#" class="store-btn" @click.prevent>
            <i class="bi bi-apple store-btn-icon"></i>
            <div class="store-btn-text">
              <span class="store-btn-sub">Télécharger sur</span>
              <strong class="store-btn-name">App Store</strong>
            </div>
          </a>
          <a href="#" class="store-btn" @click.prevent>
            <i class="bi bi-google-play store-btn-icon"></i>
            <div class="store-btn-text">
              <span class="store-btn-sub">Disponible sur</span>
              <strong class="store-btn-name">Google Play</strong>
            </div>
          </a>
        </div>

        <!-- Mini-stats -->
        <div class="app-hero-badges">
          <span class="app-hero-badge"><i class="bi bi-star-fill"></i> 4.9 / 5</span>
          <span class="app-hero-badge"><i class="bi bi-download"></i> 10 000+</span>
          <span class="app-hero-badge"><i class="bi bi-phone"></i> iOS &amp; Android</span>
        </div>
      </div>

      <!-- iPhone mockup -->
      <div class="app-hero-phone reveal anim-delay-2">
        <div class="iphone-glow"></div>
        <div class="iphone-frame">

          <!-- Boutons physiques -->
          <div class="iphone-side iphone-side--left">
            <div class="iphone-btn iphone-btn--silent"></div>
            <div class="iphone-btn iphone-btn--vol-up"></div>
            <div class="iphone-btn iphone-btn--vol-down"></div>
          </div>
          <div class="iphone-side iphone-side--right">
            <div class="iphone-btn iphone-btn--power"></div>
          </div>

          <!-- Dynamic Island -->
          <div class="iphone-island"></div>

          <!-- Écran app -->
          <div class="iphone-screen">

            <!-- Barre de statut -->
            <div class="ascreen-status">
              <span>9:41</span>
              <div class="ascreen-status-icons">
                <i class="bi bi-reception-4"></i>
                <i class="bi bi-wifi"></i>
                <i class="bi bi-battery-half"></i>
              </div>
            </div>

            <!-- Header app -->
            <div class="ascreen-header">
              <div class="ascreen-logo"><i class="bi bi-leaf-fill"></i> Koraly</div>
              <button class="ascreen-notif"><i class="bi bi-bell-fill"></i></button>
            </div>

            <!-- Carte profil -->
            <div class="ascreen-profile">
              <img src="https://picsum.photos/seed/koraly-user1/60/60" class="ascreen-avatar" alt="avatar" />
              <div class="ascreen-profile-info">
                <div class="ascreen-name">Marie D.</div>
                <div class="ascreen-level"><i class="bi bi-leaf-fill"></i> Éco-Héros</div>
              </div>
              <div class="ascreen-pts-badge">342 pts</div>
            </div>

            <!-- Stats -->
            <div class="ascreen-stats">
              <div class="ascreen-stat">
                <div class="ascreen-stat-val">18</div>
                <div class="ascreen-stat-lbl">Sessions</div>
              </div>
              <div class="ascreen-stat-div"></div>
              <div class="ascreen-stat">
                <div class="ascreen-stat-val">8.5 kg</div>
                <div class="ascreen-stat-lbl">Déchets</div>
              </div>
              <div class="ascreen-stat-div"></div>
              <div class="ascreen-stat">
                <div class="ascreen-stat-val">#4</div>
                <div class="ascreen-stat-lbl">Classement</div>
              </div>
            </div>

            <!-- Section activité -->
            <div class="ascreen-section-label">Activité récente</div>

            <div class="ascreen-activity">
              <div class="ascreen-activity-item">
                <div class="ascreen-dot ascreen-dot--green"></div>
                <div class="ascreen-activity-info">
                  <div class="ascreen-activity-title">Plage de Sakouli</div>
                  <div class="ascreen-activity-sub">Il y a 2 jours</div>
                </div>
                <div class="ascreen-activity-pts">+25 pts</div>
              </div>
              <div class="ascreen-activity-item">
                <div class="ascreen-dot ascreen-dot--beige"></div>
                <div class="ascreen-activity-info">
                  <div class="ascreen-activity-title">Mangrove Bandraboua</div>
                  <div class="ascreen-activity-sub">Il y a 1 semaine</div>
                </div>
                <div class="ascreen-activity-pts">+30 pts</div>
              </div>
              <div class="ascreen-activity-item">
                <div class="ascreen-dot ascreen-dot--blue"></div>
                <div class="ascreen-activity-info">
                  <div class="ascreen-activity-title">Forêt de Combani</div>
                  <div class="ascreen-activity-sub">Il y a 2 semaines</div>
                </div>
                <div class="ascreen-activity-pts">+20 pts</div>
              </div>
            </div>

            <!-- Barre de navigation -->
            <div class="ascreen-tabbar">
              <button class="ascreen-tab ascreen-tab--active"><i class="bi bi-house-fill"></i></button>
              <button class="ascreen-tab"><i class="bi bi-map-fill"></i></button>
              <button class="ascreen-tab ascreen-tab--fab"><i class="bi bi-plus-lg"></i></button>
              <button class="ascreen-tab"><i class="bi bi-coin"></i></button>
              <button class="ascreen-tab"><i class="bi bi-person-fill"></i></button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ══ FONCTIONNALITÉS ══ -->
  <section class="app-features-section section-bg-2">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Tout dans une app</span>
        <h2 class="section-title">Ce que Koraly fait pour vous</h2>
        <p class="section-subtitle mx-auto">Une expérience pensée pour les bénévoles mahorais, simple et efficace.</p>
      </div>
      <div class="row g-4">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="col-md-6 col-lg-3 reveal"
          :class="`anim-delay-${i + 1}`"
        >
          <div class="glass-card feat-card p-4 h-100">
            <div :class="`feat-icon feat-icon--${feat.colorKey}`">
              <i :class="feat.icon"></i>
            </div>
            <h5 class="feat-title mt-3 mb-2">{{ feat.title }}</h5>
            <p class="feat-desc mb-0">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ COMMENT ÇA MARCHE ══ -->
  <section class="app-steps-section section-bg">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <span class="section-label">Guide de démarrage</span>
        <h2 class="section-title">Comment utiliser l'app ?</h2>
        <p class="section-subtitle mx-auto">Prêt à contribuer en moins de 5 minutes.</p>
      </div>
      <div class="steps-grid">
        <div v-for="step in steps" :key="step.num" class="step-block reveal">
          <div class="step-block-num">{{ step.num }}</div>
          <div class="step-block-icon">
            <i :class="step.icon"></i>
          </div>
          <h5 class="step-block-title">{{ step.title }}</h5>
          <p class="step-block-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ AVIS EN DÉFILEMENT INFINI ══ -->
  <section class="app-reviews-section section-bg-2">
    <div class="container mb-5">
      <div class="text-center reveal">
        <span class="section-label">Témoignages</span>
        <h2 class="section-title">Ce que disent nos utilisateurs</h2>
        <p class="section-subtitle mx-auto">Plus de 10 000 bénévoles font confiance à Koraly à Mayotte.</p>
      </div>
    </div>

    <!-- Rangée 1 : gauche -->
    <div class="reviews-marquee-wrap">
      <div class="reviews-track">
        <div v-for="(rv, i) in [...reviews, ...reviews]" :key="`r1-${i}`" class="review-card">
          <div class="review-card-top">
            <img :src="rv.img" :alt="rv.name" class="review-avatar" />
            <div class="review-meta">
              <div class="review-name">{{ rv.name }}</div>
              <div class="review-location"><i class="bi bi-geo-alt-fill"></i>{{ rv.location }}</div>
            </div>
            <div class="review-stars">
              <i v-for="s in rv.stars" :key="s" class="bi bi-star-fill"></i>
              <i v-for="s in (5 - rv.stars)" :key="`e${s}`" class="bi bi-star"></i>
            </div>
          </div>
          <p class="review-text">{{ rv.text }}</p>
        </div>
      </div>
    </div>

    <!-- Rangée 2 : droite -->
    <div class="reviews-marquee-wrap reviews-marquee-wrap--mt">
      <div class="reviews-track reviews-track--reverse">
        <div v-for="(rv, i) in [...reviews].reverse().concat([...reviews].reverse())" :key="`r2-${i}`" class="review-card">
          <div class="review-card-top">
            <img :src="rv.img" :alt="rv.name" class="review-avatar" />
            <div class="review-meta">
              <div class="review-name">{{ rv.name }}</div>
              <div class="review-location"><i class="bi bi-geo-alt-fill"></i>{{ rv.location }}</div>
            </div>
            <div class="review-stars">
              <i v-for="s in rv.stars" :key="s" class="bi bi-star-fill"></i>
              <i v-for="s in (5 - rv.stars)" :key="`e${s}`" class="bi bi-star"></i>
            </div>
          </div>
          <p class="review-text">{{ rv.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ══ CTA TÉLÉCHARGEMENT ══ -->
  <section class="app-cta-section section-bg">
    <div class="container">
      <div class="app-cta-card reveal">
        <div class="app-cta-orb"></div>
        <div class="app-cta-inner">
          <div class="app-cta-icon"><i class="bi bi-phone-fill"></i></div>
          <h2 class="app-cta-title">Prêt à rejoindre le mouvement ?</h2>
          <p class="app-cta-sub">Télécharge gratuitement l'application Koraly et commence à faire la différence dès aujourd'hui à Mayotte.</p>
          <div class="app-store-row app-store-row--centered">
            <a href="#" class="store-btn store-btn--light" @click.prevent>
              <i class="bi bi-apple store-btn-icon"></i>
              <div class="store-btn-text">
                <span class="store-btn-sub">Télécharger sur</span>
                <strong class="store-btn-name">App Store</strong>
              </div>
            </a>
            <a href="#" class="store-btn store-btn--light" @click.prevent>
              <i class="bi bi-google-play store-btn-icon"></i>
              <div class="store-btn-text">
                <span class="store-btn-sub">Disponible sur</span>
                <strong class="store-btn-name">Google Play</strong>
              </div>
            </a>
          </div>
          <p class="app-cta-note">Disponible T2 2025 &nbsp;·&nbsp; Gratuit &nbsp;·&nbsp; iOS &amp; Android</p>
        </div>
      </div>
    </div>
  </section>

</template>
