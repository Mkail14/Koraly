import { onMounted, onUnmounted } from 'vue'

/**
 * Déclenche l'animation des éléments `.reveal` quand ils entrent dans le viewport.
 * Ajoute la classe `revealed` via un IntersectionObserver.
 */
export function useReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
