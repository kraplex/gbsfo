import React,{useState} from "react";
import "./App.css";
import RegForm from "../RegForm/RegForm";
import DashBoard from "../DashBoard/DashBoard";
import LogInForm from "../LogInForm/LogInForm";


function App() {
  if (!localStorage.getItem("database")) {
    localStorage.setItem("database", JSON.stringify([]));
  }

  const [regForm, setRegForm] = useState("")

  return (
    <div className="container">
      <RegForm></RegForm>
      {/* <LogInForm ></LogInForm>
      <DashBoard userName={"text"}></DashBoard> */}
    </div>
  );
}

export default App;
