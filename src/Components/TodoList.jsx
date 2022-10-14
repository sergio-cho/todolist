import React from 'react'
import { TodoItems } from './TodoItems';

// le damos a la funcion un arrar de to-dos
export function TodoList({ todos, toggleTodo }) {
  return (
  <ul>
    {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
  </ul>  
  );
}
