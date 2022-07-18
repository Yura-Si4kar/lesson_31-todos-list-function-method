import React from 'react'
import TodosItem from '../TodosItem.js/TodosItem'

export default function TodosList({todos, onToggle, onDelete}) {
  return (
    <ol className="input_blocks">
        {todos.map((item) => <TodosItem
          key={item.id}
          todo={item}
          onToggle={onToggle}
          onDelete={onDelete}          
        />)}
    </ol>
  )
}
