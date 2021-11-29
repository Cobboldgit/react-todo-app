import React, { useState } from "react";
import { todoId as uuid } from "./todoId";
import "../App.css";

const TodoInput = ({ addTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let addNewTodos = {
      input: input,
      id: uuid(),
    };
    addTodos(addNewTodos);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          type="text"
          name="todos"
          value={input}
          placeholder="Add your new todo"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="button">
        <button>+</button>
      </div>
    </form>
  );
};

export default TodoInput;
