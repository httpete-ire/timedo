import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todos.js';
import { bindActionCreators } from 'redux';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { addTodo } = this.props;
    let val = this.state.inputValue.trim();

    if (!val) {
      return;
    }

    addTodo(val);

    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          className="todo__input"
          placeholder="Enter todo"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
