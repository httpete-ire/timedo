import React from 'react';
import Toggle from './../components/Toggle.js';
import ReactSlider from 'react-slider';
import { connect } from 'react-redux';
import { toggleSettingsPanel } from './../actions/settings.js';

let SettingsContainer = ({
  toggleSettingsPanel,
  settingsPanelOpen
}) => {

  let settingClassNames = 'settings__container';

  // if settingsPanelOpen is true open panel
  if (settingsPanelOpen) {
    settingClassNames += ' is-open';
  }

  return (
    <div className={settingClassNames}>

      <img src="http://httpete.com/assets/settings.svg" className="settings__trigger" onClick={toggleSettingsPanel} />

      <div className="settings__panel">
        <div className="settings__close">
            <span onClick={toggleSettingsPanel}>×</span>
        </div>

        <Toggle label={'Desktop notifications'} />

        <div className="slider__container">
          <p className="slider__label">Active time</p>
          <ReactSlider defaultValue={25}
            className={'slider__active'}
            withBars
            min={15}
            max={40}
            step={5}
          />
          <span className="slider__value">25</span>
        </div>

        <div className="slider__container">
          <p className="slider__label">Short break</p>
          <ReactSlider defaultValue={3}
            className={'slider__break'}
            withBars
            min={1}
            max={5}
            step={1}
          />
        <span className="slider__value">3</span>
        </div>

        <div className="slider__container">
          <p className="slider__label">Long break</p>
          <ReactSlider defaultValue={15}
            className={'slider__break'}
            withBars
            min={5}
            max={20}
            step={5}
          />
        <span className="slider__value">15</span>
        </div>

      </div>

    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    settingsPanelOpen: state.settings.settingsPanelOpen,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSettingsPanel: () => {
      dispatch(toggleSettingsPanel());
    },
  };
};

SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsContainer);

export default SettingsContainer;
