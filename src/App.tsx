import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const NewTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, NewTodo]);
  };
  const removeTodoHandler = (itemId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
