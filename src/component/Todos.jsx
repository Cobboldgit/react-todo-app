import React from "react";
import "../App.css";

const Todos = ({ todo, deleteTodo }) => {
  function handleChecked(e) {
    if (e.target.tagName === "P") {
      e.target.classList.toggle("checked");
    }
  }
  return (
    <div className="todos">
      <div className="todo--txt">
        <p id="todoItem" onClick={handleChecked}>
          {todo.input}
        </p>
      </div>
      <div className="todo--delBtn">
        <button onClick={() => deleteTodo(todo.id)}>del</button>
      </div>
    </div>
  );
};

export default Todos;
