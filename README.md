# 📖 Citations Inspirantes

Application React dédiée à l'affichage et la gestion de citations inspirantes.

## ✨ Fonctionnalités

### 🎯 Principales
- **Récupération de citations** depuis l'API DummyJSON
- **Citation aléatoire** du moment avec possibilité de renouvellement
- **Affichage en grille** avec système de pagination
- **Citations cliquables** avec modal détaillée
- **Copie de citations** dans le presse-papiers
- **Partage de citations** (Web Share API avec fallback)

### 📊 Statistiques
- Nombre total de citations
- Page actuelle et total des pages
- Nombre d'auteurs uniques

### 🎨 Interface
- Design moderne et élégant
- Interface responsive (mobile, tablette, desktop)
- Animations fluides et effets de hover
- Thème coloré avec gradients

## 🛠️ Technologies

- **React** 18.2.0
- **CSS3** avec animations
- **API DummyJSON** pour les données
- **Web Share API** pour le partage

## 🚀 Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm start

# Construire pour la production
npm run build
```

L'application sera accessible sur `http://localhost:3000`

## 📁 Structure

```
src/
├── components/
│   ├── Citations.js      # Composant principal
│   └── Citations.css     # Styles dédiés
├── App.js               # Point d'entrée
└── index.js            # Rendu React
```

## 🎯 API Utilisée

- **Base URL**: https://dummyjson.com
- **Endpoints**:
  - `/quotes?limit=0` - Toutes les citations
  - `/quotes/random` - Citation aléatoire

## 📱 Responsive Design

L'application s'adapte automatiquement à tous les écrans :
- **Desktop**: Grille multi-colonnes
- **Tablette**: Grille adaptée
- **Mobile**: Colonne unique optimisée

## ✨ Fonctionnalités avancées

- **Gestion d'état** complète (loading, error, success)
- **Pagination intelligente** avec ellipses
- **Smooth scrolling** lors du changement de page
- **Notifications** de feedback utilisateur
- **Modal overlay** avec animations
- **Copie automatique** avec confirmation visuelle

---

*Développé dans le cadre d'un projet collaboratif React*