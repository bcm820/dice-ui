import { put, all } from 'redux-saga/effects';
import actions from '../actions';

export const fetchUser = {
  dispatch: () => ({ type: actions.user.request })
};

export function* sendUserRequest() {
  yield all([
    put({ type: actions.user.success, payload: {} }),
    put({ type: actions.words.success, payload: 500 })
  ]);
}

// TODO: Use `select` to get random if fetch fails
// Create a selector
// https://stackoverflow.com/questions/38405700/getstate-in-redux-saga
