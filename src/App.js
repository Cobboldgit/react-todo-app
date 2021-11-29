import { useState } from 'react';
import './App.css';
import TodoApp from "./component/TodoApp"

function App() {
  const [todos, setTodos] = useState([])

  const addTodos = todo => setTodos([...todos, todo])

  const deleteTodo = (todoId) => {
    const filterTodo = todos.filter((todo) => {
      return todoId !== todo.id
    })

    setTodos(filterTodo)
  }

  const clearTodos = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <TodoApp todos={todos} addTodos={addTodos} deleteTodo={deleteTodo} clearTodos={clearTodos}/>
    </div>
  );
}

export default App;
