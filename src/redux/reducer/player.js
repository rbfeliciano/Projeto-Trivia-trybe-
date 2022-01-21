import {
  SET_NAME,
  SET_EMAIL,
  // SET_REQUEST_TOKEN,
  SET_QUESTIONS,
  SET_SCORE,
  RESET_SCORE,
} from '../actions/index';

const initialState = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  // requestToken: '',
  questions: '',
};

function setPlayerData(state = initialState, action) {
  console.log(action.payload, 'sou a action');
  console.log(state.score, 'sou o score global');
  switch (action.type) {
  case SET_NAME:
    return { ...state, name: action.payload };
  case SET_EMAIL:
    return { ...state, gravatarEmail: action.payload };
  // case SET_REQUEST_TOKEN:
  //   return { ...state, requestToken: action.payload };
  case SET_QUESTIONS:
    return { ...state, questions: action.payload };
  case SET_SCORE:
    return { ...state, score: state.score + action.payload };
  case RESET_SCORE:
    return { ...state, score: action.payload };
  default:
    return state;
  }
}

export default setPlayerData;
