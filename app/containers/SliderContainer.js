import React from 'react';
import { connect } from 'react-redux';
import ReactSlider from 'rc-slider';
import { changeTime } from './../actions/settings.js';

let SliderContainer = ({
  times,
  changeTime,
}) => {
  return (
    <div className="slider-container">
      <div className="slider__container">
        <p className="slider__label">Active time</p>
        <ReactSlider
          className={'slider__active'}
          withBars
          min={15}
          max={40}
          step={5}
          tipFormatter={null}
          value={times.active}
          onChange={(value) => {
            changeTime('active', value);
          }}
        />
      <span className="slider__value">{times.active}</span>
      </div>

      <div className="slider__container">
        <p className="slider__label">Short break</p>
        <ReactSlider
          className={'slider__break'}
          withBars
          min={1}
          max={5}
          step={1}
          tipFormatter={null}
          value={times.shortBreak}
          onChange={(value) => {
            changeTime('shortBreak', value);
          }}
        />
      <span className="slider__value">{times.shortBreak}</span>
      </div>

      <div className="slider__container">
        <p className="slider__label">Long break</p>
        <ReactSlider
          className={'slider__break'}
          withBars
          min={5}
          max={20}
          step={5}
          tipFormatter={null}
          value={times.longBreak}
          onChange={(value) => {
            changeTime('longBreak', value);
          }}
        />
      <span className="slider__value">{times.longBreak}</span>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    times: state.settings.times,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTime: (timerType, time) => {
      dispatch(changeTime(timerType, time));
    },
  };
};

SliderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderContainer);


export default SliderContainer;
