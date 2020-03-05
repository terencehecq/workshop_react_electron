// import React from "react";
// import "./App.css";

// // const os = require("os");
// import os from "os";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <p>Mike Coxlong</p>
//             </header>
//         </div>
//     );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [type, setType] = useState("");
    const [arch, setArch] = useState("");
    const [platform, setPlatform] = useState("");

    useEffect(() => {
        window.ipcRenderer.on("ping", (event, message) => {
            console.log(message);
            setType(message);
        });
        window.ipcRenderer.on("pong", (event, message) => {
            console.log(message);
            setArch(message);
        });
        window.ipcRenderer.on("pung", (event, message) => {
            console.log(message);
            setPlatform(message);
        });
    }, []);

    return (
        <div className="App">
            {type}, {arch}, {platform}
        </div>
    );
}

export default App;
