import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveItem={todosCtx.removeTodoHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
