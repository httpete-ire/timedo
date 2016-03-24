const initalState = {
  settingsPanelOpen: false,
  autoPlay: true,
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
