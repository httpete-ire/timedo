const initalState = {
  settingsPanelOpen: false
};

const settings = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_PANEL':
      return {
        ...state,
        settingsPanelOpen: !state.settingsPanelOpen,
      };
    default:
      return state;
  }
};

export default settings;
