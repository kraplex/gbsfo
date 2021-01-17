import React, { useState } from "react";
import "./RegForm.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function RegForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function addUser() {
    const database = JSON.parse(localStorage.getItem("database"));

    const user = database.findIndex((item) => item.login === login);

    if (user >= 0) {
      alert(`User "${login}" already exist. Please, log in`);
      setLogin("");
      setPassword("");
    } else {
      const userData = {};
      userData.login = login;
      userData.password = password;
      userData.appList = [];

      database.push(userData);
      localStorage.clear();
      localStorage.setItem(`database`, JSON.stringify(database));
      alert("Done!")
      setLogin("");
      setPassword("");
    }
  }

  return (
    <div className="regForm" >
      <Input value={login} label="Username: " onChange={setLogin}></Input>
      <Input
        type="password"
        value={password}
        label="Password: "
        onChange={setPassword}
      ></Input>
      <Button onClick={addUser}>Registration</Button>
    </div>
  );
}
export default RegForm;
