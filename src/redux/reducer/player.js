import { SET_NAME, SET_EMAIL } from '../actions/index';

const initialState = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

function setPlayerData(state = initialState, action) {
  switch (action.type) {
  case SET_NAME:
    return { ...state, name: action.payload };
  case SET_EMAIL:
    return { ...state, gravatarEmail: action.payload };
  default:
    return state;
  }
}

export default setPlayerData;
