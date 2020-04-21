import React from "react";
import "./App.css";

function Element({ onChange, value, i }) {
  function apply() {
    onChange(i);
  }

  return (
    <div>
      <div
        className="element"
        style={{ backgroundColor: value === true ? "red" : "white" }}
        onMouseOver={apply}
      ></div>
    </div>
  );
}

export default Element;
