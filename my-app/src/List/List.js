import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./List.css";

function ListItem({ item, onRemove, index, userName }) {
  const [editedAppValue, setEditedAppValue] = useState(item.application);
  const [editedLoginValue, setEditedLoginValue] = useState(item.login);
  const [editedPassValue, setEditedPassValue] = useState(item.password);



  function onEdit(index) {
    const dataBase = JSON.parse(localStorage.getItem("database"));
    const user = dataBase.findIndex((item) => item.userName === userName);
    
    const applicationData = {};
    applicationData["application"] = editedAppValue;
    applicationData["login"] = editedLoginValue;
    applicationData["password"] = editedPassValue;
    
    dataBase[user].appList.splice(index, 1);
    dataBase[user].appList.push(applicationData);
    localStorage.setItem("database", JSON.stringify(dataBase));
  }

  return (
    <li className="list_item">
      <Input
        value={editedAppValue}
        label="Application: "
        onChange={setEditedAppValue}
      ></Input>
      <Input value={editedLoginValue} label="Login: " onChange={setEditedLoginValue} ></Input>
      <Input
        value={editedPassValue}
        label="Password: "
        onChange={setEditedPassValue}
        onMouseOver={(e) => (e.target.type = "text")}
        onMouseOut={(e) => (e.target.type = "password")}
        type="password"
      ></Input>
      <Button onClick={() => onEdit(index)}>Edit</Button>
      <Button onClick={() => onRemove(index)}>Remove</Button>
    </li>
  );
}

function List({ items, userName, showArr }) {
  function onRemove(index) {
    const dataBase = JSON.parse(localStorage.getItem("database"));
    const user = dataBase.findIndex((item) => item.userName === userName);
    dataBase[user].appList.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("database", JSON.stringify(dataBase));
    showArr(dataBase[user].appList);
  }

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          userName={userName}
          key={index}
          item={item}
          onRemove={onRemove}
          index={index}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;
