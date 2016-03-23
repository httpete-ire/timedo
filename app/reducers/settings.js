const initalState = {
  settingsPanelOpen: false,
  times: {
    active: 25,
    shortBreak: 3,
    longBreak: 15
  }
};

const settings = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_PANEL':
      return {
        ...state,
        settingsPanelOpen: !state.settingsPanelOpen,
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

export default settings;
