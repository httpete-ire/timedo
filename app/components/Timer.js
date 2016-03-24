import React from 'react';
import { formatTime } from './../util/index.js';

const Timer = ({
  time,
}) => {
  return (
    <h1>{formatTime(time)}</h1>
  )
};

export default Timer;
