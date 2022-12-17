import { FormEvent } from "react";

const NewTodo = () => {
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
