import React, { useEffect, useState } from "react";

const convertToMb = number => {
    if (Number.isInteger(number)) {
        const mb = number / 1048576; // one megabyte = 1.048.576 bytes
        const rounded = mb.toFixed(1);
        return `${rounded} mb`;
    } else {
        return "";
    }
};

const SystemSpecs = () => {
    // specs we are interested in, as the functions only takes a string as first parameter, need to make things easier.
    const channels = ["type", "arch", "platform", "freemem", "totalmem", "hostname"];
    // this is the initial state
    const [specs, setSpecs] = useState({});

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

    // updates when a change is detected, the empty array in the final argument is there to make it happen only once.
    useEffect(() => {
        receiveSpecs(channels);
    }, []);

    return (
        <div>
            <ul>
                <li>OS: {specs.type}</li>
                <li>Architecture: {specs.arch}</li>
                <li>Platforme: {specs.platform}</li>
                <li>Nom du PC: {specs.hostname}</li>
                <li>Mémoire totale: {convertToMb(specs.totalmem)}</li>
                <li>Mémoire restante: {convertToMb(specs.freemem)}</li>
            </ul>
        </div>
    );
};

export default SystemSpecs;
