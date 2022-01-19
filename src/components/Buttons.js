import React, { Component } from 'react';

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

export default Buttons;
