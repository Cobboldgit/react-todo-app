import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = ({ todos, addTodos, deleteTodo, clearTodos }) => {
  const no = <p>You have no todos</p>;

  let todosTxt = "todos";

  
  if (todos.length === 1) {
    todosTxt = "todo";
  }

  const pending = (
    <p>
      You have {todos.length} {todosTxt} pending
    </p>
  );

  return (
    <div className="todoApp">
      <p className="todo--head">Todo App</p>
      <div>{todos.length === 0 ? no : pending}</div>
      <TodoInput addTodos={addTodos} />
      <div className="todo--list">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
      <div className="todo--clear">
        <button onClick={clearTodos}>
           clear
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
