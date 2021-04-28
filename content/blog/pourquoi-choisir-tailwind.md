---
title: "Pourquoi TailwindCSS est un le meilleur moyen de styliser le HTML ?"
published: true
description: Le framework CSS Tailwind explose en ce moment en quoi peut-il vous aidez ?
tags: tailwindcss, tailwind, css, utility-first, github, trending
ctime: 2021-03-16
author: Mattèo Gauthier
landingImg: "https://cdn.jsdelivr.net/gh/MatteoGauthier/StaticHost@master/assets/screen-to-gif.jpg"
---

# Pourqudoi TailwindCSS est un le meilleur moyen de styliser le HTML ?

TailwindCSS est un framework CSS orienté utility-first créer par Adam Watham un designer / développeur en 2017. Ce framework n'utilise pas la sémantique classique imposé par la documentation officielle w3c, c'est en 2019 que Tailwind a commencé révolutionné l'intégration web, en accélérant ce processus.

## Quels sont les avantages de TailwindCSS :

### 1. Un gain de temps grâce aux class génériques

Lorsque vous intégrez une page web classique vous écrivez votre HTML et votre CSS, peu importe l'outil que vous utilisez il y a toujours une étape d'écriture de la sémantique. Depuis que j'utilise TailwindCSS je ne quitte pas la syntaxe HTML lors de la création d'un page web. Tout simplement, TailwindCSS apporte au développeur des classes css générique utilisable directement dans la propriété `class` d'un élément HTML.

Voici un composant rendu en html :
![](https://i.imgur.com/8VtGKWS.png)

Et ensuite voici le html & css écrit pour ce composant.
![](https://i.imgur.com/lAXVH78.png)

Mais avec Tailwind le code est beaucoup plus court :D
![](https://i.imgur.com/2kt3ItM.png)

Le système de classes tailwindcss sont un avantage sur plusieurs points :
- Pas besoins d'inventer des noms de class bancales
- Les changements du style ce sont directement sur le composant ce qui évite les conflits html & css
- Tailwind permet d'intégrer un site complétement sans toucher au css

### 2. Des performances optimales

Le framework a été créé dans l'objectif d'être intégrer avec un compiler, cela pourrait repousser certain utilisateur, c'est pourquoi il existe une version cdn.
PostCSS permet d'optimiser le bundle final, notamment l'utilisation de purgecss native au framework à configurer dans le fichier `tailwind.config.js`, c'est pourquoi la pluspart des projets tailwind délivre en moyenne 10kb de CSS. En addition avec la compression du site statique en gzip ou brotli vous pouvez être assuré que votre navigateur réalisera le rendu du css en un temps record.

### 3. Le supports de méthodes avancés

Tailwind a été créé pour supporter la plupart des méthodes css comme les pseudos elements, les media queries, etc…

Par exemple vous souhaitez utilisez le dark mode sur votre production, voici un exemple de son utilisation :

```html
<h1 class="text-white border dark:text-black dark:border-gray-300">
  Hello Tailwind
</h1>
```

## Utiliser Tailwind sur un projet :

Tailwind fonctionne avec la plupart des framework web les plus populaire actuellement. Intégrer à un projet tailwindcss, reviens à utiliser un plugin postcss.

|         |                  |         |
| ------- | ---------------- | ------- |
| Next.js | Vue              | Laravel |
| Nuxt.js | Create React App | Gatsby  |

### Installer TailwindCSS avec Vue.js

> Tailwind CSS requiert Node.js 12.13.0 ou une version supérieur.

#### Installer les packages

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

#### Générer les fichiers de configuration

Ici vous allez générer le fichier `tailwind.config.js` utile à la configuration des paramètres de Tailwind. La commande que vous allez exécuter va aussi créer un fichier `postcss.config.js` qui sera utile au fonctionnement de TailwindCSS (cela ajoute aussi un l'utilitaire `autoprefixer` qui permet de rendre le css compatible avec des navigateurs anciens).

```
npx tailwindcss init -p
```

Si vous souhaitez réduire la taille du bundle final, TailwindCSS intègre une option `purge` dans son fichier de configuration `tailwind.config.js`. Pour l'activer il suffit d'ajouter la propriété :

```js
// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]

  // Config
};
```

### Ajouter Tailwind au CSS

Dans un nouveau fichier que vous allez créer `index.css` vous allez placer les directives utile à l'importation de Tailwind.

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensuite, il faut importer le fichier css que vous venez de créer. 

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css' // Le nouveau fichier

createApp(App).mount('#app')
```

**Et voilà, Tailwind est ajouté à votre projet 🎉**


## Conclusion

Vous allez découvrir durant votre utilisation le gain de temps conséquent que Tailwind va apporter. 