# Site Collaboratif React 🚀

Ce projet est un site web collaboratif développé en React avec 4 sections principales utilisant l'API DummyJSON.

## 🌟 Fonctionnalités

### Pages Développées
- **Accueil** : Page d'accueil attrayante avec présentation du site
- **Produits** : Catalogue de produits avec données récupérées depuis l'API DummyJSON
- **Citations** : Section pour les citations inspirantes (en développement par Ndiawo)
- **Articles** : Section pour les articles intéressants (en développement par Alpha)

### Caractéristiques Techniques
- ✅ Navigation par onglets
- ✅ Éléments cliquables avec modales
- ✅ Récupération de données depuis l'API DummyJSON
- ✅ Design responsive
- ✅ Interface moderne et attrayante

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/Tbyb/projet-collaboratif-react.git

# Aller dans le dossier du projet
cd projet-collaboratif-react

# Installer les dépendances
npm install
```

### Démarrage en mode développement
```bash
npm start
```

### Résolution du problème PowerShell (Windows)
Si vous rencontrez une erreur de politique d'exécution sur Windows :

```powershell
# Option 1 : Modifier temporairement la politique
powershell -ExecutionPolicy Bypass -Command "npm start"

# Option 2 : Modifier la politique de façon permanente (en tant qu'administrateur)
Set-ExecutionPolicy RemoteSigned
```

## 📱 Structure du Projet

```
src/
├── components/
│   ├── Navigation.js          # Composant de navigation
│   ├── Accueil.js            # Page d'accueil
│   ├── Produits.js           # Page des produits
│   ├── Citations.js          # Page des citations
│   └── Articles.js           # Page des articles
├── styles/
│   ├── Navigation.css         # Styles de navigation
│   ├── Accueil.css           # Styles de la page d'accueil
│   ├── Produits.css          # Styles de la page produits
│   ├── Citations.css         # Styles des citations
│   ├── Articles.css          # Styles des articles
│   ├── App.css               # Styles globaux
│   └── index.css             # Styles de base
├── App.js                    # Composant principal
└── index.js                  # Point d'entrée
```

## 🎯 Fonctionnalités par Page

### Page Accueil
- Section hero avec call-to-action
- Présentation des différentes sections
- Statistiques du site
- Design avec dégradés modernes

### Page Produits
- Grille de produits récupérés depuis https://dummyjson.com/products
- Cartes produits avec image, titre, description, prix, rating
- Modal détaillée au clic sur un produit
- Badges de réduction
- Informations de stock
- Format de prix en euros

### Page Citations (à développer par Ndiawo)
- Structure de base créée
- Style avec dégradé rose
- Prête pour l'intégration de l'API DummyJSON quotes

### Page Articles (à développer par Alpha)
- Structure de base créée
- Style avec dégradé bleu
- Prête pour l'intégration de l'API DummyJSON posts

## 🌐 API Utilisée

Le projet utilise l'API DummyJSON pour récupérer les données :
- **Produits** : `https://dummyjson.com/products`
- **Citations** : `https://dummyjson.com/quotes` (à implémenter)
- **Articles** : `https://dummyjson.com/posts` (à implémenter)

## 👥 Équipe de Développement

- **Accueil + Produits** : Développé ✅
- **Citations** : Ndiawo (en cours de développement)
- **Articles** : Alpha (en cours de développement)

## 🎨 Design et UX

- Interface moderne avec dégradés colorés
- Navigation intuitive par onglets
- Cartes avec effets hover
- Modales pour les détails
- Design 100% responsive
- Animations fluides

## 📦 Scripts Disponibles

- `npm start` : Démarre le serveur de développement
- `npm build` : Crée une version optimisée pour la production
- `npm test` : Lance les tests
- `npm eject` : Éjecte la configuration (non recommandé)

## 🚧 Prochaines Étapes

1. **Ndiawo** : Implémenter la page Citations avec l'API quotes
2. **Alpha** : Implémenter la page Articles avec l'API posts
3. Ajouter des animations plus avancées
4. Optimiser les performances
5. Tests unitaires

## 📝 Notes pour les Collaborateurs

- Chaque développeur travaille dans sa branche dédiée
- Utiliser les endpoints DummyJSON appropriés
- Maintenir la cohérence du design établi
- Rendre les éléments cliquables comme demandé

**Deadline : Vendredi**

---

Développé avec ❤️ en React