import { useState } from "react";

export default function Form(props) {
  const [task, setTask] = useState("");

  const inputHandler = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodo(task);
    setTask("");
  };
  return (
    <form onSubmit={submitHandler}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        value={task}
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={inputHandler}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
