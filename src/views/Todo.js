import React from "react";

function Todo(props) {
  const { todos, title, deleteDataTodo } = props;
  const handleDeleteTodo = (id) => {
    console.log(id);
    deleteDataTodo(id);
  };
  return (
    <>
      <div className="list-todo">
        <h3>{title}</h3>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li className="todo-child">
                {todo.name}
                &nbsp; &nbsp;
                <span onClick={() => handleDeleteTodo(todo.id)}>x</span>
              </li>
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default Todo;
