import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonGame extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          data-testid="btn-next"
          className="bg-transparent hover:bg-blue-500 text-blue-700
          font-semiboldhover: text-white py-2 px-4  border border-blue-500
          hover: border-transparent rounded"
        >
          Próxima
        </button>
        <Link to="/ranking">
          <button
            type="button"
            data-testid="btn-ranking"
            className="bg-transparent hover:bg-blue-500 text-blue-700
          font-semiboldhover: text-white py-2 px-4  border border-blue-500
          hover: border-transparent rounded"
          >
            Ranking
          </button>
        </Link>
      </>
    );
  }
}

export default ButtonGame;
