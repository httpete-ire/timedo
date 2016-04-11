import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './../components/TodoList.js';
import { connect } from 'react-redux';
import { toggleTodo } from './../actions/todos.js';

const TodoContainer = ({
  todos,
  todoClick,
}) => {
  return (
    <div className="todo__container">
      <AddTodo />
      <TodoList todos={todos} todoClick={todoClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default TodoContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
