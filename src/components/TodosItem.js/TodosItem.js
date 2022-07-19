import React from 'react';

export default function TodosItem({ todo, onToggle, onDelete }) {
  function deleteItem(e) {
    e.stopPropagation();

    onDelete(todo.id)
  }

  return (
    <li
      className={todo.isDone ? 'done' : ''}
      onClick={() => onToggle(todo.id)}>{todo.title}
      <span          
        className="delete-btn"
        onClick={(e) => deleteItem(e)}>
        &#10006;
      </span>
    </li>
  )
}
