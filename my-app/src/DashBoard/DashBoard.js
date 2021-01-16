import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./DashBoard.css";

function DashBoard() {
  const [application, setApplication] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function addUserData() {
    const userData = {};
    userData[application] = {};
    userData[application].login=login;
    userData[application].password = password;
    const temp = JSON.parse(localStorage.getItem("testlogin"))
    userData.login = temp.login;
    userData.password = temp.password;
    localStorage.clear();
    localStorage.setItem(`${userData.login}`, JSON.stringify(userData))
    setApplication("");
    setLogin("");
    setPassword("");
}

  return (
    <div className="dashBoard">

        <p>Welcome, </p>
      <p>Add new passwords:</p>
      <Input
        placeholder="e-mail, facebook, etc"
        value={application}
        label="for:"
        onChange={setApplication}
      ></Input>
       <Input
        placeholder="user name, e-mail, phone number"
        value={login}
        label="Login:"
        onChange={setLogin}
      ></Input>
      <Input
        type="password"
        placeholder="password"
        value={password}
        label="Password:"
        onChange={setPassword}
      ></Input>
      <Button onClick={addUserData}>Add</Button>
    </div>
  );
}

export default DashBoard;
