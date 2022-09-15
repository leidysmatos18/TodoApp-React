import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete }) => {
  return (
    <div>
      <h1 className="text-center">TodoList</h1>
      {todos.map((todo, i) => (
        <Todo key={todo.id} todoProps={todo} todoDelete={todoDelete} />
      ))}
    </div>
  );
};

export default TodoList;
