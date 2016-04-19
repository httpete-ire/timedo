import React from 'react';
const btnClass = 'btn btn--pomodoro';

const Timer = ({
  start,
  stop,
  activeTimer,
  restart,
}) => {
  return (
    <div className="timer-controls__container">
      {(!activeTimer) ?
        <button className={btnClass} onClick={start}>start</button> :
        <button className={btnClass} onClick={stop}>stop</button>
      }
      <a className="timer__link" onClick={restart}>restart</a>
      <span className="timer__hint">spacebar to {(!activeTimer) ? 'start' : 'stop'} timer</span>
    </div>
  )
};

export default Timer;
