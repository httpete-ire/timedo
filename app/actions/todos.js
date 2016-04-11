const ADD_TODO = 'ADD_TODO';

let todoID = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: ++todoID,
    text: text,
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
