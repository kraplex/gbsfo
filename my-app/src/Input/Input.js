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
        onChange={(e) => props.onChange(e.target.value)}
        onClick={props.onClick}
      />
    </div>
  );
}

export default Input;
