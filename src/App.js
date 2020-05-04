import React, { useState} from "react";
import "./App.css";

import Element from "./Element";

let click = false;
const operations = [-21, -20, -19, -1, 1, 19, 20, 21];

function App() {
  let [state, setState] = useState(Array(400).fill(false));

  function handleClick(number) {
    //console.log(click);
    if (click) {
      let currentArray = state;
      currentArray[number] = !currentArray[number];
      setState([...currentArray]);
    }
  }

  function game() {
    let currentArray = [...state];

    state.map((element, i) => {
      let neighbors = 0;
      operations.forEach((value) => {
        let newElement = i + value;
        if (newElement >= 0 && newElement < 400) {
          if (state[newElement]) {
            console.log(newElement);
            neighbors++;
          }
        }
      });

      if (!element && neighbors === 3) {
        currentArray[i] = true;
        console.log(i);
      } else if (neighbors > 3 || neighbors < 2) {
        currentArray[i] = false;
      }
      if (i === 399) {
        setState([...currentArray]);
      }
    });
  }

  return (
    <div className="App">
      <div
        className="block"
        onMouseDown={(e) => {
          click = true;
        }}
        onMouseUp={() => (click = false)}
      >
        {state.map((value, i) => (
          <Element value={value} onChange={handleClick} i={i} key={i} />
        ))}
      </div>

      <input
        type="button"
        onClick={() => setState(Array(400).fill(false))}
        value="Clean"
      />
      <input type="button" onClick={game} value="Step" />
    </div>
  );
}

export default App;

/*
function handle(e) {
    if (click && (valueX-e.clientX>24 || e.clientX-valueX>24 || valueY-e.clientY>24 || e.clientY-valueY>24)) {
      valueX = e.clientX
      valueY = e.clientY
      console.log(e);
      console.log(e.movementX);
      console.log(e.screenX);
      console.log(e.pageX);
      e.preventDefault();
      console.log(e.target);
    }
  }

  
  function handle(e) {
    var rect = e.target.getBoundingClientRect();
    //if (rect.height > 500) {
    if (click ) {
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      console.log(e.clientX);
      console.log(e.target.getBoundingClientRect());
      console.log("x " + x);
      console.log("y " + y);
    }
  }
*/
