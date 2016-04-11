import React from 'react';
import classNames from 'classnames';

const TodoItem = ({
  complete,
  text,
  click,
}) => {
  return (
    <li className={classNames('todo__item', {'is-complete': complete})} onClick={click}>
      <div className="todo__check">
      </div>
      <p className="todo__text">{text}</p>
    </li>
  );
};

export default TodoItem;
