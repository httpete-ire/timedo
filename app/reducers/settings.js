const initalState = {
  settingsPanelOpen: false,
  autoPlay: true,
  desktopNotification: false,
  cleartodos: false,
};

const settings = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_PANEL':
      return {
        ...state,
        settingsPanelOpen: !state.settingsPanelOpen,
      };
    case 'TOGGLE_SETTING':
      return {
        ...state,
        [action.settingType]: !state[action.settingType],
      }
    default:
      return state;
  }
};

export default settings;
