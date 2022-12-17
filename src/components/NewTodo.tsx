import { FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";
const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredTodoText = inputRef.current!.value;
    if (enteredTodoText.trim().length === 0) return;
    todosCtx.addTodoHandler(enteredTodoText);
    inputRef.current!.value = "";
  };
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
