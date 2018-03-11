import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notified } from './../actions/timer.js';

const notificationOptions = (timerType, time) => {
  if (timerType === 'break') {
    return {
      body: `Take a quick break`,
      icon: 'http://httpete.com/pomodoro/assets/break-clock.png',
    };
  }
  return {
    body: `Back to it`,
    icon: 'http://httpete.com/pomodoro/assets/active-clock.png',
  };
};

class Notifer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.notificationSet && this.props.notify) {
      let notification = new window.Notification(
        'Pomodoro',
        notificationOptions(this.props.timerType, this.props.currentTime)
      );

      notification.onshow = () => {
        setTimeout(notification.close.bind(notification), 2500);
      };

      notification.onclick = () => {
        notification.close();
      };

      this.props.notified();
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    notificationSet: state.settings.desktopNotification,
    notify: state.timer.notify,
    timerType: state.timer.timerType,
    currentTime: state.timer.currentTime,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      notified,
    },
    dispatch
  );

Notifer = connect(mapStateToProps, mapDispatchToProps)(Notifer);

export default Notifer;
