export const toggleSettingsPanel = () => {
  return {
    type: 'TOGGLE_SETTINGS_PANEL',
  };
};

export const changeTime = (timerType, time) => {
  return {
    type: 'CHANGE_TIME',
    timerType,
    time,
  };
};

export const toggleSetting = (settingType) => {
  return {
    type: 'TOGGLE_SETTING',
    settingType,
  }
}
