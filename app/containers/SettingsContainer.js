import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel, changeTime } from './../actions/settings.js';
import ToggleContainer from './ToggleContainer.js';
import SliderContainer from './SliderContainer.js';

let SettingsContainer = ({
  togglePanel,
  settingsPanelOpen,
}) => {
  return (
    <div className={classNames('settings__container', {'is-open': settingsPanelOpen})}>

      <img src="https://httpete.com/assets/settings.svg" className="settings__trigger" onClick={togglePanel} />

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
