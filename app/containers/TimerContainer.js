import React from 'react';
import Timer from './../components/Timer.js';
import TimerControls from './../components/TimerControls.js';
import { connect } from 'react-redux';
import {
  setTime,
  complete,
  stopTimer,
  startTimer,
} from './../actions/timer.js';
import { clearCompletedTodos } from './../actions/todos.js';
import { formatTime } from './../util/index.js';

const TimerWorker = require('worker!./../util/TimerWorker.js');

const SPACE_KEY = 32;

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timerWorker = null;
  }

  componentDidMount() {
    document.title = formatTime(this.props.time);
    this.timerWorker = new TimerWorker();
    this.setWorkListeners();

    window.addEventListener('keydown', e => {
      if (e.keyCode === SPACE_KEY && e.target.tagName !== 'INPUT') {
        !this.props.activeTimer
          ? this.startTimer(this.props.time)
          : this.stopTimer();
      }
    });
  }

  componentDidUpdate() {
    document.title = formatTime(this.props.time);
  }

  setWorkListeners() {
    this.timerWorker.addEventListener('message', e => {
      switch (e.data.command) {
        case 'TICK':
          this.props.setTime(e.data.time);
          break;
        case 'COMPLETE':
          this.completeTimer();
          break;
        default:
          return false;
      }
    });
  }

  completeTimer() {
    this.stopTimer();
    this.props.complete(this.props.timerType === 'active' ? 'break' : 'active');

    if (!this.props.autoplay) {
      return;
    }

    let time = null;

    if (this.props.timerType === 'break') {
      time =
        this.props.timerCount % 4 === 0
          ? this.props.times.longBreak
          : this.props.times.shortBreak;
      if (this.props.cleartodos) {
        this.props.clearCompletedTodos();
      }
    } else {
      time = this.props.times.active;
    }

    this.startTimer(time);
  }

  stopTimer() {
    this.timerWorker.postMessage({
      command: 'STOP',
    });
    this.props.stopTimer();
  }

  startTimer(time) {
    if (!this.props.activeTimer) {
      this.timerWorker.postMessage({
        command: 'START',
        time: time,
      });
      this.props.startTimer();
    }
  }

  render() {
    return (
      <div className="timer__container">
        <Timer time={this.props.time} />
        <TimerControls
          activeTimer={this.props.activeTimer}
          start={() => {
            this.startTimer(this.props.time);
          }}
          stop={this.stopTimer}
          restart={() => {}}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.timer.currentTime,
    timerType: state.timer.timerType,
    activeTimer: state.timer.active,
    autoplay: state.settings.autoPlay,
    timerCount: state.timer.count,
    times: state.timer.times,
    cleartodos: state.settings.cleartodos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTime: time => {
      dispatch(setTime(time));
    },
    complete: timerType => {
      dispatch(complete(timerType));
    },
    startTimer: () => {
      dispatch(startTimer());
    },
    stopTimer: () => {
      dispatch(stopTimer());
    },
    clearCompletedTodos: () => {
      dispatch(clearCompletedTodos());
    },
  };
};

TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
export default TimerContainer;
