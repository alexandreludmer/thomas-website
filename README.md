# PERPIGNAN PEINTURE - Site Vitrine Premium

Site web vitrine haut de gamme pour l'entreprise artisanale **PERPIGNAN PEINTURE**, spécialisée dans la peinture décorative, la rénovation de façades et la gestion de sinistres dans les Pyrénées-Orientales.

## Fonctionnalités Clés

- **Design Premium & Trust** : Palette de couleurs Navy Blue & Gold pour une image de marque qualitative.
- **Animations Fluides** : Intégration de `framer-motion` pour des apparitions élégantes (fade-in, slide-up).
- **Slider Avant/Après** : Composant interactif permettant de visualiser la qualité des finitions par rapport à l'état initial (sinistre/chantier).
- **Confiance Assurances** : Section dédiée aux partenaires assureurs pour rassurer les prospects.
- **Bento Grid Services** : Présentation moderne des expertises (Peinture, Façades, Sinistres).
- **Responsive Design** : Optimisé pour mobile, tablette et desktop.

## Technologies

- [Vite](https://vitejs.dev/) - Build tool rapide
- [React](https://reactjs.org/) - Bibliothèque UI
- [Tailwind CSS v3](https://tailwindcss.com/) - Framework CSS utilitaire
- [Framer Motion](https://www.framer.com/motion/) - Bibliothèque d'animations
- [Lucide React](https://lucide.dev/) - Icônes vectorielles

## Installation

1. Cloner le dépôt
2. Installer les dépendances :
   ```bash
   npm install
   ```

## Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173`.

## Build

Pour construire le projet pour la production :

```bash
npm run build
```

## Structure du Projet

- `src/App.jsx` : Composant principal contenant la structure de la landing page.
- `src/components/BeforeAfterSlider.jsx` : Composant de comparaison d'images interactif.
- `tailwind.config.js` : Configuration du thème (couleurs, polices).
