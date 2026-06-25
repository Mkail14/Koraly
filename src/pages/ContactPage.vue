<script setup>
import '@/assets/css/pages/ContactPage.css'
import { ref, reactive } from 'vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()

const benevoleSuccess  = ref(false)
const partenaireSuccess = ref(false)

const benevoleForm = reactive({ name: '', email: '', phone: '', commune: '', dispos: [], message: '', rgpd: false })
const partenaireForm = reactive({ name: '', structure: '', email: '', phone: '', commune: '', type: '', message: '', rgpd: false })

const communes = [
  'Mamoudzou','Bandraboua','Bouéni','Chirongui','Dembéni','Kani-Kéli',
  'Koungou','Mtzamboro','Ouangani','Pamandzi','Sada','Tsingoni','Autre',
]

const dispos = ['Semaine — matin', 'Semaine — après-midi', 'Week-end — matin', 'Week-end — après-midi']

const submitBenevole   = () => { benevoleSuccess.value   = true }
const submitPartenaire = () => { partenaireSuccess.value = true }

const resetBenevole = () => {
  benevoleSuccess.value = false
  Object.assign(benevoleForm, { name:'',email:'',phone:'',commune:'',dispos:[],message:'',rgpd:false })
}
const resetPartenaire = () => {
  partenaireSuccess.value = false
  Object.assign(partenaireForm, { name:'',structure:'',email:'',phone:'',commune:'',type:'',message:'',rgpd:false })
}

const contactInfos = [
  { id: 1, icon: 'bi bi-geo-alt',  label: 'Adresse',     value: 'Mamoudzou, Mayotte (976)' },
  { id: 2, icon: 'bi bi-envelope', label: 'Email',        value: 'contact@koraly-mayotte.org' },
  { id: 3, icon: 'bi bi-telephone',label: 'Téléphone',    value: '+262 269 XX XX XX' },
  { id: 4, icon: 'bi bi-clock',    label: 'Permanences',  value: 'Lun–Ven : 9 h–17 h (heure locale)' },
]

const socials = [
  { name: 'Facebook',  icon: 'bi bi-facebook' },
  { name: 'Instagram', icon: 'bi bi-instagram' },
  { name: 'WhatsApp',  icon: 'bi bi-whatsapp' },
  { name: 'Twitter/X', icon: 'bi bi-twitter-x' },
]
</script>

