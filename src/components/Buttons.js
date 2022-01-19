import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Buttons extends Component {
  buttonCorrect = (e, i) => (
    <button
      data-testid="correct-answer"
      type="button"
      key={ i }
    >
      { e }
    </button>
  )

  buttonIncorrect = (e, i) => (
    <button
      data-testid={ `wrong-answer-${i}` }
      type="button"
      key={ i }
    >
      { e }
    </button>
  )

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
};

export default connect(mapStateToProps)(Buttons);
