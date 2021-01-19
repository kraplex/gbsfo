import React, { useState} from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./List.css";

function ListItem({ item, onRemove, onEdit, index }) {

  

  return (
    <li className="list_item">
      <Input
        value={item.application}
        disabled
        label="Application: "
       ></Input>
      <Input value={item.login} label="Login: " disabled></Input>
      <Input
        value={item.password}        
        label="Password: "
        onClick={(e) => (e.target.type = "text")}
        type="password"
      ></Input>
      <Button onClick={() => onEdit(index)}>Edit</Button>
      <Button onClick={() => onRemove(index)}>Remove</Button>
    </li>
  );
}

function List({ items, onRemove, onEdit }) {
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
