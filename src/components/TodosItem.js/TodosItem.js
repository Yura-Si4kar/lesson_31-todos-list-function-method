import React from 'react';

export default function TodosItem({todo, onToggle, onDelete}) {
  return (
    <li
      className={todo.isDone ? 'done' : ''}
      onClick={() => onToggle(todo.id)}>{todo.title}
      <span          
        className="delete-btn"
        onClick={() => onDelete(todo.id)}>
        &#10006;
      </span>
    </li>
  )
}
