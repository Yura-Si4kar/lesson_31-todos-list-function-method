import '../../css/index.css';
import { useEffect, useState } from "react";
import TodosList from '../TodosList/TodosList';
import { addTodosItem, deleteItem, getTodosList, switchTodosClass } from '../../api';
import TodosForm from '../TodosForm/TodosForm';


export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodosList().then(data => setTodos(data))
  }, [])

  function toggleTodo(id) {
    const todo = todos.find(item => item.id === id)
    const updatedTodo = { ...todo, isDone: !todo.isDone }
    
    switchTodosClass(id, updatedTodo).catch(() => { 
      setTodos(todos.map((item=>item.id !==id ? item : todo)))
   })
    
    setTodos(todos.map((item => item.id !==id ? item : updatedTodo)))
  }

  function deleteTodo(id) {
    deleteItem(id);

    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTitle(newTitle) {
    addTodosItem(newTitle);

    setTodos(todos.map(...todos, { ...newTitle, isDone: false }));
  }

  return (
    <>
      <TodosList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo} />
      <TodosForm addTitle={addTitle}/>
    </>
  );
}