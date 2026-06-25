# Koraly — Design System Master
> Généré par ui-ux-pro-max-skill · Stack: Vue 3 + Bootstrap 5

## Identité
- **Produit** : Association écologique mahoraise (NGO/Sustainability)
- **Style** : Glassmorphism + Beige clair / Noir mat (dual theme)
- **Langue** : Français

## Typographie — Wellness Calm
| Rôle | Police | Poids |
|------|--------|-------|
| Titres | Lora (serif) | 400, 500, 600, 700 |
| Corps | Raleway (sans-serif) | 300, 400, 500, 600, 700 |

**Import** : `https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap`

## Couleurs — Dual Theme

### Thème Beige (défaut)
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--bg` | `#f7eddc` | Fond principal |
| `--bg-2` | `#f0e5cf` | Sections alternées |
| `--beige-300` | `#a07038` | Accent principal |
| `--beige-400` | `#b88040` | Boutons CTA |
| `--text-1` | `#1e0e00` | Texte principal |
| `--text-2` | `rgba(30,14,0,0.60)` | Texte secondaire |

### Thème Sombre
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--bg` | `#080808` | Fond principal |
| `--beige-300` | `#d4b896` | Accent principal |
| `--text-1` | `#f5e6d3` | Texte principal |

## Glassmorphisme
- **Mode clair** : `rgba(255,255,255,0.72)` + `backdrop-filter: blur(22px)`
- **Mode sombre** : `rgba(255,255,255,0.04)` + `backdrop-filter: blur(22px)`
- **Border clair** : `rgba(160,110,50,0.15)`
- **Border sombre** : `rgba(255,255,255,0.08)`

## Z-Index Scale
```
--z-base:   10
--z-card:   20
--z-sticky: 30
--z-nav:    40
--z-modal:  50
```

## Animations (150–300ms recommandés)
- Micro-interactions : 200–250ms ease
- Transitions page : aucune (RouterView direct)
- Scroll reveal : 650ms ease
- Float décoratif : 5–6s ease-in-out

## UX Checklist (ui-ux-pro-max)
- [x] `cursor: pointer` sur toutes les cartes interactives
- [x] `prefers-reduced-motion` respecté
- [x] Focus visible 3px ring (`--beige-400`)
- [x] Touch targets min 44×44px
- [x] Font size min 16px body
- [x] Line-height 1.65 (1.5–1.75 recommandé)
- [x] Smooth scroll activé
- [x] Active state navbar
- [x] Thème persisté en localStorage
- [ ] Alt text sur toutes les images
- [ ] Aria-labels sur boutons icon-only

## Structure Landing (Hero + Features + CTA)
1. Hero — titre + CTA principal
2. Comment ça marche — 3 étapes
3. Stats d'impact
4. CTA secondaire + EcoPoints card
5. Footer

## Anti-patterns à éviter
- ❌ Emoji comme icônes UI → utiliser Bootstrap Icons
- ❌ Animations >500ms pour UI
- ❌ Texte clair sur fond clair sans vérification contraste
- ❌ Hover-only pour interactions principales (mobile)
- ❌ z-index arbitraires (ex: 9999)
