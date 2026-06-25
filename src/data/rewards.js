// Recompenses echangeables contre des Lily-points
export const rewards = [
  {
    id: 1,
    category: 'Transport',
    icon: 'bi-bus-front',
    items: [
      {
        name: 'Reduction barge 10 %',
        points: 50,
        description: 'Valable sur la barge inter-iles (Mamoudzou - Petite-Terre) pendant 1 mois.',
      },
      {
        name: 'Pass bus hebdomadaire',
        points: 80,
        description: 'Transport en bus illimite sur les lignes partenaires pendant 7 jours.',
      },
      {
        name: 'Reduction taxi partenaire 15 %',
        points: 30,
        description: '-15 % sur votre prochain trajet avec un taxi partenaire de l\'association.',
      },
    ],
  },
  {
    id: 2,
    category: 'Telephonie',
    icon: 'bi-phone',
    items: [
      {
        name: 'Recharge telephonique 5 EUR',
        points: 40,
        description: 'Credit telephonique valable sur tous les reseaux mobiles a Mayotte.',
      },
      {
        name: 'Carte SIM prepayee',
        points: 120,
        description: 'Carte SIM avec 1 Go de donnees et 30 min d\'appels offerts.',
      },
      {
        name: 'Recharge Internet 2 Go',
        points: 60,
        description: 'Data supplementaire a ajouter a votre forfait existant.',
      },
    ],
  },
  {
    id: 3,
    category: 'Commerces partenaires',
    icon: 'bi-shop',
    items: [
      {
        name: 'Bon d\'achat supermarche 5 EUR',
        points: 50,
        description: 'Valable dans les grandes surfaces partenaires de Mamoudzou et Bandraboua.',
      },
      {
        name: 'Repas offert',
        points: 100,
        description: 'Un repas complet offert dans un restaurant partenaire de votre commune.',
      },
      {
        name: 'Reduction pharmacie 10 %',
        points: 35,
        description: 'Sur vos achats de parapharmacie et produits sans ordonnance.',
      },
      {
        name: 'Bon d\'achat materiel scolaire 10 EUR',
        points: 70,
        description: 'Valable dans les librairies et commerces scolaires partenaires.',
      },
    ],
  },
  {
    id: 4,
    category: 'Communaute',
    icon: 'bi-people',
    items: [
      {
        name: 'Badge numerique Gardien du Lagon',
        points: 0,
        description: 'Debloque automatiquement des le Niveau 2. Partageable sur les reseaux sociaux.',
      },
      {
        name: 'Invitation evenement special',
        points: 0,
        description: 'Acces aux journees communautaires organisees par Koraly (musique, jeux, repas partage).',
      },
      {
        name: 'Attestation officielle de benevole',
        points: 200,
        description: 'Certificat signe par Koraly reconnaissant ton engagement pour l\'environnement de Mayotte.',
      },
    ],
  },
]