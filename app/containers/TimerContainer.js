import React from 'react';
import Timer from './../components/Timer.js';
import TimerControls from './../components/TimerControls.js';

const TimerContainer = () => {
  return (
    <div className="timer__container">
      <Timer />
      <TimerControls />
    </div>
  )
};

export default TimerContainer;
