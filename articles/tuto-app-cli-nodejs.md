---
title: "Tuto - Création d'une application CLI avec NodeJS"
published: true
description: Simple approche des applications cli avec nodejs
tags: node,nodejs,cli,app,yargs
ctime: 2019-07-31
author: Mattèo Gauthier
filename: tuto-app-cli-nodejs.md
---
# Tuto - Création d'une application CLI avec NodeJS

Pendant mon stage à TBWA\Paris j'ai eu du temps pour commencer le développement d'une suite d'application cli (command line app), lors de cette review je vais me concentrer sur la première application de cette suite. J'ai créér une simple application qui affiche les données publiques d'un utilisateur Github. Voyons son fonctionnement :

    						╭──────────────────────╮
    						│                      │
    						│   Github User Info   │
    						│                      │
    						╰──────────────────────╯
    
    ? What's your Github username? » [ur username]

    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄   <---- Profile Picture
    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    				▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    
         Username: tj
             Name: TJ Holowaychuk
       Identifier: 25254
      Repos count: 275
     Social Stats: TJ Holowaychuk follow 46 users and 40506 follow him
         Location: London, UK
          Weather: 16.67°C in London, UK
    
      Direct Link to this github profile https://github.com/tj

**Passons maintenant à la création d'un simple utilitaire qui récupère des emojis de l'api Github**

## 1. Quelles sont les données dont nous avons besoin ?

Pour créer une application il vous faut du contenu, dans l'application que nous allons créer nous aurons besoin de données en provenance du service de gestion de dépôts Github, pour nous faciliter la tâche les applications web comme Github peuvent disposer d'une API ouverte (Interface de Programmation). Nous allons donc nous documenter à propos de celle-ci.

Github dispose de plusieurs types d'API à savoir : une API REST et une API GraphQL; ces apis ont une approche différente de la donnée distante, pour faciliter la tâche nous allons utiliser l'api REST qui sert de standard à la plupart des APIs modernes.

