import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import { setToken } from '../redux/actions/index';
import Buttons from '../components/Buttons';

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

    return newArrRandomAnswer;
  }

  shuffle = (array) => {
    const numberRandom = 0.5;
    const shuffled = array.sort(() => Math.random() - numberRandom);
    return shuffled;
  }

  render() {
    const { infoQuestions } = this.props;
    const { results } = infoQuestions;
    return (
      <div>
        <Header />
        { infoQuestions
          && <p data-testid="question-category">{ results[0].category }</p>}
        { infoQuestions
          && <p data-testid="question-text">{ results[0].question }</p>}
        <Buttons randomAnwser={ this.randomAnwser } />
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
