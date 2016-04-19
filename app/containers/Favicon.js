import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Favicon extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes : {
    activeicon: PropTypes.string.isRequired,
    breakicon: PropTypes.string.isRequired,
    timerType: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.favicon = document.getElementById('favicon');
    this.favicon.href = this.faviconType();
  }

  componentDidUpdate() {
    this.favicon.href = this.faviconType();
  }

  faviconType() {
    return (this.props.timerType === 'active') ? this.props.activeicon : this.props.breakicon;
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    timerType: state.timer.timerType,
  };
};

Favicon = connect(mapStateToProps)(Favicon);

export default Favicon;
