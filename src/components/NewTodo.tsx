import { FormEvent, useRef } from "react";
import styles from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredTodoText = inputRef.current!.value;
    if (enteredTodoText.trim().length === 0) return;
    props.onAddTodo(enteredTodoText);
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
