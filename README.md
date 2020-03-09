# Workshop React & Electron

## Présenté par :

-   [Loïc Lissens](https://github.com/LoicLissens)
-   [Denis Bourgeois](https://github.com/Debourgeo)
-   [Térence Hecq](https://github.com/terencehecq)

## Avant le workshop

-   Installer **Node.js**

-   Forker [ce repo](https://github.com/Debourgeo/workshop-electron-init) et le cloner sur votre machine

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

Durant ce workshop, nous réaliserons une application desktop grâce à **Electron.js** et **React.js** pour le front-end. Il sera divisé en 4 parties :

1. Initialisation et structure du projet
2. Démonstration de la communication d'Electron avec la machine
3. Réalisation d'un métronome en React
4. Exportation de l'application 


## A propos d'Electron

- Dans les grandes lignes, Electron est un framework permettant de créer des applications desktop avec les technologies du web. 
- C'est un projet open-source maintenu par GitHub et une communauté active de contributeurs.
- Il est compatible avec Linux, Windows et Mac.

Pour en savoir plus, rendez-vous sur [leur site internet](https://www.electronjs.org/) qui est trés complet.

## Le workshop

1. [Communication avec la machine](https://github.com/terencehecq/workshop_react_electron/tree/master/2.Communication)
2. [Le métronome](https://github.com/terencehecq/workshop_react_electron/tree/master/3.Métronome)
3. [Exporter l'application](https://github.com/terencehecq/workshop_react_electron/tree/master/4.Exportation)
