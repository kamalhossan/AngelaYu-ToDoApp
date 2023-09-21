import React from "react";

export default function ToDoItems(props) {
  function removeItem(id) {
    props.setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

    console.log(id);
  }

  return (
    <li onClick={() => removeItem(props.index)} key={props.index}>
      {props.todoItem}
    </li>
  );
}
