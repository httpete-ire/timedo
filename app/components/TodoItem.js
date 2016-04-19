import React from 'react';
import classNames from 'classnames';

const TodoItem = ({
  complete,
  text,
  click,
  deleteTodo,
}) => {
  return (
    <li className={classNames('todo__item', {'is-complete': complete})}>
      <div className="todo__item-container" onClick={click}>
        <div className="todo__check">
        </div>
        <p className="todo__text">{text}</p>
      </div>
      <span className="todo__delete" onClick={deleteTodo}>×</span>
    </li>
  );
};

export default TodoItem;
