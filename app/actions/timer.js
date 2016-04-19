export const setTime = (time) => {
  return {
    type: 'SET_TIME',
    time,
  }
};

export const complete = (timerType) => {
  return {
    type: 'COMPLETE',
    timerType,
  };
};

export const startTimer = () => {
  return {
    type: 'START_TIMER',
  };
}

export const stopTimer = () => {
  return {
    type: 'STOP_TIMER',
  }
};

export const notified = () => {
  return {
    type: 'NOTIFIED',
  };
};
