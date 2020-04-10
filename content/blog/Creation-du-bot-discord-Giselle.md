---
title: "Création du bot discord Giselle"
published: true
description: Petite présentation d'un bot discord simple, créer avec Discord.js
tags: discord,bot,discord.js,api,discord-bot
ctime: 2019-06-09
landingImg: 'https://cdn.jsdelivr.net/gh/mattixnow/mattaio-website@master/assets/images/blog/Creation-du-bot-discord-Giselle.jpg'
author: Mattèo Gauthier
---
# Création du bot discord Giselle

Il y a quelques jours j'ai décidé de créer un robot qui répond à des messages spécifiques sur le service de messagerie discord. Ce petit projet me permet d’expérimenter  des méthodes asynchrones avec Node.js, j'ai utilisé la librairie Discord.js pour permettre à Giselle (le nom du robot) d'interagir avec l'API (Interface de programmation) de Discord. En me documentant quelque peu sur les méthodes (endpoint) de l'API Discord j'ai découvert que son utilisation était assez simple et accessible. L'API permet :

- D'envoyer des messages vers un channels, une ou plusieurs personnes (texte, images, [embeds](https://discordapp.com/developers/docs/resources/channel#embed-object))
- De diffuser un flux audio dans un canal audio
- Ajouter des messages de statuts sur le profil du bot (Rich Presence)
- Gérer l'administration du serveur
- [Et plus encore !](https://discordapp.com/developers/docs/)

### Pour le moment Giselle effectue ces actions :

- Répond à un message spécifique (ex. $news qui renvoi les dernières news)
- Ajoute du contenu à son status discord (Rich Presence)

<video controls width="800">
    <source src="https://semoule.fr/Giselle/res/DiscordDemo.mp4"
            type="video/mp4">
</video>

## Open-Source

Le code du bot est libre, vous pouvez donc accéder aux sources du projets. La contribution est bien sur possible, il vous suffit de créer une issue ou une pull-request.

---

Petite page de présentation disponible ici ➡ [semoule.fr/Giselle](https://semoule.fr/Giselle)
