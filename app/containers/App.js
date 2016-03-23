import React from 'react';
import TimerContainer from './TimerContainer.js';
import SettingsContainer from './SettingsContainer.js';

const App = () => {
  return (
    <div className="pomodoro__container">
      <TimerContainer />
      <SettingsContainer />
    </div>
  )
};

export default App;
