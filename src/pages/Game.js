import React from 'react';
import Header from '../components/Header';
// import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    // const { token } = this.props;
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   token: state.token.token,
// });

export default Game;
