const initalState = {
  started: false,
  active: false,
  count: 0,
  currentTime: 25,
  timerType: 'active',
  notify: false,
  times: {
    active: 25,
    shortBreak: 3,
    longBreak: 15,
  },
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
        started: true,
        active: true,
        notify: false,
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
        count: action.timerType === 'break' ? state.count + 1 : state.count,
        timerType: action.timerType,
        notify: true,
      };
    case 'CHANGE_TIME':
      return {
        ...state,
        currentTime:
          !state.started && action.timerType === 'active'
            ? action.time
            : state.currentTime,
        times: {
          ...state.times,
          [action.timerType]: action.time,
        },
      };
    case 'NOTIFIED':
      return {
        ...state,
        notify: false,
      };
    case 'RESET': {
      return initalState;
    }
    default:
      return state;
  }
};

export default timer;
