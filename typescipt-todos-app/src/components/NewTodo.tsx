import React, { useRef, useContext } from "react";
import classes from "../components/NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    textRef.current!.value = "";
  };

  return (
    <form onSubmit={submitFormHandler} className={classes.form}>
      <label>Todo text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
