import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabledBtn: true,
      email: '',
      username: '',
    };
  }

  onHandleChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value }, () => this.checkInput());
  }

  checkInput() {
    const { email, username } = this.state;
    const validation = /\S+@\S+\.\S+/;
    const minCharacters = 2;
    if (validation.test(email) && minCharacters <= username.length) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }
  }

  render() {
    const { email, username } = this.props;
    const {
      disabledBtn,
    } = this.state;

    return (
      <div className="flex max-w-xs">
        <form className="items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2
              px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.onHandleChange }
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2
              px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nome"
              data-testid="input-player-name"
              value={ username }
              onChange={ this.onHandleChange }
            />
          </div>
          <button
            className={ disabledBtn
              ? `bg-red-500 hover:bg-red-400 text-white font-bold cursor-not-allowed
            py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded`
              : `bg-blue-500 hover:bg-blue-400 text-white font-bold
            py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded` }
            type="button"
            disabled={ disabledBtn }
            data-testid="btn-play"
            // onClick={ this.onHandleClick }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Login;
