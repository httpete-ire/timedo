import React from 'react';
import Toggle from './../components/Toggle.js';
import { connect } from 'react-redux';
import { toggleSetting } from './../actions/settings.js';

let ToggleContainer = ({
  toggleSetting,
  desktopNotification,
}) => {
  return (
    <div className="toggle-container">
      <Toggle label={'Desktop notifications'} checked={desktopNotification} onToggle={() => {
        // only toggle notifications if the user gives the
        // correct permission
        Notification.requestPermission((permission) => {
          if(permission === 'granted') {
            toggleSetting('desktopNotification');
          }
        });
      }}/>
      <Toggle label={'Clear todos'} onToggle={() => {
          toggleSetting('cleartodos');
        }} />
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    desktopNotification: state.desktopNotification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSetting: (settingType) => {
      dispatch(toggleSetting(settingType));
    }
  };
};

ToggleContainer = connect(
  mapsStateToProps,
  mapDispatchToProps
)(ToggleContainer);

export default ToggleContainer;
