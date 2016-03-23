const initalState = {
  settingsPanelOpen: false,
  times: {
    active: 25,
    shortBreak: 3,
    longBreak: 15
  },
  notifications: {
    desktop: false,
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
    case 'TOGGLE_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.notificationType]: !state.notifications[action.notificationType]
        }
      }
    default:
      return state;
  }
};

export default settings;
