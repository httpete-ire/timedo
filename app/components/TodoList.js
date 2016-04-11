import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({
  todos,
  todoClick
}) => {
  return (
    <div className="todo-list__container">
      <ul className="todo__list">
        {todos.map((todo) => {
          return <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.completed}
            click={() => {
              todoClick(todo.id);
              }
            }
            />;
        }
        )}
      </ul>
    </div>
  );
};

export default TodoList;
