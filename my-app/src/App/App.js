import React, { useState } from "react";
import "./App.css";
import RegForm from "../RegForm/RegForm";
import DashBoard from "../DashBoard/DashBoard";
import LogInForm from "../LogInForm/LogInForm";

function App() {
  if (!localStorage.getItem("database")) {
    localStorage.setItem("database", JSON.stringify([]));
  }

  const [name, setName] = useState("");
  function showName(name) {
    setName(name);
  }

  const [arr, setArr] = useState([]); 
  
  function showArr(arr) {
    setArr(arr);   
  }
 

  return (
    <div className="container">
      <RegForm showName={showName}></RegForm>
      <LogInForm showName={showName} showArr={showArr}></LogInForm>
      <DashBoard userName={name} arr={arr} showArr={showArr} ></DashBoard>
    </div>
  );
}

export default App;
