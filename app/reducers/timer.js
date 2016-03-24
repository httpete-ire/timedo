const initalState = {
  active: false,
  count: 0,
  currentTime: 25,
  timerType: 'active',
  times: {
    active: 25,
    shortBreak: 3,
    longBreak: 15
  }
};

const timer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_TIME':
      return {
        ...state,
        currentTime: action.time,
      };
    case 'START_TIMER':
      return {
        ...state,
        active: true,
      };
    case 'STOP_TIMER':
      return {
        ...state,
        active: false,
      };
    case 'COMPLETE':
      return {
        ...state,
        active: false,
        count: (action.timerType === 'break') ? state.count + 1 : state.count,
        timerType: action.timerType,
      };
    case 'CHANGE_TIME':
        return {
          ...state,
          times: {
            ...state.times,
            [action.timerType]: action.time
          }
        }
    default:
      return state;
  }
};

export default timer;
