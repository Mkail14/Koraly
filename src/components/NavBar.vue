<script setup>
import '@/assets/css/components/NavBar.css'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isDark   = ref(false)
const menuOpen = ref(false)

// ── Recherche ──
const searchOpen    = ref(false)
const searchQuery   = ref('')
const searchInputEl = ref(null)

async function toggleSearch() {
  searchOpen.value = !searchOpen.value
  if (searchOpen.value) {
    await nextTick()
    searchInputEl.value?.focus()
  } else {
    searchQuery.value = ''
  }
}

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}

// ── Overlay contact ──
const contactOpen = ref(false)

// Formulaire contact
const formData    = ref({ name: '', email: '', message: '' })
const formLoading = ref(false)
const formSent    = ref(false)

// Chat IA
const messages    = ref([
  { id: 0, role: 'ai', text: 'Bonjour ! Je suis l\'assistant Koraly 🌿 Je peux vous aider avec vos questions sur la participation, les Lily-points ou nos partenaires.' }
])
const userInput   = ref('')
const aiLoading   = ref(false)
const chatEnd     = ref(null)
const chatScroll  = ref(null)

// Suggestions rapides
const suggestions = ['Comment participer ?', 'Mes Lily-points', 'Partenaires', 'Contact équipe']

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  document.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey)
  document.body.style.overflow = ''
})

function handleKey(e) {
  if (e.key === 'Escape') {
    if (contactOpen.value) closeContact()
    if (searchOpen.value) closeSearch()
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('koraly-theme', theme)
}

function openContact() {
  contactOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeContact() {
  contactOpen.value = false
  document.body.style.overflow = ''
}

function submitForm() {
  formLoading.value = true
  setTimeout(() => {
    formLoading.value = false
    formSent.value = true
    setTimeout(() => {
      formSent.value = false
      formData.value = { name: '', email: '', message: '' }
    }, 3500)
  }, 1100)
}

async function sendMessage(text) {
  const content = (text ?? userInput.value).trim()
  if (!content || aiLoading.value) return
  userInput.value = ''
  messages.value.push({ id: Date.now(), role: 'user', text: content })
  aiLoading.value = true
  await nextTick()
  chatEnd.value?.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    messages.value.push({ id: Date.now() + 1, role: 'ai', text: aiReply(content) })
    aiLoading.value = false
    nextTick(() => chatEnd.value?.scrollIntoView({ behavior: 'smooth' }))
  }, 900 + Math.random() * 700)
}

function aiReply(msg) {
  const m = msg.toLowerCase()
  if (m.includes('participer') || m.includes('bénévol') || m.includes('inscrire') || m.includes('rejoindre'))
    return 'Pour participer, rendez-vous sur la page Participer ! Choisissez un site de nettoyage, prenez des photos avant/après votre action et soumettez votre participation. Un bénévole référent validera sous 48h et vous recevrez vos Lily-points !'
  if (m.includes('lily') || m.includes('point') || m.includes('récompense') || m.includes('recompense'))
    return 'Les Lily-points s\'accumulent à chaque nettoyage validé ! Échangez-les contre des récompenses exclusives chez nos 32 partenaires à Mayotte : réductions, produits locaux… Consultez la page Récompenses !'
  if (m.includes('partenaire'))
    return 'Koraly compte 32 partenaires locaux à Mayotte ! Des commerces et services qui offrent des avantages exclusifs à nos bénévoles. Visitez la page Partenaires pour les découvrir !'
  if (m.includes('contact') || m.includes('équipe') || m.includes('email'))
    return 'Vous pouvez nous écrire via le formulaire ci-contre ! Notre équipe répond sous 24-48h. Pour les urgences : contact@koraly.org 📩'
  if (m.includes('plage') || m.includes('nettoyage') || m.includes('déchet') || m.includes('site'))
    return 'Nous organisons des nettoyages sur toute l\'île : plages, mangroves, forêts. Consultez la carte sur la page Participer pour trouver les sites les plus proches de chez vous !'
  if (m.includes('bonjour') || m.includes('salut') || m.includes('hello'))
    return 'Bonjour ! Ravi de vous accueillir 🌿 Je peux vous aider sur la participation, les Lily-points, nos partenaires ou comment nous contacter. Que souhaitez-vous savoir ?'
  if (m.includes('merci'))
    return 'Avec plaisir ! Ensemble, gardons Mayotte belle 🌿 N\'hésitez pas si vous avez d\'autres questions !'
  return 'Merci pour votre message ! Pour toute question précise sur l\'association, n\'hésitez pas à reformuler ou à utiliser le formulaire de contact. Notre équipe bénévole est là pour vous !'
}
</script>



