import { SET_TOKEN } from '../actions/index';

const initialState = {
  token: '',
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
  case SET_TOKEN:
    return { ...state, token: action.payload };
  default:
    return state;
  }
}

export default loginReducer;
