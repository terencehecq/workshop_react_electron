import React, {useState, useEffect} from 'react';
import './App.css';
import soundFile from './click.wav';
import useInterval from './my_hooks'

const App = (props) => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);

  const click = new Audio(soundFile);


  const handleBpmChange = (e) => {
    setBeat(+e.target.value);
    console.log(beat)
  }


  const timer = () => setInterval(playClick, (60 / beat) * 1000);

  const startStop = (e) => {
    e.preventDefault();

    if(!playing){
      setPlaying(true);
    }else {
      setPlaying(false)
    }

  }
  
  const playClick = () => {
    click.currentTime = 0;
    click.play();
  }

  useInterval(()=> {
    if(playing) {
      playClick(); 
    }
  }, ((60 / beat) * 1000))
  
  return (
    <div className="metronome">
      <div className="bpm-slider">
      <div>{beat} BPM</div>
        <input
          type="range"
          min="60"
          max="240"
          value={beat} 
          onChange={handleBpmChange}/>
      </div>
      <button onClick={startStop}>
        {playing ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default App;
