import React, {useState} from 'react';
import useInterval from './my_hooks'

import soundFile1 from './assets/click1.wav';
import play from './assets/play.png';
import pause from './assets/pause.png';

const Metronome = () => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);

  const click1 = new Audio(soundFile1);

  const handleSlider = (e) => {
    setBeat(+e.target.value);
  }
  const handleMinus = () => {
    setBeat(beat - 1)
  }
  const handlePlus = () => {
    setBeat(beat + 1)
  }

  const startStop = () => {
    if(!playing){
      setPlaying(true);
    }else {
      setPlaying(false)
    }
  }
  
  const playClick = () => {
      click1.currentTime = 0;
      click1.play();
  }

  useInterval(()=> {
    if(playing) {
      playClick(); 
    }}, 60000 / beat)
  
  return (
    <div className="metronome">
      <h3>{beat} BPM</h3>
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
      <button className="startStop" onClick={startStop}>
        <img src={playing ? pause : play} alt="play/pause"></img>
      </button>
    </div>
  );
}

export default Metronome;
