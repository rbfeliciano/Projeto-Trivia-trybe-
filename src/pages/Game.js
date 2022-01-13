import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div>
        <p>{ token }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps)(Game);
