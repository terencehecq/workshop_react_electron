## Métronome en React

### 1. La base

- Dans le dossier **src** créer un document **metronome.js** et on y importe les fichiers qui nous seront utiles : 

```javascript
import React, {useState} from 'react';
import useInterval from './my_hooks'

import soundFile1 from './assets/click1.wav';
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

### 1.2 - Etat & évènements

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


### 1.3 Les fonctions

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

