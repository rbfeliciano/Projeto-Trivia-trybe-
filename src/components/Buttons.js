import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/style.css';

export class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  handleClick = () => {
    this.setState({
      toggle: true,
    });
  }

  buttonCorrect = (e, i) => {
    const { toggle } = this.state;
    return (
      <button
        data-testid="correct-answer"
        type="button"
        className={ toggle && 'correct' }
        key={ i }
        onClick={ this.handleClick }
      >
        { e }
      </button>
    );
  }

  buttonIncorrect = (e, i) => {
    const { toggle } = this.state;
    return (
      <button
        data-testid={ `wrong-answer-${i}` }
        type="button"
        className={ toggle && 'incorrect' }
        key={ i }
        onClick={ this.handleClick }
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
};

export default connect(mapStateToProps)(Buttons);
