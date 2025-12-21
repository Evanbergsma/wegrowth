# 🎨 WeGrow Design System

## Vue d'ensemble

Le Design System de WeGrow est un système de charte graphique centralisé qui garantit une cohérence visuelle sur l'ensemble du site. Ce document explique comment utiliser et maintenir cette charte graphique.

## 📁 Fichiers

- **design-system.css** : Fichier contenant toutes les variables CSS et classes utilitaires
- **style.css** : Fichier CSS principal qui utilise les variables du design system

## 🎨 Palette de couleurs

### Couleurs principales

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-primary-beige` | #E8DFD0 | Fond principal du site |
| `--color-primary-blue` | #1E4B7A | Boutons primaires |
| `--color-primary-blue-hover` | #2A5A8F | Hover des boutons bleus |

### Couleurs neutres

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-neutral-black` | #111111 | Texte principal, titres |
| `--color-neutral-dark` | #222222 | Texte secondaire |
| `--color-neutral-charcoal` | #333333 | Hover des éléments noirs |
| `--color-neutral-gray` | #555555 | Texte descriptif |
| `--color-neutral-gray-light` | #777777 | Texte subtil, notes |
| `--color-neutral-white` | #ffffff | Fond des cartes, header, footer |

### Couleurs de bordures

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-border-light` | #e5e5e5 | Bordures générales |
| `--color-border-beige` | #E0D5C8 | Bordures sur fond beige |

### Couleurs de fond

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-bg-light` | #f3f4f6 | Fond des inputs, zones secondaires |
| `--color-bg-gray` | #f9fafb | Hover des zones claires |
| `--color-bg-hover` | #e5e7eb | Hover des boutons secondaires |

### Couleur accent

| Variable | Couleur | Usage |
|----------|---------|-------|
| `--color-accent-blue` | #0071e3 | Points, accents visuels |

## ✍️ Typographie

### Familles de polices

- **Display** (Titres) : `--font-family-display` → 'Times New Roman', Times, serif
- **Body** (Corps de texte) : `--font-family-body` → system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Tailles de police

| Variable | Taille | Usage |
|----------|--------|-------|
| `--font-size-xs` | 14px | Petites notes, footer |
| `--font-size-sm` | 15px | Texte de formulaire |
| `--font-size-base` | 16px | Texte standard |
| `--font-size-md` | 17px | Navigation |
| `--font-size-lg` | 18px | Texte d'introduction |
| `--font-size-xl` | 20px | Sous-titres, titres de cartes |
| `--font-size-2xl` | 32px | Titres de section |
| `--font-size-3xl` | 42px | Titre principal (hero) |

### Poids de police

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--font-weight-regular` | 400 | Texte standard |
| `--font-weight-medium` | 500 | Boutons, labels |
| `--font-weight-semibold` | 600 | Sous-titres |
| `--font-weight-bold` | 700 | Titres principaux |

## 📏 Espacements

| Variable | Taille | Usage typique |
|----------|--------|---------------|
| `--spacing-xs` | 8px | Padding minimal |
| `--spacing-sm` | 12px | Padding de boutons |
| `--spacing-md` | 16px | Espacement standard |
| `--spacing-lg` | 24px | Gap entre éléments |
| `--spacing-xl` | 32px | Margin de sections |
| `--spacing-2xl` | 48px | Padding de sections |
| `--spacing-3xl` | 64px | Padding large |
| `--spacing-4xl` | 80px | Hero padding |

## 🔲 Bordures

### Rayons de bordure

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--border-radius-sm` | 6px | Boutons, inputs |
| `--border-radius-md` | 8px | Cartes |
| `--border-radius-lg` | 12px | Cartes d'offres |
| `--border-radius-full` | 999px | Boutons circulaires |

### Épaisseurs

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--border-width` | 1px | Bordure standard |
| `--border-width-thick` | 2px | Bordure accentuée |

## 🌑 Ombres

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--shadow-sm` | 0 2px 8px rgba(0,0,0,0.08) | Cartes au repos |
| `--shadow-md` | 0 4px 12px rgba(0,0,0,0.15) | Hover de boutons |
| `--shadow-lg` | 0 8px 20px rgba(0,0,0,0.12) | Hover de cartes |
| `--shadow-xl` | 0 8px 24px rgba(0,0,0,0.08) | Cartes d'offres hover |

