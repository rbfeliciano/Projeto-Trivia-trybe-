import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Buttons extends Component {
  render() {
    const { randomAnwser } = this.props;
    return (
      <div data-testid="answer-options">
        { randomAnwser(0).map((e, i) => ((results[0].correct_answer === e)
          ? <button data-testid={ c } type="button" key={ i }>{ e }</button>
          : <button data-testid={ `${w}-${i}` } type="button" key={ i }>{ e }</button>))}
      </div>
    );
  }
}

Buttons.propTypes = {
  randomAnwser: PropTypes.func.isRequired,
}

export default Buttons;
