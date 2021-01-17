import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./DashBoard.css";

function DashBoard({userName, arr}) {
  const [application, setApplication] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState(""); 
  const [appList, setAppList] = useState(arr);
  

  function onRemove(index) {
    const items = appList.filter((_, i) => i !== index);
    setAppList(items);
    const database = JSON.parse(localStorage.getItem("database"));

    const user = database.findIndex((item)=>item.userName===userName);
    
    database[user].appList.splice(index,1);
    localStorage.clear();
    localStorage.setItem("database", JSON.stringify(database))
  }

  function onEdit(index) {
    console.log(index, "edit");
  }

  function addUserData() {
    const database = JSON.parse(localStorage.getItem("database"));
    const user = database.findIndex((item)=>item.userName===userName);
    
    const applicationData = {};
    applicationData["application"] = application;
    applicationData["login"] = login;
    applicationData["password"] = password;

    database[user].appList.push(applicationData)
    localStorage.clear();
    localStorage.setItem("database", JSON.stringify(database))
      

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