<template>

  <!-- En-tête -->
  <section class="page-header text-center">
    <div class="page-header-grid"></div>
    <div class="orb orb-beige contact-orb-beige"></div>
    <div class="orb orb-green contact-orb-green"></div>
    <div class="container position-relative z-1">
      <span class="section-label anim-fade-down">Rejoindre Koraly</span>
      <h1 class="section-title page-title anim-fade-up anim-delay-1">Contact &amp; Inscription</h1>
      <p class="section-subtitle anim-fade-up anim-delay-2 contact-page-subtitle">
        Rejoins l'aventure ou deviens partenaire de l'association.
      </p>
    </div>
  </section>

  <section class="py-5 section-bg-2">
    <div class="container">
      <div class="row g-5">

        <!-- Formulaires -->
        <div class="col-lg-7 reveal">
          <!-- Onglets Bootstrap -->
          <ul class="nav nav-tabs mb-4" id="contactTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active fw-semibold" id="t-benv" data-bs-toggle="tab" data-bs-target="#benevole" type="button" role="tab">
                <i class="bi bi-person-heart me-2"></i>Devenir bénévole
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link fw-semibold" id="t-part" data-bs-toggle="tab" data-bs-target="#partenaire" type="button" role="tab">
                <i class="bi bi-handshake me-2"></i>Devenir partenaire
              </button>
            </li>
          </ul>

          <div class="tab-content">

            <!-- ─ Formulaire bénévole ─ -->
            <div class="tab-pane fade show active" id="benevole" role="tabpanel">

              <!-- Formulaire -->
              <div v-if="!benevoleSuccess" class="glass-card p-4">
                <h5 class="fw-bold mb-4">
                  <i class="bi bi-leaf me-2 text-green"></i>Je veux participer aux nettoyages
                </h5>
                <form @submit.prevent="submitBenevole" novalidate>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Prénom &amp; Nom *</label>
                      <input v-model="benevoleForm.name" type="text" class="form-control" placeholder="Aïcha Moussa" required />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email *</label>
                      <input v-model="benevoleForm.email" type="email" class="form-control" placeholder="mon@email.com" required />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Téléphone</label>
                      <input v-model="benevoleForm.phone" type="tel" class="form-control" placeholder="+262 6XX XX XX XX" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Commune *</label>
                      <select v-model="benevoleForm.commune" class="form-select" required>
                        <option value="">Choisir une commune</option>
                        <option v-for="c in communes" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Disponibilités</label>
                      <div class="d-flex flex-wrap gap-3">
                        <div v-for="d in dispos" :key="d" class="form-check">
                          <input v-model="benevoleForm.dispos" class="form-check-input" type="checkbox" :id="`d-${d}`" :value="d" />
                          <label class="form-check-label form-check-label-sm" :for="`d-${d}`">{{ d }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Motivation</label>
                      <textarea v-model="benevoleForm.message" class="form-control" rows="4" placeholder="Parle-nous de ta motivation…"></textarea>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input v-model="benevoleForm.rgpd" class="form-check-input" type="checkbox" id="rgpd-b" required />
                        <label class="form-check-label form-check-label-sm" for="rgpd-b">
                          J'accepte que mes données soient utilisées par Koraly pour la gestion des bénévoles. *
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-eco w-100 rounded-pill py-2 fw-semibold">
                        <i class="bi bi-send me-2"></i>Envoyer ma candidature
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Succès bénévole -->
              <div v-else class="glass-card p-5 text-center">
                <div class="success-icon success-icon--green mx-auto mb-3">
                  <i class="bi bi-check-lg fs-2 text-green"></i>
                </div>
                <h4 class="fw-bold mb-2">Candidature envoyée !</h4>
                <p class="mb-4 success-desc">
                  Merci <strong>{{ benevoleForm.name }}</strong> ! Nous reviendrons vers toi sous 48 h
                  à l'adresse <strong>{{ benevoleForm.email }}</strong>.
                </p>
                <button @click="resetBenevole" class="btn btn-glass rounded-pill px-4">
                  Envoyer une nouvelle demande
                </button>
              </div>
            </div>

            <!-- ─ Formulaire partenaire ─ -->
            <div class="tab-pane fade" id="partenaire" role="tabpanel">

              <div v-if="!partenaireSuccess" class="glass-card p-4">
                <h5 class="fw-bold mb-4">
                  <i class="bi bi-handshake me-2 text-beige"></i>Je souhaite devenir partenaire
                </h5>
                <form @submit.prevent="submitPartenaire" novalidate>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">Nom &amp; Prénom *</label>
                      <input v-model="partenaireForm.name" type="text" class="form-control" required placeholder="Votre nom complet" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Structure / Entreprise *</label>
                      <input v-model="partenaireForm.structure" type="text" class="form-control" required placeholder="Nom de votre organisation" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Email *</label>
                      <input v-model="partenaireForm.email" type="email" class="form-control" required placeholder="contact@mastructure.com" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Téléphone</label>
                      <input v-model="partenaireForm.phone" type="tel" class="form-control" placeholder="+262 269 XX XX XX" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Commune *</label>
                      <select v-model="partenaireForm.commune" class="form-select" required>
                        <option value="">Choisir</option>
                        <option v-for="c in communes" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Type de structure *</label>
                      <select v-model="partenaireForm.type" class="form-select" required>
                        <option value="">Sélectionner</option>
                        <option>Mairie / Collectivité</option>
                        <option>Entreprise privée</option>
                        <option>Commerce / Artisan</option>
                        <option>Association / ONG</option>
                        <option>Transport</option>
                        <option>Opérateur téléphonique</option>
                        <option>Établissement scolaire</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Message / Proposition</label>
                      <textarea v-model="partenaireForm.message" class="form-control" rows="4" placeholder="Décrivez votre intérêt pour un partenariat avec Koraly…"></textarea>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input v-model="partenaireForm.rgpd" class="form-check-input" type="checkbox" id="rgpd-p" required />
                        <label class="form-check-label form-check-label-sm" for="rgpd-p">
                          J'accepte que mes données soient utilisées par Koraly dans le cadre de ce partenariat. *
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-beige w-100 rounded-pill py-2 fw-semibold">
                        <i class="bi bi-send me-2"></i>Envoyer ma proposition
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Succès partenaire -->
              <div v-else class="glass-card p-5 text-center">
                <div class="success-icon success-icon--beige mx-auto mb-3">
                  <i class="bi bi-check-lg fs-2 text-beige"></i>
                </div>
                <h4 class="fw-bold mb-2">Demande reçue !</h4>
                <p class="mb-4 success-desc">
                  Merci <strong>{{ partenaireForm.name }}</strong> de <strong>{{ partenaireForm.structure }}</strong> !
                  Nous vous contacterons rapidement.
                </p>
                <button @click="resetPartenaire" class="btn btn-glass rounded-pill px-4">
                  Envoyer une nouvelle demande
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Infos de contact -->
        <div class="col-lg-5 reveal anim-delay-2">
          <div class="glass-card p-4 h-100">
            <h5 class="fw-bold mb-4">
              <i class="bi bi-info-circle me-2 text-beige"></i>Informations
            </h5>

            <div class="d-flex flex-column gap-3 mb-4">
              <div v-for="info in contactInfos" :key="info.id" class="d-flex align-items-start gap-3">
                <div class="contact-icon flex-shrink-0">
                  <i :class="info.icon" class="text-beige"></i>
                </div>
                <div>
                  <strong class="d-block mb-0 contact-info-label">{{ info.label }}</strong>
                  <span class="contact-info-value">{{ info.value }}</span>
                </div>
              </div>
            </div>

            <hr />

            <h6 class="fw-bold mb-3 social-heading">Suivez-nous</h6>
            <div class="d-flex gap-2 mb-4">
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

            <div class="glass-flat p-3 text-center">
              <p class="response-time-label">Temps de réponse moyen</p>
              <span class="fw-bold response-time-value">24 – 48 heures</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
