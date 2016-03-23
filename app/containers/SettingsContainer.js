import React from 'react';

import Toggle from './../components/Toggle.js';
import ReactSlider from 'react-slider';

const SettingsContainer = () => {
  return (
    <div className="settings__container">

      <div className="settings__panel">
        <div className="settings__close">
            <span>×</span>
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

export default SettingsContainer;
