## Métronome en React

### 1. La base

- Dans le dossier **src** créer un document **metronome.js** et on y importe les fichiers qui nous seront utiles : 

```javascript
import React, {useState} from 'react';
import useInterval from './my_hooks'

import soundFile1 from './assets/click1.wav';
import soundFile2 from './assets/click2.wav';
import play from './assets/play.png';
import pause from './assets/pause.png';

const Metronome = () => {

    return(

    )
}
export default Metronome
```

- Dans le fichier **App.js**, importer le nouveau composant :

```javascript
import Metronome from './metronome';
```

- Et l'afficher :
```javascript
return(
    <div>
        <Metronome/>
    </div>
)
```

#### 1.1 L'interface utilisateur

- Dans le composant Metronome de **metronome.js**, on met en place la partie 'HTML' :

```javascript
...
return (
    <div className="metronome">
        <h3>BPM</h3>
        <div className="bpm-slider">
            <input
            type="range"
            min="60"
            max="240"/>
        </div>
        <button className="startStop">
            Play / Pause
        </button>
    </div>
  );
```

#### 1.2 - Etat & évènements

- Afin de rendre notre interface fonctionnelle, on définit l'**état** et les **fonctions** qu'on relie aux éléments correspondants

```javascript
const Metronome = () => {
    const [beat, setBeat] = useState(100);
    const [playing, setPlaying] = useState(false); 

    return (
        <div className="metronome">
        <h3>{beat} BPM</h3>         
        <div className="bpm-slider">
            <input
            type="range"
            min="60"
            max="240"
            value={beat}
            onChange={handleSlider}/>
        </div>
        <button className="startStop" onClick={startStop}>
            Play/Pause
        </button>
        </div>
    );
};
```

- On utilise l'état et les images importées au début pour donner un style au bouton

```html
<button className="startStop" onClick={startStop}>
    <img src={playing ? pause : play} alt="play/pause"></img>
</button>
```


#### 1.3 Les fonctions

- On écrit les fonctions **handleSlider** et **startStop**

```javascript
const handleSlider = (e) => {
    setBeat(+e.target.value);
};

const startStop = () => {
    if(!playing){
      setPlaying(true);
    }else {
      setPlaying(false);
    };
};
```

#### 1.4 Avec le son, c'est mieux !

- On définit les fichiers .wav importés comme des fichier Audio (on utilisera le 2e plus tard)
- On écrit une fonction qui permet de **jouer le son** du click et de le **remettre à 0** avant d'être joué

```javascript
const click1 = new Audio(soundFile1);
...
const playClick = () => {
      click1.currentTime = 0;
      click1.play();
  };
```

- En React, la fonction **setInterval** cause des erreurs, c'est pourquoi nous vous avons fait importer le fichier **useInterval** qui est un hook personnalisé permettant d'utiliser un semblant de setInterval. Cette fonction va tourner en permanence, c'est pourquoi nous lui mettons des conditions qui dépendent de l'état de *playing* afin que le son soit joué au bon moment.

```javascript
useInterval(()=> {
    if(playing) {
      playClick(); 
    }}, 60000 / beat);
```

A ce stade, nous avons déjà un métronome fonctionnel mais pas très users friendly... Passons à l'étape suivante !

### 2. Ajouter des boutons + et -

#### 2.1 Ajouter les boutons dans l'UI

- Avant l'input, nous plaçons le bouton "-" et après, le bouton "+" et nous définissons leurs **fonctions** respectives.

```html
<div className="bpm-slider">
    <button onClick={handleMinus}>-</button>
    <input
        type="range"
        min="60"
        max="240"
        value={beat} 
        onChange={handleSlider}/>
    <button onClick={handlePlus}>+</button>
</div>
```

#### 2.2 Les fonctions 

- On écrit les fonctions **handleMinus** et **handlePlus** qui sont presque similaires.

```javascript
const handleMinus = () => {
    setBeat(beat - 1)
}

const handlePlus = () => {
    setBeat(beat + 1)
}
```


### 3. Ajouter des mesures et un son différent sur le premier temps

#### 3.1 Ajouter les boutons dans l'UI

- On ajoute 3 boutons qui définiront la mesure du métronome **juste avant la fermeture de la div**.

```html
...
    </button>
    <div className="bpm-measure">
        <h4>Mesure : </h4>
        <button>2</button>
        <button>3</button>
        <button className="active">4</button>
    </div>
</div>
```