import { combineReducers } from 'redux';
import settings from './settings.js';
import timer from './timer.js';

const pomodoroApp = combineReducers({
  settings,
  timer
});

export default pomodoroApp;
