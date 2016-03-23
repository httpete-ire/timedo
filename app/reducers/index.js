import { combineReducers } from 'redux';
import settings from './settings.js';

const pomodoroApp = combineReducers({
  settings,
});

export default pomodoroApp;