## ⚡ Transitions

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--transition-fast` | 0.2s ease | Hover rapide |
| `--transition-base` | 0.3s ease | Transition standard |
| `--transition-slow` | 0.4s ease | Animations étendues |
| `--transition-slower` | 0.5s ease | Animations complexes |

## 📐 Layout

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--container-max-width` | 1200px | Largeur max des grilles |
| `--content-max-width` | 900px | Largeur max du hero |
| `--form-max-width` | 600px | Largeur max des formulaires |
| `--quiz-max-width` | 700px | Largeur max du quiz |

## 🚀 Comment utiliser

### 1. Dans vos fichiers HTML

Ajoutez cette ligne **AVANT** `style.css` dans le `<head>` de tous vos fichiers HTML :

```html
<link rel="stylesheet" href="design-system.css">
<link rel="stylesheet" href="style.css">
```

### 2. Dans votre CSS

Utilisez les variables CSS avec la syntaxe `var(--nom-de-variable)` :

```css
/* ❌ AVANT (valeurs en dur) */
background-color: #E8DFD0;
color: #111111;
padding: 16px 24px;
border-radius: 6px;

/* ✅ APRÈS (variables du design system) */
background-color: var(--color-primary-beige);
color: var(--color-neutral-black);
padding: var(--spacing-md) var(--spacing-lg);
border-radius: var(--border-radius-sm);
```

### 3. Exemples de remplacement

| Valeur en dur | Variable à utiliser |
|---------------|---------------------|
| `#E8DFD0` | `var(--color-primary-beige)` |
| `#111111` | `var(--color-neutral-black)` |
| `#555555` | `var(--color-neutral-gray)` |
| `#ffffff` | `var(--color-neutral-white)` |
| `16px` (padding) | `var(--spacing-md)` |
| `24px` (gap) | `var(--spacing-lg)` |
| `6px` (border-radius) | `var(--border-radius-sm)` |
| `0.3s ease` | `var(--transition-base)` |

## 🎯 Classes utilitaires

Le design system inclut des classes CSS prêtes à l'emploi :

### Couleurs de texte

```html
<p class="text-primary">Texte principal noir</p>
<p class="text-secondary">Texte secondaire gris</p>
<p class="text-muted">Texte subtil gris clair</p>
<p class="text-white">Texte blanc</p>
```

### Couleurs de fond

```html
<div class="bg-beige">Fond beige</div>
<div class="bg-white">Fond blanc</div>
<div class="bg-light">Fond gris clair</div>
```

### Typographie

```html
<h1 class="font-display">Titre avec Times New Roman</h1>
<p class="font-body">Texte avec police système</p>
```

### Espacements

```html
<div class="spacing-xs">Padding 8px</div>
<div class="spacing-sm">Padding 12px</div>
<div class="spacing-md">Padding 16px</div>
<div class="spacing-lg">Padding 24px</div>
<div class="spacing-xl">Padding 32px</div>
```

## 🔧 Maintenance

### Pour modifier une couleur

1. Ouvrez `design-system.css`
2. Modifiez la variable dans le bloc `:root`
3. La modification s'applique automatiquement partout où la variable est utilisée

### Pour ajouter une nouvelle variable

1. Ajoutez-la dans `design-system.css` dans la section appropriée
2. Documentez-la dans ce fichier README
3. Utilisez-la dans `style.css` avec `var(--nom-de-variable)`

## ✅ Checklist de migration

Pour migrer un fichier CSS existant vers le design system :

- [ ] Remplacer toutes les couleurs hexadécimales par des variables
- [ ] Remplacer les tailles de police en dur par des variables
- [ ] Remplacer les espacements en dur par des variables
- [ ] Remplacer les border-radius en dur par des variables
- [ ] Remplacer les transitions en dur par des variables
- [ ] Remplacer les box-shadow en dur par des variables
- [ ] Tester visuellement sur toutes les pages

## 📝 Notes importantes

- **Toujours utiliser les variables** plutôt que des valeurs en dur
- **Ne pas modifier les valeurs** directement dans `style.css`
- **Centraliser les modifications** dans `design-system.css`
- **Documenter les changements** dans ce README
- **Tester sur tous les navigateurs** après modification

## 🎓 Ressources

- [Documentation CSS Variables (MDN)](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)
- [Guide des Design Systems](https://www.designsystems.com/)

---

**Dernière mise à jour** : Décembre 2025  
**Mainteneur** : Équipe WeGrow
