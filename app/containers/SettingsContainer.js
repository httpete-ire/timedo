import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSettingsPanel, changeTime } from './../actions/settings.js';
import ToggleContainer from './ToggleContainer.js';
import SliderContainer from './SliderContainer.js';
import settingsIcon from './../SVG/settings.svg';

let SettingsContainer = ({ toggleSettingsPanel, settingsPanelOpen }) => {
  return (
    <div
      className={classNames('settings__container', {
        'is-open': settingsPanelOpen,
      })}
    >
      <img
        src={settingsIcon}
        className="settings__trigger"
        onClick={toggleSettingsPanel}
      />

      <div className="settings__panel">
        <div className="settings__close">
          <span onClick={toggleSettingsPanel}>×</span>
        </div>
        <ToggleContainer />
        <SliderContainer />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    settingsPanelOpen: state.settings.settingsPanelOpen,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSettingsPanel }, dispatch);

SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  SettingsContainer
);

export default SettingsContainer;
