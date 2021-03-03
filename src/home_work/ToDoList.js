import React from "react";

function  ToDoList({ todos }) {
    return (
        <ul className="ToDoList">
            {todos.map(todo => {
                <Todo key={todo.id} todo={todo} />
            })}
        </ul>
    )
}

export default ToDoList;