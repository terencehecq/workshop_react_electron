# Workshop React & Electron

## Présenté par :

-   [Loïc Lissens](https://github.com/LoicLissens)
-   [Denis Bourgeois](https://github.com/Debourgeo)
-   [Térence Hecq](https://github.com/terencehecq)

## Avant le workshop

-   Installer **Node.js**

-   Forker [ce repo](Lien ici) et le cloner sur votre machine

-   Dans le dossier du repo : ```npm install```

-   Dans le package.json, il faut modifier le **script: dev**

-   Pour Mac/ Linux

```json
    "scripts": {
            "dev": "concurrently \"BROWSER=none npm run react-start\" \" wait-on http://localhost:3000 && npm run electron\""
        }
```

-   Pour windows (une erreur sera générée avec la méthode set, elle n'a cependant aucune influence sur quoique ce soit.)

```json
    "scripts": {
            "dev": "concurrently \"set BROWSER=none && npm run react-start\" \" wait-on http://localhost:3000 && npm run electron\""
        }
```

## Introduction

Ce qu'il va se passer pendant le workshop bla bla bla

## A propos d'Electron

C koi hélektron?

## Le workshop

[Suivre le fil conducteur](https://github.com/terencehecq/workshop_react_electron/tree/master/1.Initialisation)

### Les étapes :

1. [Initialiser le projet](https://github.com/terencehecq/workshop_react_electron/tree/master/1.Initialisation)
2. [Communication avec la machine](https://github.com/terencehecq/workshop_react_electron/tree/master/2.Communication)
3. [Le métronome](https://github.com/terencehecq/workshop_react_electron/tree/master/3.Métronome)
4. [Exporter l'application](https://github.com/terencehecq/workshop_react_electron/tree/master/4.Exportation)
