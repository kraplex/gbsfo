import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./DashBoard.css";

function DashBoard({ userName, arr, showArr }) {
  const [application, setApplication] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function addUserData() {
    const dataBase = JSON.parse(localStorage.getItem("database"));
    const user = dataBase.findIndex((item) => item.userName === userName);

    const applicationData = {};
    applicationData["application"] = application;
    applicationData["login"] = login;
    applicationData["password"] = password;

    dataBase[user].appList.push(applicationData);
    localStorage.clear();
    localStorage.setItem("database", JSON.stringify(dataBase));

    showArr(dataBase[user].appList);
    setApplication("");
    setLogin("");
    setPassword("");
  }

  return (
    <div className="dashBoard">
      <p>Welcome, {userName}</p>
      <p>Add new passwords:</p>
      <Input
        placeholder="E-mail, facebook, etc"
        value={application}
        label="For: "
        onChange={setApplication}
      ></Input>
      <Input
        value={login}
        label="Login: "
        onChange={setLogin}
      ></Input>
      <Input
        type="password"
        value={password}
        label="Password: "
        onChange={setPassword}
      ></Input>
      <Button onClick={addUserData}>Add</Button>
      <List items={arr} userName={userName} arr={arr} showArr={showArr}></List>
    </div>
  );
}

export default DashBoard;
