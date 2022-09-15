import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodo = [
  {
    id: 1,
    title: "todo #1",
    description: "description del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "todo #2",
    description: "description del Todo #2",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodo);

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter((item) => item.id !== todoId);

    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4 App">
      <div className="row">
        <div className="col-8">
          <TodoList todos={todos} todoDelete={todoDelete} />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
