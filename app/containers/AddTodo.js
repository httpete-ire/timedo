import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todos.js';
import { bindActionCreators } from 'redux';

let AddTodo = ({ addTodo }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        let val = input.value.trim();

        if (!val) {
          return;
        }

        addTodo(val);
        input.value = '';
      }}
    >
      <input
        type="text"
        className="todo__input"
        placeholder="Enter todo"
        ref={node => {
          input = node;
        }}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );

AddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodo;
