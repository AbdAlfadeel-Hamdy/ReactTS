import React, { useState } from "react";
import Todo from "../models/todo";
type TodosObj = {
  items: Todo[];
  addTodoHandler: (text: string) => void;
  removeTodoHandler: (itemId: string) => void;
};
export const TodosContext = React.createContext<TodosObj>({
  items: [],
  addTodoHandler: (text: string) => {},
  removeTodoHandler: (itemId: string) => {},
});

const TodosContextProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const NewTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, NewTodo]);
  };
  const removeTodoHandler = (itemId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== itemId));
  };
  const todoCtxValue = {
    items: todos,
    addTodoHandler,
    removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={todoCtxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
