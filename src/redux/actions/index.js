export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (payload) => ({
  type: SET_TOKEN, payload,
});

export const SET_NAME = 'SET_NAME';

export const setName = (payload) => ({
  type: SET_NAME, payload,
});

export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (payload) => ({
  type: SET_EMAIL, payload,
});

// export const SET_REQUEST_TOKEN = 'SET_REQUEST_TOKEN';

// export const setRequestToken = (payload) => ({
// type: SET_REQUEST_TOKEN, payload,
// });

export const SET_QUESTIONS = 'SET_QUESTIONS';

export const setQuestions = (payload) => ({
  type: SET_QUESTIONS, payload,
});
