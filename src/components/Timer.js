import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segunds: 30,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(_, prevState) {
    const { stopTime, allTrues } = this.props;
    if (stopTime) {
      clearInterval(this.time);
    }
    if (prevState.segunds === 1) {
      clearInterval(this.time);
      allTrues();
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
