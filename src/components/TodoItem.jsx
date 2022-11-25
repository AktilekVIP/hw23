import React from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

const TodoItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = () => {
    dispatch(todoActions.deleteTodo(id));
  };
  const onToggleHandler = () => {
    dispatch(todoActions.toggleTodo(id));
  };
  return (
    <li>
      <div
        style={
          completed
            ? {
                textDecoration: "line-through",
              }
            : { color: "black" }
        }
      >
        {title}
      </div>
      <button onClick={onToggleHandler}>completed</button>
      <button onClick={onDeleteHandler}>Delete</button>
    </li>
  );
};

export default TodoItem;
