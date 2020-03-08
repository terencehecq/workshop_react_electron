// Guess what ? this doesn't work, so here, have some cheese

import React, { useEffect, useState } from "react";

const convertToMb = number => {
    const mb = number / 1048576;
    const rounded = mb.toFixed(1);
    return rounded;
};

const SystemSpecs = () => {
    const channels = ["type", "arch", "platform", "freemem", "totalmem", "hostname"];
    const [specs, setSpecs] = useState({
        type: "",
        arch: "",
        platform: "",
        freemem: "",
        totalmem: "",
        hostname: ""
    });
    // THIS IS NEW, pretty much useless but serves the cheese
    const [, refresh] = useState(0);

    const receiveSpecs = elements => {
        let object = {};
        elements.forEach(element => {
            window.ipcRenderer.on(element, (event, message) => {
                object[element] = message;
            });
        });
        setSpecs(object);
        console.log(object);
    };

    // THIS IS ALSO NEW, updates the useless thing above
    const handleRefresh = () => {
        refresh();
        console.log(specs);
    };

    useEffect(() => {
        receiveSpecs(channels);
    }, []);

    // console.log(specs);

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
            {/* This is to activate the useless thing that triggers a change in the useless state to make something happen*/}
            <div>
                <button onClick={handleRefresh}>refresh</button>
            </div>
        </div>
    );
};

export default SystemSpecs;

// no clue what happened? Guess what, me neither, but I've spent way too much time on this for now.
// Want some more infos? well me too, but it didn't happen because life is a b***, and I didn't sign for this.
