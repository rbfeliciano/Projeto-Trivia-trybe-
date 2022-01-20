import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import { setToken } from '../redux/actions/index';
import Buttons from '../components/Buttons';
import ButtonGame from '../components/ButtonGame';
import Timer from '../components/Timer';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopTime: false,
      toggle: false,
      disabled: false,
    };
  }

  handleClick = () => {
    this.setState({
      toggle: true,
      stopTime: true,
    });
  }

  allTrues = () => {
    this.setState({
      toggle: true,
      stopTime: true,
      disabled: true,
    });
  }

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
    const { stopTime, toggle, disabled } = this.state;
    const { infoQuestions } = this.props;
    const { results } = infoQuestions;
    return (
      <div>
        <Header />
        <Timer
          stopTime={ stopTime }
          allTrues={ this.allTrues }
        />
        { infoQuestions
          && <p data-testid="question-category">{ results[0].category }</p>}
        { infoQuestions
          && <p data-testid="question-text">{ results[0].question }</p>}

        <Buttons randomAnwser={ this.randomAnwser } />
        <ButtonGame />
        <Buttons
          randomAnwser={ this.randomAnwser }
          handleClick={ this.handleClick }
          toggle={ toggle }
          disabled={ disabled }
        />
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
