import React from 'react';
import TimerContainer from './TimerContainer.js';
import SettingsContainer from './SettingsContainer.js';
import TodoContainer from './TodoContainer.js';
import Notifier from './Notifier.js';
import Favicon from './Favicon.js';
import classNames from 'classnames';
import { connect } from 'react-redux';
import TimerInfo from './../components/TimerInfo.js';

let App = ({
  timerType,
  pomodoroCount,
}) => {

  let pomodoroClassnames = classNames('pomodoro__container', 'pomodoro__container--' + timerType);

  return (
    <div className={pomodoroClassnames}>
      <Favicon
        activeicon="https://httpete.com/pomodoro/active.ico"
        breakicon="https://httpete.com/pomodoro/break.ico"
      />
      <Notifier />
      <TodoContainer />
      <TimerContainer />
      <SettingsContainer />
      <TimerInfo count={pomodoroCount} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    timerType: state.timer.timerType,
    pomodoroCount: state.timer.count,
  };
}

App = connect(mapStateToProps)(App);

export default App;
