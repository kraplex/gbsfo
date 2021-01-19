import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./List.css";

function ListItem({ item, onRemove, onEdit, index }) {
  return (
    <li className="list_item">
      <Input value={item.application} disabled label="Application: "></Input>
      <Input value={item.login} label="Login: " disabled></Input>
      <Input
        value={item.password}
        disabled
        label="Password: "
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

  function onEdit() {
    console.log("edited");
  }

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          onRemove={onRemove}
          onEdit={onEdit}
          index={index}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;
