import React, { useState } from "react";
import ReactDOM from "react-dom";
import {big_computation, welcome} from "../build/rusty_react"
const wasm = import("../build/rusty_react");

const App = () => {
    const [name, setName] = useState("");
    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleClick = () => {
      welcome(name);
    };

    return (
      <div>
        <div>
          <h1>Hi there, this app supports webassembly with rust</h1>
          <button onClick={big_computation}>Run Computation</button>
        </div>
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={handleClick}>Say hello!</button>
        </div>
        <p>/src is your routine source folder</p>
        <p>except that it contains rust lib.rc file along with  react app index.jsx</p>
        <p>you can use rust and react together</p>
        <p>your rust code is compiled to webassembly available in /pkg folder</p>
        <p>you can use it in your react app</p>
      </div>
    );
  };

  ReactDOM.render(<App/>, document.getElementById("root"));
