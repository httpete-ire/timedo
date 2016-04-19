import { combineReducers } from 'redux';
import settings from './settings.js';
import timer from './timer.js';
import todos from './todos.js';

const pomodoroApp = combineReducers({
  settings,
  timer,
  todos
});

export default pomodoroApp;
