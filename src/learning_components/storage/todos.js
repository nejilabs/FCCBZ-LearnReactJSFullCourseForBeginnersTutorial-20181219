import React from "react";

function Todo(props){
  const COMPLETED_STYLE = {
    fontStyle: "italic",
    color:"#cdcdcd",
    textDecoration: "line-through"
  }

  return(
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? COMPLETED_STYLE : null}>{props.item.text}</p>
    </div>
  );
}

export default Todo;
