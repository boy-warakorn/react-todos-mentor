import React from "react";
import PropTypes from "prop-types";
import "./TodosItem.css";

export const TodosItem = ({ todo, onDelete }) => {
  return (
    <div className="todos-item">
      <h2 className="todos-item-title">{todo.text}</h2>
      <button onClick={() => onDelete(todo.id)}>DELETE</button>
    </div>
  );
};

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
