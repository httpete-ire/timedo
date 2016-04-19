import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todos.js';

let AddTodo = ({
  dispatch
}) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      let val = input.value.trim();

      if(!val) {
        return;
      }

      dispatch(addTodo(val));
      input.value = '';
    }}>
      <input
        type="text"
        className="todo__input"
        placeholder="Enter todo"
        ref={node => {
          input = node
        }}
      />
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
