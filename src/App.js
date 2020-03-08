import React from "react";
import { Route, BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import "./css/App.min.css";
import Metronome from "./metronome";
import SystemeSpec from "./systemespec";

import metronomeImg from "./assets/metronome.svg";
import systemeImg from "./assets/systeme.svg";
import loveImg from "./assets/love.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React + Electron = <img src={loveImg} />
        </h1>
      </header>
      <main>
        <Router>
          <nav className="navbar">
            <div className="container-link">
              <Link className="nav-link" to="/metronome">
                Metronome
                <img src={metronomeImg} />
              </Link>
            </div>
            <div className="container-link">
              <Link className="nav-link" to="/systemespec">
                Systemespecs
                <img src={systemeImg} />
              </Link>
            </div>
          </nav>
          <Route path="/metronome">
            <Metronome />
          </Route>
          <Route path="/systemespec">
            <SystemeSpec />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
