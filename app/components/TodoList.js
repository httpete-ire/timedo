import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, todoClick, todoDelete }) => {
  return (
    <div className="todo-list__container">
      <ul className="todo__list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.completed}
            click={() => todoClick(todo.id)}
            deleteTodo={() => todoDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
