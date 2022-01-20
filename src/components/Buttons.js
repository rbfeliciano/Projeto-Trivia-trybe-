import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/style.css';

export class Buttons extends Component {
  buttonCorrect = (e, i) => {
    const { toggle, handleClick } = this.props;
    return (
      <button
        data-testid="correct-answer"
        type="button"
        className={ toggle && 'correct' }
        key={ i }
        onClick={ handleClick }
      >
        { e }
      </button>
    );
  }

  buttonIncorrect = (e, i) => {
    const { toggle, handleClick } = this.props;
    return (
      <button
        data-testid={ `wrong-answer-${i}` }
        type="button"
        className={ toggle && 'incorrect' }
        key={ i }
        onClick={ handleClick }
      >
        { e }
      </button>
    );
  }

  render() {
    const { infoQuestions: { results }, randomAnwser } = this.props;
    const { infoQuestions } = this.props;
    return (
      <div data-testid="answer-options">
        {infoQuestions && randomAnwser(0).map((e, i) => ((results[0].correct_answer === e)
          ? this.buttonCorrect(e, i) : this.buttonIncorrect(e, i)
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  infoQuestions: state.player.questions,
});

Buttons.propTypes = {
  randomAnwser: PropTypes.func.isRequired,
  infoQuestions: PropTypes.objectOf(PropTypes.string).isRequired,
  toggle: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Buttons);
