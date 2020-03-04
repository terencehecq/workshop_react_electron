import React, {useState} from 'react';
import './App.css';
import soundFile1 from './assets/click1.wav';
import soundFile2 from './assets/click2.wav';
import play from './assets/play.png';
import pause from './assets/pause.png';
import useInterval from './my_hooks'

const App = () => {
  const [beat, setBeat] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [measure, setMeasure] = useState({
    count : 0,
    pulse : 4
  })

  const click1 = new Audio(soundFile1);
  const click2 = new Audio(soundFile2);

  const handleSlider = (e) => {
      setMeasure({count: 0, pulse: measure.pulse})
      setBeat(+e.target.value);
  }
  const handleMinus = () => {
    setMeasure({count: 0, pulse: measure.pulse})
    setBeat(beat - 1)
  }
  const handlePlus = () => {
    setMeasure({count: 0, pulse: measure.pulse})
    setBeat(beat + 1)
  }

  const handlePulse = (e, pulse) => {
    document.querySelectorAll("button.active").forEach(button => button.classList.remove("active"))
    e.target.classList.add("active")
    setMeasure({count: 0, pulse: pulse})
  }

  const startStop = (e) => {
    if(!playing){
      setMeasure({count: 0, pulse: measure.pulse})
      setPlaying(true);
    }else {
      setPlaying(false)
    }

  }
  
  const playClick = () => {
    if(measure.count % measure.pulse === 0) {
      click1.currentTime = 0;
      click1.play();
    } else {
      click2.currentTime = 0;
      click2.play();
    }

    setMeasure({ 
      count: (measure.count + 1) % measure.pulse, 
      pulse : measure.pulse
    });
  }

  useInterval(()=> {
    if(playing) {
      playClick(); 
    }}, ((60 / beat) * 1000))
  
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
      <div className="bpm-pulse">
        <h4>Mesure : </h4>
        <button onClick={(e)=>{handlePulse(e, 2)}}>2</button>
        <button onClick={(e)=>{handlePulse(e, 3)}}>3</button>
        <button className="active" onClick={(e)=>{handlePulse(e, 4)}}>4</button>
      </div>
    </div>
  );
}

export default App;
