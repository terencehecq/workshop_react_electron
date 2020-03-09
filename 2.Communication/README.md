## Communication avec la machine

### 1. La base

-   Dans le fichier **electron.js**, créer la fonction **sendSpecs**, et l'appeler ensuite lorsque l'application est prête:

```javascript
function sendSpecs() {
    // Send hardware specs

    mainWindow.webContents.on("dom-ready", () => {
        mainWindow.webContents.send("type", os.type());
        mainWindow.webContents.send("arch", os.arch());
        mainWindow.webContents.send("platform", os.platform());
        mainWindow.webContents.send("freemem", os.freemem());
        mainWindow.webContents.send("totalmem", os.totalmem());
        mainWindow.webContents.send("hostname", os.hostname());
    });
}

app.on("ready", () => {
    sendSpecs();
});
```

-   Dans le fichier **preload.js**, ajouter la ligne qui permettra d'utiliser la méthode IPCrender dans le **App.js**

```javascript
window.ipcRenderer = require("electron").ipcRenderer;
```

-   Dans le dossier **src** créer un document **systemspecs.js** et on y importe les fichiers qui nous seront utiles :

```javascript
import React, { useEffect, useState } from "react";

const SystemSpecs = () => {

    return(

    )
}
export default SystemSpecs
```

-   Dans le fichier **App.js**, importer le nouveau composant :

```javascript
import SystemSpecs from "./systemspecs";
```

-   Et l'afficher :

```javascript
return (
    <div>
        <SystemSpecs />
    </div>
);
```

#### 1.1 L'interface utilisateur

-   Dans le composant SystemSpecs de **systemspecs.js**, on met en place la partie 'HTML' :

```javascript
...
return (
        <div>
            <ul>
                <li>OS: </li>
                <li>Architecture: </li>
                <li>Platforme: </li>
                <li>Nom du PC: </li>
                <li>Mémoire totale: </li>
                <li>Mémoire restante: </li>
            </ul>
            <div>
                <button>refresh</button>
            </div>
        </div>
    );
```

### 1.2 - Etat & évènements

-   Afin de rendre notre interface fonctionnelle, on définit l'**état** et les **fonctions** qu'on relie aux éléments correspondants

```javascript
const channels = ["type", "arch", "platform", "freemem", "totalmem", "hostname"];

const convertToMb = number => {
    if (Number.isInteger(number)) {
        const mb = number / 1048576; // one megabyte = 1.048.576 bytes
        const rounded = mb.toFixed(1);
        return `${rounded} mb`;
    } else {
        return "";
    }
};

const Metronome = () => {
    const [specs, setSpecs] = useState({});
    const [, refresh] = useState(0);

    return (
        <div>
            <ul>
                <li>OS: {specs.type}</li>
                <li>Architecture: {specs.arch}</li>
                <li>Platforme: {specs.platform}</li>
                <li>Nom du PC: {specs.hostname}</li>
                <li>Mémoire totale: {convertToMb(specs.totalmem)} bytes</li>
                <li>Mémoire restante: {convertToMb(specs.freemem)} bytes</li>
            </ul>
            <div>
                <button onClick={handleRefresh}>refresh</button>
            </div>
        </div>
    );
};
```

### 1.3 Les fonctions

-   On écrit les fonctions **handleRefresh**, **receiveSpecs** et on fait usage du **useEffect**

```javascript
const receiveSpecs = elements => {
    let object = {};
    elements.forEach(element => {
        // utilisé pour récupérer les données envoyées par Electron. Prend comme paramètre une string et un callback.
        window.ipcRenderer.on(element, (event, message) => {
            object[element] = message;
        });
    });
    setSpecs(object);
    console.log(object);
};

const handleRefresh = () => {
    refresh();
    console.log(specs);
};

useEffect(() => {
    receiveSpecs(channels);
}, []);
```
