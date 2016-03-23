import React from 'react';
import { connect } from 'react-redux';
import { toggleSettingsPanel, changeTime } from './../actions/settings.js';
import ToggleContainer from './ToggleContainer.js';
import SliderContainer from './SliderContainer.js';

let SettingsContainer = ({
  togglePanel,
  settingsPanelOpen,
}) => {
  let settingClassNames = 'settings__container';

  // if settingsPanelOpen is true open panel
  if (settingsPanelOpen) {
    settingClassNames += ' is-open';
  }

  return (
    <div className={settingClassNames}>

      <img src="http://httpete.com/assets/settings.svg" className="settings__trigger" onClick={togglePanel} />

      <div className="settings__panel">
        <div className="settings__close">
            <span onClick={togglePanel}>×</span>
        </div>
        <ToggleContainer />
        <SliderContainer />
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    settingsPanelOpen: state.settings.settingsPanelOpen,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: () => {
      dispatch(toggleSettingsPanel());
    },
  };
};

SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsContainer);

export default SettingsContainer;
