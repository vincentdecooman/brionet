# Brio-Net - Site Web

Site web professionnel pour Brio-Net, entreprise de nettoyage de vitres en hauteur depuis 2003.

## 🚀 Caractéristiques

- **Angular 21** - Framework moderne avec composants standalone
- **TailwindCSS + DaisyUI** - Design system personnalisé avec thème Brio-Net
- **Bilingue (fr-CA / en)** - ngx-translate pour l'internationalisation
- **SEO optimisé** - Meta tags, JSON-LD, OpenGraph
- **Loi 25 conforme** - Gestion des cookies et consentement
- **Web3Forms** - Formulaire de contact fonctionnel
- **Accessible** - WCAG compliant, navigation clavier, aria-labels

## 🎨 Palette de couleurs

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| Primary Red | `#C1121F` | Logo, boutons, CTAs, icônes |
| Charcoal Black | `#1F1F1F` | Texte principal, titres |
| Steel Gray | `#3A3A3A` | Arrière-plans secondaires, cartes |
| Off-White | `#EDEDED` | Arrière-plans de page/section |

## 📁 Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/           # Navigation avec sélecteur de langue
│   │   ├── hero/             # Section héros
│   │   ├── services/         # Section services
│   │   ├── markets/          # Section commercial/résidentiel
│   │   ├── regions/          # Section régions desservies
│   │   ├── about/            # Section à propos
│   │   ├── testimonials/     # Section témoignages
│   │   ├── faq/              # Section FAQ
│   │   ├── contact/          # Formulaire de contact (Web3Forms)
│   │   ├── footer/           # Pied de page
│   │   └── cookie-banner/    # Bannière de consentement cookies
│   ├── pages/
│   │   ├── home/             # Page d'accueil (SPA)
│   │   └── privacy/          # Page de confidentialité
│   ├── services/
│   │   ├── cookie-consent.service.ts
│   │   └── seo.service.ts
│   ├── app.config.ts         # Configuration Angular + ngx-translate
│   ├── app.routes.ts         # Routes de l'application
│   └── app.ts                # Composant racine
├── index.html                # HTML avec meta tags SEO et JSON-LD
├── styles.scss               # Styles globaux
└── main.ts                   # Point d'entrée
public/
├── i18n/
│   ├── fr-CA.json            # Traductions françaises
│   └── en.json               # Traductions anglaises
└── favicon.ico
```

## 🛠️ Installation

```bash
# Cloner le repo
git clone <repository-url>
cd brionet

# Installer les dépendances
npm install
```

## 💻 Développement

```bash
# Démarrer le serveur de développement
npm start
# ou
ng serve

# L'application sera disponible sur http://localhost:4200
```

## 🏗️ Build de production

```bash
# Build optimisé pour la production
npm run build
# ou
ng build

# Les fichiers seront générés dans dist/brionet/browser/
```

## 👀 Prévisualisation du build

```bash
# Installer un serveur statique si nécessaire
npm install -g serve

# Servir le build de production
serve dist/brionet/browser
```

## 📋 Services offerts

1. **LAVAGE DE VITRE** - Nettoyage professionnel de vitres en hauteur
2. **CONCIERGERIE** - Services de conciergerie pour espaces commerciaux
3. **ENTRETIEN MÉNAGER** - Services d'entretien pour résidences et commerces

## 🌍 Régions desservies

- Saint-Jean-sur-Richelieu
- Montréal
- Rive-Sud

## 🔒 Conformité Loi 25

Le site est conforme à la Loi 25 du Québec sur la protection des renseignements personnels:

- Bannière de consentement aux cookies
- Modal de préférences détaillées
- Cookies nécessaires uniquement par défaut
- Stockage du consentement avec version et timestamp
- Aucun script optionnel chargé sans consentement

## 📝 Formulaire de contact

Le formulaire utilise Web3Forms pour l'envoi des messages:
- Validation côté client avec Angular Reactive Forms
- Protection honeypot contre le spam
- Messages de succès/erreur traduits
- Désactivation du bouton pendant l'envoi

## 🎯 SEO

- Meta tags complets (title, description, keywords)
- OpenGraph pour le partage social
- Twitter Cards
- JSON-LD LocalBusiness schema
- URLs canoniques
- Support multilingue (hreflang)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Navigation mobile avec menu hamburger
- CTA click-to-call sur mobile

## ⚡ Performance

- Lazy loading des composants
- Images optimisées
- Minimal JavaScript bundle
- TailwindCSS purging en production

## 🧪 Tests

```bash
# Lancer les tests
npm test
```

## 📄 Licence

Propriétaire - Brio-Net © 2003-2025
