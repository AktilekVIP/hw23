import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: value,
      id: Date.now(),
      completed: false,
    };
    if (value.trim().length !== 0) {
      dispatch(todoActions.addTodo(newTodo));
      setValue("");
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        placeholder='Add task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Add new Todo</button>
    </form>
  );
};

export default TodoForm;
