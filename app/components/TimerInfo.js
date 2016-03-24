import React from 'react';

const TimerInfo = ({
  count,
}) => {
  return (
    <div className="pomodoro__count">
      <p>{count} {(count === 1) ? 'pomodoro' : 'pomodoros'} complete</p>
    </div>
  );
};

export default TimerInfo;
