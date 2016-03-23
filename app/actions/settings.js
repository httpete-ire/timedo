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

export const toggleNotification = (notificationType) => {
  return {
    type: 'TOGGLE_NOTIFICATION',
    notificationType,
  }
}