<template>

  <!-- ═══════════════════════════════════════════════════════
       FLOATING NAVBAR
  ═══════════════════════════════════════════════════════ -->
  <nav class="fnav">
    <div class="fnav-inner">

      <!-- ① Pilule principale : Logo + Liens -->
      <div class="fnav-bar">
        <RouterLink class="fnav-brand" to="/" @click="menuOpen = false">
          <div class="fnav-logo-icon"><i class="bi bi-leaf-fill"></i></div>
          <span class="fnav-logo-text">Koraly</span>
        </RouterLink>

        <ul class="fnav-links">
          <li>
            <RouterLink class="fnav-link" active-class="fnav-link--active" exact-active-class="fnav-link--active" to="/">Accueil</RouterLink>
          </li>
          
          <li>
            <RouterLink class="fnav-link" active-class="fnav-link--active" to="/application">Application</RouterLink>
          </li>
          <li>
            <RouterLink class="fnav-link" active-class="fnav-link--active" to="/partenaires">Partenaires</RouterLink>
          </li>
        </ul>

        <!-- ④ Recherche extensible — dans la pilule principale -->
        <div class="fnav-search" :class="{ 'is-open': searchOpen }">
          <input
            ref="searchInputEl"
            class="fnav-search-input"
            type="text"
            v-model="searchQuery"
            placeholder="Rechercher…"
            @keydown.escape="closeSearch"
          />
          <button
            class="fnav-search-btn"
            @click="toggleSearch"
            :aria-label="searchOpen ? 'Fermer la recherche' : 'Rechercher'"
          >
            <i :class="searchOpen ? 'bi bi-x' : 'bi bi-search'"></i>
          </button>
        </div>

        <!-- Burger mobile (dans la pilule sur mobile) -->
        <button class="fnav-burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Menu">
          <i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>
      </div>

      <!-- ② HORS navbar : Toggle thème (pilule séparée) -->
      <button class="fnav-theme" @click="toggleTheme" :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'">
        <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'"></i>
        <span class="fnav-theme-label">{{ isDark ? 'Clair' : 'Sombre' }}</span>
      </button>

      <!-- ③ HORS navbar : CTA Participer (pilule séparée) -->
      <RouterLink class="fnav-cta" to="/participer" @click="menuOpen = false">
        <i class="bi bi-hand-thumbs-up"></i>
        <span>Participer</span>
      </RouterLink>

    </div>

    <!-- Menu mobile -->
    <Transition name="fnav-slide">
      <div v-if="menuOpen" class="fnav-mobile-menu">
        <RouterLink class="fnav-mobile-link" to="/" @click="menuOpen = false">
          <i class="bi bi-house"></i> Accueil
        </RouterLink>
        <RouterLink class="fnav-mobile-link" to="/participer" @click="menuOpen = false">
          <i class="bi bi-people"></i> Participer
        </RouterLink>
        <RouterLink class="fnav-mobile-link" to="/application" @click="menuOpen = false">
          <i class="bi bi-phone-fill"></i> Application
        </RouterLink>
        <RouterLink class="fnav-mobile-link" to="/partenaires" @click="menuOpen = false">
          <i class="bi bi-handshake"></i> Partenaires
        </RouterLink>
        <div class="fnav-mobile-actions">
          <button class="fnav-theme fnav-theme--block" @click="toggleTheme">
            <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'"></i>
            {{ isDark ? 'Mode clair' : 'Mode sombre' }}
          </button>
          <RouterLink class="fnav-cta fnav-cta--block" to="/participer" @click="menuOpen = false">
            <i class="bi bi-hand-thumbs-up"></i> Participer
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>


  <!-- ═══════════════════════════════════════════════════════
       FAB CONTACT — bouton flottant bas droite
  ═══════════════════════════════════════════════════════ -->
  <button class="contact-fab mb-3" @click="openContact" aria-label="Ouvrir le contact">
    <i class="bi-chat-dots-fill"></i>
  </button>


  <!-- ═══════════════════════════════════════════════════════
       OVERLAY CONTACT (2 panneaux)
  ═══════════════════════════════════════════════════════ -->
  <Teleport to="body">
    <Transition name="overlay">
      <div v-if="contactOpen" class="co-overlay" @click.self="closeContact" role="dialog" aria-modal="true">

        <!-- Bouton fermer -->
        <button class="co-close" @click="closeContact" aria-label="Fermer">
          <i class="bi bi-x-lg"></i>
        </button>

        <div class="co-panels">

          <!-- ── PANNEAU 1 : Formulaire contact ── -->
          <div class="co-panel co-panel--form">
            <div class="co-panel-head">
              <div class="co-panel-icon co-panel-icon--contact">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h2 class="co-panel-title">Nous contacter</h2>
                <p class="co-panel-sub">Une question ou suggestion ? Réponse sous 48h.</p>
              </div>
            </div>

            <Transition name="fade-up">
              <div v-if="formSent" class="form-success">
                <div class="form-success-icon"><i class="bi bi-check-circle-fill"></i></div>
                <h4>Message envoyé !</h4>
                <p>Merci, notre équipe vous répondra très vite.</p>
              </div>
            </Transition>

            <form v-if="!formSent" @submit.prevent="submitForm" class="co-form">
              <div class="co-field">
                <label>Prénom &amp; Nom</label>
                <input v-model="formData.name" type="text" placeholder="Marie Dupont" required />
              </div>
              <div class="co-field">
                <label>Adresse email</label>
                <input v-model="formData.email" type="email" placeholder="marie@exemple.com" required />
              </div>
              <div class="co-field">
                <label>Message</label>
                <textarea v-model="formData.message" rows="5" placeholder="Votre message…" required></textarea>
              </div>
              <button type="submit" class="co-btn-send" :disabled="formLoading">
                <i v-if="!formLoading" class="bi bi-send-fill"></i>
                <i v-else class="bi bi-arrow-repeat co-spin"></i>
                {{ formLoading ? 'Envoi en cours…' : 'Envoyer le message' }}
              </button>
            </form>
          </div>

          <!-- ── PANNEAU 2 : Assistant IA ── -->
          <div class="co-panel co-panel--ai">
            <div class="co-panel-head">
              <div class="co-panel-icon co-panel-icon--ai">
                <i class="bi bi-stars"></i>
              </div>
              <div>
                <h2 class="co-panel-title">Assistant Koraly</h2>
                <p class="co-panel-sub">Posez vos questions, je suis là pour vous aider.</p>
              </div>
            </div>

            <!-- Suggestions rapides -->
            <div class="chat-suggestions">
              <button
                v-for="s in suggestions"
                :key="s"
                class="chat-chip"
                @click="sendMessage(s)"
                :disabled="aiLoading"
              >{{ s }}</button>
            </div>

            <!-- Messages -->
            <div class="chat-messages" ref="chatScroll">
              <div
                v-for="msg in messages"
                :key="msg.id"
                class="chat-row"
                :class="msg.role === 'ai' ? 'chat-row--ai' : 'chat-row--user'"
              >
                <div v-if="msg.role === 'ai'" class="chat-avatar">
                  <i class="bi bi-leaf-fill"></i>
                </div>
                <div class="chat-bubble">{{ msg.text }}</div>
              </div>

              <!-- Typing indicator -->
              <div v-if="aiLoading" class="chat-row chat-row--ai">
                <div class="chat-avatar"><i class="bi bi-leaf-fill"></i></div>
                <div class="chat-bubble chat-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>

              <div ref="chatEnd"></div>
            </div>

            <!-- Input -->
            <div class="chat-input-row">
              <input
                v-model="userInput"
                type="text"
                placeholder="Posez votre question…"
                @keydown.enter.prevent="sendMessage()"
                :disabled="aiLoading"
              />
              <button
                class="chat-send-btn"
                @click="sendMessage()"
                :disabled="!userInput.trim() || aiLoading"
                aria-label="Envoyer"
              >
                <i class="bi bi-send-fill"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>

</template>
