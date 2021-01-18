import React, { useState } from "react";
import "./LogInForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LogInForm({ showName, showArr }) {
  const [userName, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    const dataBase = JSON.parse(localStorage.getItem("database"));

    const user = dataBase.findIndex(
      (item) => item.userName === userName && item.password === password
    );

    if (user < 0) {
      alert("The username or password is not correct.");
    } else {
      showName(userName);
      const user = dataBase.findIndex((item)=>item.userName===userName);
      showArr(dataBase[user].appList)

    }

    setLogin("");
    setPassword("");
  }

  return (
    <div className="logInForm">
      <Input value={userName} label="Username: " onChange={setLogin}></Input>
      <Input
        type="password"
        value={password}
        label="Password: "
        onChange={setPassword}
      ></Input>
      <Button onClick={logIn}>Log In</Button>
    </div>
  );
}
export default LogInForm;
