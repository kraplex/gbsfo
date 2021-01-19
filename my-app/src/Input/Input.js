import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input">
      <span>{props.label}</span>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder || ""}
        value={props.value}
        disabled={props.disabled}
        onChange={(e) => props.onChange(e.target.value)}
        onMouseOver ={props.onMouseOver }
        onMouseOut = {props.onMouseOut}
      />
    </div>
  );
}

export default Input;
