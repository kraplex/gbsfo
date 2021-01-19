import React, { useState } from "react";
import "./App.css";
import RegForm from "../RegForm/RegForm";
import DashBoard from "../DashBoard/DashBoard";
import LogInForm from "../LogInForm/LogInForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <ul className="nav" >
          <li>
            <Link to="/">Registration</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <a href="/">Refresh all project</a>
          </li>
        </ul>
      <div className="container">        
        <Switch>
          <Route path="/login">
            <LogInForm showName={showName} showArr={showArr} name={name} arr={arr}></LogInForm>
          </Route>
          <Route path="/">
            <RegForm showName={showName} showArr={showArr} name={name} arr={arr}></RegForm>
          </Route>
          <Route path="/dashboard">
            <DashBoard userName={name} arr={arr} showArr={showArr} showName={showName}></DashBoard>
          </Route>          
        </Switch>
        {/* <RegForm showName={showName}></RegForm>
            <LogInForm showName={showName} showArr={showArr}></LogInForm>
            <DashBoard userName={name} arr={arr} showArr={showArr}></DashBoard> */}
      </div>
    </Router>
  );
}

export default App;
