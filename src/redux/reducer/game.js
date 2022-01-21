import { SET_TIME } from '../actions';

const INITIAL_STATE = {
  time: 0,
};

const getTime = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_TIME:
    return {
      ...state,
      time: action.payload,
    };
  default:
    return state;
  }
};

export default getTime;
