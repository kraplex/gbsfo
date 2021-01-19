import React, { useState } from "react";
import "./RegForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DashBoard from "../DashBoard/DashBoard"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RegForm({ showName, name, arr, showArr }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function addUser() {
    const database = JSON.parse(localStorage.getItem("database"));
    const user = database.findIndex((item) => item.userName === userName);

    if (user >= 0) {
      alert(`User "${userName}" already exist. Please, log in`);
      setUserName("");
      setPassword("");
    } else {
      showName(userName);
      const userData = {};
      userData.userName = userName;
      userData.password = password;
      userData.appList = [];
      database.push(userData);
      localStorage.clear();
      localStorage.setItem(`database`, JSON.stringify(database));
      alert("Done!");
      setUserName("");
      setPassword("");
    }
  }

  return (
    <Router>
      <div className="regForm">
        <Input
          value={userName}
          label="Username: "
          onChange={setUserName}
        ></Input>
        <Input
          type="password"
          value={password}
          label="Password: "
          onChange={setPassword}
        ></Input>
        <Link to="/dashboard">
          <Button onClick={addUser}>Registration</Button>
        </Link>
        <Switch>
          <Route path="/dashboard">
            <DashBoard userName={name} arr={arr} showArr={showArr}></DashBoard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default RegForm;
