import React from "react";
import "./App.css";

function Element({ onChange, value, i }) {
  function move() {
    onChange(i);
  }
  function click() {
    setTimeout(move);
  }

  return (
    <div>
      <div
        className="element"
        style={{ backgroundColor: value === true ? "red" : "white" }}
        onMouseOver={move}
        onMouseDown={click}
      ></div>
    </div>
  );
}

export default Element;
