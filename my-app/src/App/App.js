import React from "react";
import './App.css';
import RegForm from "../RegForm/RegForm";
import DashBoard from "../DashBoard/DashBoard"

function App() {
  
  return (
    <div className="container">
      <RegForm></RegForm>
      <DashBoard></DashBoard>    
    </div>
  );
}

export default App;
