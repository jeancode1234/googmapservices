# GOOG-MAPS – Services Digitales

Site web professionnel pour GOOG-MAPS, construit avec **Vue 3**, **Vite** et **Tailwind CSS**.

## 🛠 Stack technique

| Outil | Version |
|-------|---------|
| Vue 3 | ^3.4 |
| Vite | ^5.2 |
| Tailwind CSS | ^3.4 |
| Vue Router | ^4.3 |
| Pinia | ^2.1 |

---

## 🚀 Installation & démarrage

### Prérequis
- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Ouvre http://localhost:5173 dans ton navigateur.

### 3. Build production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### 4. Prévisualiser le build

```bash
npm run preview
```

---

## 📁 Structure du projet

```
goog-maps-services/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css          # Tailwind + styles globaux
│   ├── components/
│   │   ├── AppNavbar.vue     # Navbar fixe avec scroll effect
│   │   ├── AppFooter.vue     # Footer
│   │   ├── ServiceCard.vue   # Carte service avec paiement
│   │   ├── TransferModal.vue # Modal virement bancaire
│   │   └── ContactForm.vue   # Formulaire de contact
│   ├── router/
│   │   └── index.js          # Vue Router (/, /services)
│   ├── stores/
│   │   └── services.js       # Pinia store – données services
│   ├── views/
│   │   ├── HomeView.vue      # Page d'accueil
│   │   └── ServicesView.vue  # Page services & tarifs
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 💳 Paiement

Chaque carte service propose deux modes de paiement :

1. **Stripe** → lien direct vers le paiement en ligne
2. **Virement bancaire** → modale avec IBAN, BIC et référence unique à copier

---

## 🎨 Design

- Palette : Rouge `#e63946` / Noir `#0d0d0d` / Blanc
- Typographies : **Montserrat** (titres) + **Lato** (texte)
- Animations : fade-up au scroll, slideshow hero, bounce badge
