import React from 'react'
import Todos from './Todos'
import "../App.css"

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <Todos todo={todo} deleteTodo={deleteTodo} id={todo.id}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList
