import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./DashBoard.css";

function DashBoard({userName}) {
  const [application, setApplication] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState(""); 
  const [appList, setAppList] = useState([]);

  function onRemove(index) {
    const items = appList.filter((_, i) => i !== index);
    setAppList(items);
  }

  function onEdit(index) {
    console.log(index, "edit");
  }

  function addUserData() {
    const database = JSON.parse(localStorage.getItem("database"));
    const applicationData = {};
    applicationData["application"] = application;
    applicationData["login"] = login;
    applicationData["password"] = password;

    
      

    setAppList([...appList, applicationData]);
    setApplication("");
    setLogin("");
    setPassword("");
  }

  return (
    <div className="dashBoard">
      <p>Welcome, {userName}</p>
      <p>Add new passwords:</p>
      <Input
        placeholder="e-mail, facebook, etc"
        value={application}
        label="for: "
        onChange={setApplication}
      ></Input>
      <Input
        placeholder="Username, e-mail, phone number"
        value={login}
        label="Login: "
        onChange={setLogin}
      ></Input>
      <Input
        type="password"
        placeholder="password"
        value={password}
        label="Password: "
        onChange={setPassword}
      ></Input>
      <Button onClick={addUserData}>Add</Button>
      <List items={appList} onRemove={onRemove} onEdit={onEdit}></List>
    </div>
  );
}

export default DashBoard;
