import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './../components/TodoList.js';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './../actions/todos.js';

const TodoContainer = ({
  todos,
  todoClick,
  todoDelete,
}) => {
  return (
    <div className="todo__container">
      <AddTodo />
      <TodoList todos={todos} todoClick={todoClick} todoDelete={todoDelete} />
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
    },
    todoDelete: (id) => {
      dispatch(deleteTodo(id));
    }
  };
};

export default TodoContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);
