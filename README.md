# Workshop React & Electron

## Présenté par :

- [Loïc Lissens](https://github.com/LoicLissens)
- [Denis Bourgeois](https://github.com/Debourgeo)
- [Térence Hecq](https://github.com/terencehecq)



## Table des matières : 

- [Avant le workshop](#Avant-le-workshop)
- [Introduction](#Introduction)
- [A propos d'Electron](#A-propos-d'Electron)
- [Le workshop](#Le-workshop)


## Avant le workshop

- [Télécharger notre dossier d'assets](ON DOIT FOUTRE LE LIEN ICI) 
- Installer **Node.js** 
- Installer **create-react-app**

        npm install -g create-react-app
        
    or

        sudo npm install -g create-react-app

- Initialiser le projet

        npx create-react-app electron-react
        cd electron-react

- Installer **Electron**, **concurrently** & **wait-on**

        npm install --save-dev electron concurrently wait-on



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

1. [Initialiser le projet](https://github.com/terencehecq/workshop_react_electron/tree/dev/1.Initialisation)
2. [Communication avec la machine](https://github.com/terencehecq/workshop_react_electron/tree/dev/2.Communication)
3. [Le métronome](https://github.com/terencehecq/workshop_react_electron/tree/dev/3.Métronome)
4. [Exporter l'application](https://github.com/terencehecq/workshop_react_electron/tree/dev/4.Exportation)