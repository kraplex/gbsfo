import React, { useState } from "react";
import "./RegForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function RegForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function onAdd() {
    if (!localStorage.getItem(login)) {
      const userData = {};
      userData.login = login;
      userData.password = password;
      localStorage.setItem(`${login}`, JSON.stringify(userData));
      setLogin("");
      setPassword("");
    } else {
      console.log("already is");
    }
  }

  return (
    <div className="regForm">
      <Input value={login} label="Login" onChange={setLogin}></Input>
      <Input type="password" value={password} label="Password" onChange={setPassword}></Input>
      <Button onClick={onAdd}>Registration</Button>
    </div>
  );
}
export default RegForm;
