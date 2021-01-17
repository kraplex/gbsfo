import React from "react";
import Button from "../Button/Button";
import "./List.css";

function ListItem({ item, onRemove, onEdit, index }) {
  return (
    <li className="list_item">
      <p>{item.application}</p>
      <p>{item.login}</p>
      <p>{item.password}</p>
      <Button onClick={() => onEdit(index)}>Edit</Button>
      <Button onClick={() => onRemove(index)}>Remove</Button>
    </li>
  );
}

function List({ items, onRemove, onEdit, index }) {
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
