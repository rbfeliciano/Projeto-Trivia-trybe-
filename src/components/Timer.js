import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segunds: 5,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { stopTime } = this.props;
    const { segunds } = this.state;
    if (stopTime) {
      clearInterval(this.time);
    }
    if (segunds === 0) {
      clearInterval(this.time);
    }
  }

  startTimer = () => {
    const ONE_SECOND = 1000;
    this.time = setInterval(() => {
      this.setState((prevState) => ({ segunds: prevState.segunds - 1 }));
    }, ONE_SECOND);
  }

  render() {
    const { segunds } = this.state;
    return (
      <div>
        { segunds }
      </div>
    );
  }
}

Timer.propTypes = {
  stopTime: PropTypes.bool,
}.isRequired;

export default Timer;
