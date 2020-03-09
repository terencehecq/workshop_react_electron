# Workshop React & Electron

## Présenté par :

-   [Loïc Lissens](https://github.com/LoicLissens)
-   [Denis Bourgeois](https://github.com/Debourgeo)
-   [Térence Hecq](https://github.com/terencehecq)

## Avant le workshop

-   Installer **Node.js**
-   Installer **create-react-app**

        npm install -g create-react-app

    or

        sudo npm install -g create-react-app

-   Forker [ce repo](Lien ici)

## Remplacer l'entièreté du package.json par ceci 


```json
{
    "name": "workshop_react_electron",
    "version": "0.1.0",
    "description": "Electron React Workshop",
    "build": {
        "appId": "com.electron.workshop",
        "productName": "myApp",
        "copyright": "2020 Workshop des barres",
        "win": {
            "target": "NSIS",
            "icon": "build/icon.png"
        },
        "mac": {
            "target": "dmg",
            "icon": "build/icon.icns"
        },
        "linux": {
            "icon": "build/icon.png"
        }
    },
    "author": {
        "name": "joyeux lurons"
    },
    "homepage": "./",
    "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.4.1",
        "@testing-library/user-event": "^7.2.1",
        "cross-env": "^7.0.1",
        "electron-is-dev": "^1.1.0",
        "electron-reload": "^1.5.0",
        "react": "^16.13.0",
        "react-dom": "^16.13.0",
        "react-router-dom": "^5.1.2",
        "react-scripts": "3.4.0"
    },
    "scripts": {
        "react-start": "react-scripts start",
        "react-build": "react-scripts build",
        "react-test": "react-scripts test",
        "react-eject": "react-scripts eject",
        "electron": "electron .",
        "electron-build": "electron-builder -p never",
        "electron-dev": "ELECTRON_START_URL=http://localhost:3000 electron .",
        "dev": "",
        "build": "npm run react-build && npm run electron-build"
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": {
        "production": [">0.2%", "not dead", "not op_mini all"],
        "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
    },
    "devDependencies": {
        "concurrently": "^5.1.0",
        "electron": "^8.0.3",
        "electron-builder": "^22.4.0",
        "wait-on": "^4.0.1"
    },
    "main": "public/electron.js"
}
```

-   Le package est identique pour tout le monde, à une différence près, le **script: dev**

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
