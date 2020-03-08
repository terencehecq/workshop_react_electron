import React, { useEffect, useState } from "react";

const convertToMb = (number) => {
  const mb = number / 1048576;
  const rounded = mb.toFixed(1);
  return rounded;
};

const SystemSpecs = () => {
  const channels = ["type", "arch", "platform", "freemem", "totalmem", "hostname", "userInfo", "cpus"];
  const [specs, setSpecs] = useState({
    type: "",
    arch: "",
    platform: "",
    freemem: "",
    totalmem: "",
    hostname: "you",
    userInfo: {
      username: ""
    },
    cpus: {
      model: ""
    }
  });
  const [, refresh] = useState(0);

  const receiveSpecs = async (elements) => {
    let object = {};
    elements.forEach((element) => {
      window.ipcRenderer.on(element, (event, message) => {
        object[element] = message;
      });
    });
    await setSpecs(object);
    console.log(object);
    console.log(specs);
  };

  const handleRefresh = () => {
    refresh();
  };

  useEffect(() => {
    receiveSpecs(channels);
  }, []);

  console.log(specs);

  return (
    <div>
      <ul>
        <li>OS: {specs.type}</li>
        <li>Architecture: {specs.arch}</li>
        <li>Platforme: {specs.platform}</li>
        <li>Nom du PC: {specs.hostname}</li>
        <li>Mémoire totale: {convertToMb(specs.totalmem)} bytes</li>
        <li>Mémoire restante: {convertToMb(specs.freemem)} bytes</li>
        {/* <li>Nom de l'utilisateur: {specs.userInfo}</li> */}
        {/* {specs.userInfo.map(info => {
                    // if (info === "username") {
                    return <li>{info}</li>;
                    // }
                })} */}
        {/* <React.Fragment>{specs.userInfo[username]}</React.Fragment> */}
        {/* <li>CPU threads: {specs.cpus.model}</li> */}
      </ul>
      <div>
        <button onClick={handleRefresh}>refresh</button>
      </div>
    </div>
  );
};

export default SystemSpecs;
