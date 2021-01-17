import React, { useState } from "react";
import "./LogInForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LogInForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function logIn() {
    const database = JSON.parse(localStorage.getItem("database"));

    const user = database.findIndex(
      (item) => item.login === login && item.password === password
    );

    if(user < 0) {
        alert("The username or password is not correct.")
    } else {
        console.log(user)

    }
    
    setLogin("");
    setPassword("");
  }

  return (
    <div className="logInForm">
      <Input value={login} label="Username: " onChange={setLogin}></Input>
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
