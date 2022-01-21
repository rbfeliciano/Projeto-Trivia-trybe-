import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import { setToken, setScore } from '../redux/actions/index';
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
      idx: 0,
    };
  }

  componentDidMount() {
    const { name, gravatarEmail, score } = this.props;
    const state = {
      player: {
        name,
        assertions: 0,
        score,
        gravatarEmail,
      },
    };

    localStorage.setItem('state', JSON.stringify(state));
  }

  handleClick = ({ target }) => {
    this.setState({
      toggle: true,
      stopTime: true,
    }, () => this.calculatorPoints(target));
  }

  allTrues = () => {
    this.setState({
      toggle: true,
      stopTime: true,
      disabled: true,
    });
  }

  calculatorPoints = (target) => {
    const { idx } = this.state;
    const { time, infoQuestions: { results }, addPoint } = this.props;
    console.log(results);
    console.log(results[idx].difficulty, 'sou o results');
    const TEN = 10;
    const HARD = 3;
    const result = () => {
      switch (results[idx].difficulty) {
      case 'hard':
        return TEN + (time * HARD);
      case 'medium':
        return TEN + (time * 2);
      case 'easy':
        return TEN + (time * 1);
      default:
        break;
      }
    };
    console.log(result(), 'sou o result');

    if (target.className === 'correct') {
      console.log(target, ' sou o target');
      console.log(target.className, 'sou o class name');
      addPoint(result());
      this.handleLocalStorage(result(), target);
      console.log(addPoint(result()), 'sou o point');
    } else {
      console.log(target, ' sou o target');
      console.log(target.className, 'sou o class name');
      addPoint(0);
      this.handleLocalStorage(0, target);
      console.log(addPoint(0), 'sou o point');
    }
  }

  handleLocalStorage = (result, target) => {
    const { score, name, gravatarEmail } = this.props;
    if (!localStorage.getItem('state')) {
      const state = {
        player: {
          name,
          gravatarEmail,
          assertions: 0,
          score,
        },
      };
      localStorage.setItem('state', JSON.stringify(state));
    }

    if (target.className === 'correct') {
      const state = JSON.parse(localStorage.getItem('state'));
      const newState = {
        player: {
          name,
          gravatarEmail,
          assertions: state.player.assertions + 1,
          score: state.player.score + result,
        },
      };
      localStorage.setItem('state', JSON.stringify(newState));
    }
    this.setState({ disabled: true });
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

/*   handleNextQuestion() {
    const { idx } = this.state;
    this.setState({
      idx: idx + 1,
      stopTime: false,
      toggle: false,
      disabled: false,
    });
  } */

  buttonCorrect = (e, i) => {
    const { toggle, disabled } = this.state;
    return (
      <button
        data-testid="correct-answer"
        type="button"
        className={ toggle && 'correct' }
        key={ i }
        onClick={ this.handleClick }
        disabled={ disabled }
      >
        { e }
      </button>
    );
  }

  buttonIncorrect = (e, i) => {
    const { toggle, disabled } = this.state;
    return (
      <button
        data-testid={ `wrong-answer-${i}` }
        type="button"
        className={ toggle && 'incorrect' }
        key={ i }
        onClick={ this.handleClick }
        disabled={ disabled }
      >
        { e }
      </button>
    );
  }

  renderBottons = (n) => {
    const { infoQuestions: { results } } = this.props;
    const { infoQuestions } = this.props;
    return (
      <div data-testid="answer-options">
        {infoQuestions && this.randomAnwser(n).map((e, i) => (
          (results[n].correct_answer === e)
            ? this.buttonCorrect(e, i) : this.buttonIncorrect(e, i)
        ))}
      </div>
    );
  }

  render() {
    const { stopTime /* toggle, disabled */ } = this.state;
    const { infoQuestions } = this.props;
    const { results } = infoQuestions;
    const lupalupa = this.renderBottons(0);
    return (
      <div>
        <Header />
        <Timer
          stopTime={ stopTime }
          allTrues={ this.allTrues }
          getTime={ this.getTime }
        />
        { infoQuestions
          && <p data-testid="question-category">{ results[0].category }</p>}
        { infoQuestions
          && <p data-testid="question-text">{ results[0].question }</p>}
        { infoQuestions && lupalupa }
        { stopTime
        && (
          <button
            type="button"
            onClick={ this.handleNextQuestion }
            data-testid="btn-next"
          >
            Próxima
          </button>)}
        <ButtonGame />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  infoQuestions: state.player.questions,
  time: state.game.time,
  score: state.player.score,
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetToken: (token) => dispatch(setToken(token)),
  addPoint: (point) => dispatch(setScore(point)),
});

Game.propTypes = {
  infoQuestions: PropTypes.objectOf(PropTypes.string),
  time: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  addPoint: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

Game.defaultProps = {
  infoQuestions: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

/* <Buttons
randomAnwser={ this.randomAnwser }
handleClick={ this.handleClick }
toggle={ toggle }
disabled={ disabled }
/> */
