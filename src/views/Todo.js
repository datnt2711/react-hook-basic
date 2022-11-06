import React from "react";

function Todo({ todos, title }) {
  return (
    <>
      <div className="list-todo">
        <h3>{title}</h3>
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id} className="todo-child">
                {todo.name}
              </li>
            </>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default Todo;
