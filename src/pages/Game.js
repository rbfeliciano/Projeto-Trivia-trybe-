import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import {
  setToken,
} from '../redux/actions/index';

class Game extends React.Component {
  randomAnwser = (n) => {
    const { infoQuestions } = this.props;
    const { results } = infoQuestions;
    const arrRandomAnswer = [
      results[n].correct_answer,
      ...results[n].incorrect_answers,
    ];

    let order = [];
    const numberOfAnswer = 4;
    for (let i = 0; i < numberOfAnswer; i += 1) {
      order.push(i);
    }

    order = this.shuffle(order);
    const newArrRandomAnswer = arrRandomAnswer.map((e, i) => {
      console.log(e);
      const newAnswer = arrRandomAnswer[order[i]];
      return newAnswer;
    });

    // return (
    //   <div data-testid="answer-options">
    //     { infoQuestions
    //         && this.randomAnwser(0).map((e, i) => (
    //           (results[0].correct_answer === e)
    //             ? <button data-testid={ c } type="button" key={ i }>{ e }</button>
    //             : <button data-testid={ `${w}-${i}` } type="button" key={ i }>{ e }</button>))}
    //   </div>
    // )

    return newArrRandomAnswer;
  }

  shuffle = (array) => {
    let tmp = array.length;
    let current = array.length;
    let top = array.length;
    const one = 1;
    if (top) {
      while (top -= one) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  }

  render() {
    const { infoQuestions } = this.props;
    const { results } = infoQuestions;
    // const { correct } = this.state;
    const c = 'correct-answer';
    const w = 'wrong-answer';
    return (
      <div>
        <Header />
        { infoQuestions
          && <p data-testid="question-category">{ results[0].category }</p>}
        { infoQuestions
          && <p data-testid="question-text">{ results[0].question }</p>}
        <div data-testid="answer-options">
          { this.randomAnwser(0).map((e, i) => ((results[0].correct_answer === e)
            ? <button data-testid={ c } type="button" key={ i }>{ e }</button>
            : <button data-testid={ `${w}-${i}` } type="button" key={ i }>
                { e }
              </button>))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  infoQuestions: state.player.questions,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetToken: (token) => dispatch(setToken(token)),
});

Game.propTypes = {
  infoQuestions: PropTypes.objectOf(PropTypes.string),
};

Game.defaultProps = {
  infoQuestions: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
