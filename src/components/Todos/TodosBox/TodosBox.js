import React from "react";
import PropTypes from "prop-types";
import { TodosItem } from "../TodosItem/TodosItem";
import "./TodosBox.css";

export const TodosBox = ({ todos, onDelete }) => {
  return (
    <div className="todos-box">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

TodosBox.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
