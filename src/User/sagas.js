import { put, all } from 'redux-saga/effects';
import { wordCountActions } from '../App/sagas';

export const userActions = {
  request: 'User: Request',
  success: 'User: Success',
  error: 'User: Error'
};

export const fetchUser = {
  dispatch: () => ({ type: userActions.request })
};

export function* sendUserRequest() {
  yield all([
    put({ type: userActions.success, payload: {} }),
    put({ type: wordCountActions.success, payload: 500 })
  ]);
}

// TODO: Use `select` to get random if fetch fails
// Create a selector
// https://stackoverflow.com/questions/38405700/getstate-in-redux-saga
