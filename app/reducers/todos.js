const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      let obj = {
        ...state,
        completed: !state.completed
      };
      return obj;
    case 'DELETE_TODO':
      return (state.id !== action.id);
    case CLEAR_COMPLETED_TODOS:
      return !state.completed;
    default:
      return state;
  }
};

// todo list actions

const initalState = [];

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(null, action)
      ];
    case TOGGLE_TODO:
      let todos = state.map(todo => {
        return todoReducer(todo, action);
      });
      return todos;
    case 'DELETE_TODO':
      return  todos = state.filter(todo => {
        return todoReducer(todo, action);
      });
    case CLEAR_COMPLETED_TODOS:
      return state.filter((todo) => {
        return todoReducer(todo, action);
      });
    default:
      return state;
  }
};

export default todos;
