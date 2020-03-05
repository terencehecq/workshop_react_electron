import React from "react";

import "./css/App.min.css";
import Metronome from "./metronome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Le bon Workshop !</h1>
      </header>
      <main>
        <Metronome />
      </main>
      <footer>Workshop by Denis Tété & lolo</footer>
    </div>
  );
}

export default App;
