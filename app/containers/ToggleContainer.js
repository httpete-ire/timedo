import React from 'react';
import { bindActionCreators } from 'redux';
import Toggle from './../components/Toggle.js';
import { connect } from 'react-redux';
import { toggleSetting } from './../actions/settings.js';

let ToggleContainer = ({ toggleSetting, desktopNotification }) => {
  return (
    <div className="toggle-container">
      <Toggle
        label={'Desktop notifications'}
        checked={desktopNotification}
        onToggle={() => {
          // only toggle notifications if the user gives the
          // correct permission

          Notification.requestPermission(permission => {
            if (permission === 'granted') {
              toggleSetting('desktopNotification');
            }
          });
        }}
      />
      <Toggle
        label={'Clear todos'}
        onToggle={() => {
          toggleSetting('cleartodos');
        }}
      />
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    desktopNotification: state.settings.desktopNotification,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSetting,
    },
    dispatch
  );

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ToggleContainer);
