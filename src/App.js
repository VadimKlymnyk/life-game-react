import React, { useState } from "react";
import "./App.css";

import Element from "./Element";

function App() {
  let [state, setState] = useState(Array(400).fill(false));
  let [click, setClick] = useState(false);

  function handleClick(number) {
    if (click) {
      setState([(state[number] = state[number] === false ? true : false)]);
      setState([...state]);
    }
  }

  return (
    <div className="App">
      <div className="block" onMouseDown={() => setClick(true)} onMouseUp={() => setClick(false)}>
        {state.map((value, i) => (
          <Element
            value={value}
            onChange={handleClick}
            i={i}
            key={i}
          />
        ))}
      </div>
      
      <input type="button" onClick={() => setState(Array(400).fill(false))} value="Clean"/>
    </div>
  );
}

export default App;