La documentation nous indique la baseUrl [`https://api.github.com`](https://api.github.com/) c'est par cette url que toutes les requests vers l'api seront envoyées. L'application qui va répondre à nos requêtes a été développée selon des normes d'accessibilité, il vous sera donc plus simple de tester des endpoints (les endpoints sont un ou plusieurs objets d'une collection de données), lorsque votre requête sera erroné l'api répondra une erreur avec un code de statuts, c'est le protocole HTTP qui permet les réponses avec statuts. Les données dont nous avons besoin sont donc facilement accessibles (nous verrons plus tard les cas d'authentification).

## 2. Créations de l'application

L'utilisateur de l'application doit pouvoir donner un ou plusieurs mots clés pour permettre à l'application de rechercher l'emoji en question.

Pour débuter une application NodeJS, nous avons besoin du gestionnaire de package npm, npm va rendre utilisable notre application. Pour utiliser npm vous aurez besoin de NodeJS 🤪, si npm n'est pas installé vous pouvez [mettre à jour](http://nodejs.org/downloads) NodeJS ou l'installer avec apt si vous êtes sur linux `sudo apt install npm`

Maintenant que NodeJS et NPM sont bien installés nous allons créer un package avec la commande :

    npm init
    
    package name: my-app
    version: (1.0.0)
    description:
    entry point: (cli.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)

A l'aide de la lib yargs nous allons récupérer les arguments émis par l'utilisateur. Pour l'installer il vous suffit de taper dans votre terminal :

    npm i yargs

Maintenant éditons le cœur de notre application, créez le fichier **cli.js**. Nous allons intégrer **yargs** que nous venons d'installer.

    const argv = require("yargs")

**Yargs** permet de définir des options à l'application, son utilisation est très simple, il suffit d'ajouter méthode à la fonction require ⤵️

    const argv = require("yargs")
        .usage("Usage: $0 -e [eg. alien]")  // Ici nous définissons l'usage de la commande pour l'utilisateur
        .alias("e", "emoji") // Ici nous mettons en relation deux options qui auront le même effet
        .describe("e", "Get an emoji") // Ici nous décrivons l'option "e" pour l'utilisateur
        .help("h") // Help est une méthode native à la librarie, cela affiche une explication de l'utilisation de l'app
        .alias("h", "help") // Encore un alias
        .epilog("Mattèo Gauthier - semoule.fr 2019").argv // Puis un texte à afficher en fin d'exécution de la commande help
    																											// On remarque aussi la méthode .argv qui termine

Nous pouvons dès à présent tester le fonctionnement en ajoutant un console.log

    ...
    console.log(argv.e)

Normalement si tout fonctionne à l’exécution la sortie devrait ressembler à ça :

    $ node cli.js -e hey
    hey
    
    $ node cli.js
    undefined

---

Maintenant que **yargs** est fonctionnelle passons à la récupération des données de l'api Github, nous allons effectuer une requête HTTP, pour cela nous allons utilisé la librairie **axios** (il existe de nombreuses librairies http nodejs mais axios reste la plus connues, got est aussi une très bonne librairie)

    npm i axios

Maintenant que nous avons les librairies requises ⤵️

    // Définition des modules requis
    const argv = require("yargs")
        .usage("Usage: $0 -e [eg. alien]")
        .alias("e", "emoji")
        .describe("e", "Get an emoji")
        .help("h")
        .alias("h", "help")
        .epilog("Mattèo Gauthier - semoule.fr 2019").argv
    const axios = require("axios")
    
    const choice = argv.e // Définition de la variable qui intégre le choix de l'use
    console.log("You chose " + choice + " emoji") // Message de rappel du choix (debug)
    
    axios.get(`https://api.github.com/emojis`) // Requête GET à l'aide de la fonction axios.get()
      .then((response) => { // Lorsque la promise est résolu (réponse de l'api)
        let res = response.data // Assignation de la variable
        console.log(res[choice]); // Affichage de l'url de l'emoji demandé
      })

Voilà le fonctionnement de notre mini application, vous pouvez bien évidemment l'améliorer pour qu'elle puisse par exemple enregistrer dans l'image dans un dossier ou que l'emoji en question soit copié dans le presse papier.

Application en fonctionnement ⤵️

    $ node cli.js -e smile
    You chose smile emoji
    https://github.githubassets.com/images/icons/emoji/unicode/1f604.png?v8

C'est bien beau tout cela mais notre application ne dispose pas de commande à portée générale, il serait plus pratique d'utiliser une commande telle que :

    touch index.html // Commande Unix qui créer un ou plusieurs fichier

Pour lier notre application à un alias utilisable globalement nous avons d'abord besoin de configurer le fichier `package.json` ⤵️

    {
      "name": "emoji-app",
      "version": "1.0.0",
      "description": "Hello WORLD",
      "main": "cli.js", // Ici le main doit correspondre avec le bin ⤵️
      "bin": {
        "emoji-app": "cli.js" // Ici on défini l'exécutable
      },
      "scripts": {
        "start": "node cli.js"
      },
      "engines": {
        "node": ">=8" // Ici on s'assure que l'utilisateur à une version suffisante (facultatif)
      },
      "files": [
        "cli.js" // Ici on ajoute les fichiers requis à l'exécution
      ],
      "keywords": [],
      "author": "Mattèo Gauthier",
      "license": "MIT",
      "dependencies": {
        "axios": "^0.19.0",
        "yargs": "^13.3.0"
      }
    }

Puis le fichier `cli.js`

    #!/usr/bin/env node // On ajoute un shebang pour que le système exécute avec node

**Maintenant votre application est disponible dans votre terminal avec la commande `emoji-app` !**

> Merci d'avoir lu ce bref tutoriel n'hésitez pas à partager vos programmes et à me donner votre avis sur ce post
> 
