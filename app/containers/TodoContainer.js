import React from 'react';
import { bindActionCreators } from 'redux';
import AddTodo from './AddTodo.js';
import TodoList from './../components/TodoList.js';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './../actions/todos.js';

const TodoContainer = ({ todos, todoClick, todoDelete }) => {
  return (
    <div className="todo__container">
      <AddTodo />
      <TodoList todos={todos} todoClick={todoClick} todoDelete={todoDelete} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleTodo,
      deleteTodo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
