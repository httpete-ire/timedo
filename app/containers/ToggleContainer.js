import React from 'react';
import Toggle from './../components/Toggle.js';
import { connect } from 'react-redux';
import { toggleNotification } from './../actions/settings.js';

let ToggleContainer = ({
  toggleNotification,
  notifications,
}) => {
  return (
    <div className="toggle-container">
      <Toggle label={'Desktop notifications'} checked={notifications.desktop} onToggle={() => {
        // only toggle notifications if the user gives the
        // correct permission
        Notification.requestPermission((permission) => {
          if(permission === 'granted') {
            toggleNotification('desktop');
          }
        });
      }}/>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    notifications: state.settings.notifications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNotification: (notificationType) => {
      dispatch(toggleNotification(notificationType));
    }
  };
};

ToggleContainer = connect(
  mapsStateToProps,
  mapDispatchToProps
)(ToggleContainer);

export default ToggleContainer;
